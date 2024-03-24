const Anthropic = require('@anthropic-ai/sdk');
const { encoding_for_model: encodingForModel, get_encoding: getEncoding } = require('tiktoken');
const {
  getResponseSender,
  EModelEndpoint,
  validateVisionModel,
} = require('librechat-data-provider');
const { encodeAndFormat } = require('~/server/services/Files/images/encode');
const {
  titleFunctionPrompt,
  parseTitleFromPrompt,
  truncateText,
  formatMessage,
  createContextHandlers,
} = require('./prompts');
const spendTokens = require('~/models/spendTokens');
const { getModelMaxTokens } = require('~/utils');
const BaseClient = require('./BaseClient');
const { logger } = require('~/config');

const HUMAN_PROMPT = '\n\nHuman:';
const AI_PROMPT = '\n\nAssistant:';

const tokenizersCache = {};

/** Helper function to introduce a delay before retrying */
function delayBeforeRetry(attempts, baseDelay = 1000) {
  return new Promise((resolve) => setTimeout(resolve, baseDelay * attempts));
}

class AnthropicClient extends BaseClient {
  constructor(apiKey, options = {}) {
    super(apiKey, options);
    this.apiKey = apiKey || process.env.ANTHROPIC_API_KEY;
    this.userLabel = HUMAN_PROMPT;
    this.assistantLabel = AI_PROMPT;
    this.contextStrategy = options.contextStrategy
      ? options.contextStrategy.toLowerCase()
      : 'discard';
    this.setOptions(options);
  }

  setOptions(options) {
    if (this.options && !this.options.replaceOptions) {
      // nested options aren't spread properly, so we need to do this manually
      this.options.modelOptions = {
        ...this.options.modelOptions,
        ...options.modelOptions,
      };
      delete options.modelOptions;
      // now we can merge options
      this.options = {
        ...this.options,
        ...options,
      };
    } else {
      this.options = options;
    }

    const modelOptions = this.options.modelOptions || {};
    this.modelOptions = {
      ...modelOptions,
      // set some good defaults (check for undefined in some cases because they may be 0)
      model: modelOptions.model || 'claude-1',
      temperature: typeof modelOptions.temperature === 'undefined' ? 1 : modelOptions.temperature, // 0 - 1, 1 is default
      topP: typeof modelOptions.topP === 'undefined' ? 0.7 : modelOptions.topP, // 0 - 1, default: 0.7
      topK: typeof modelOptions.topK === 'undefined' ? 40 : modelOptions.topK, // 1-40, default: 40
      stop: modelOptions.stop, // no stop method for now
    };

    this.isClaude3 = this.modelOptions.model.includes('claude-3');
    this.useMessages = this.isClaude3 || !!this.options.attachments;

    this.defaultVisionModel = this.options.visionModel ?? 'claude-3-sonnet-20240229';
    this.options.attachments?.then((attachments) => this.checkVisionRequest(attachments));

    this.maxContextTokens =
      getModelMaxTokens(this.modelOptions.model, EModelEndpoint.anthropic) ?? 100000;
    this.maxResponseTokens = this.modelOptions.maxOutputTokens || 1500;
    this.maxPromptTokens =
      this.options.maxPromptTokens || this.maxContextTokens - this.maxResponseTokens;

    if (this.maxPromptTokens + this.maxResponseTokens > this.maxContextTokens) {
      throw new Error(
        `maxPromptTokens + maxOutputTokens (${this.maxPromptTokens} + ${this.maxResponseTokens} = ${
          this.maxPromptTokens + this.maxResponseTokens
        }) must be less than or equal to maxContextTokens (${this.maxContextTokens})`,
      );
    }

    this.sender =
      this.options.sender ??
      getResponseSender({
        model: this.modelOptions.model,
        endpoint: EModelEndpoint.anthropic,
        modelLabel: this.options.modelLabel,
      });

    this.startToken = '||>';
    this.endToken = '';
    this.gptEncoder = this.constructor.getTokenizer('cl100k_base');

    if (!this.modelOptions.stop) {
      const stopTokens = [this.startToken];
      if (this.endToken && this.endToken !== this.startToken) {
        stopTokens.push(this.endToken);
      }
      stopTokens.push(`${this.userLabel}`);
      stopTokens.push('<|diff_marker|>');

      this.modelOptions.stop = stopTokens;
    }

    return this;
  }

  /**
   * Get the initialized Anthropic client.
   * @returns {Anthropic} The Anthropic client instance.
   */
  getClient() {
    /** @type {Anthropic.default.RequestOptions} */
    const options = {
      apiKey: this.apiKey,
    };

    if (this.options.reverseProxyUrl) {
      options.baseURL = this.options.reverseProxyUrl;
    }

    return new Anthropic(options);
  }

  getTokenCountForResponse(response) {
    return this.getTokenCountForMessage({
      role: 'assistant',
      content: response.text,
    });
  }

  /**
   *
   * Checks if the model is a vision model based on request attachments and sets the appropriate options:
   * - Sets `this.modelOptions.model` to `gpt-4-vision-preview` if the request is a vision request.
   * - Sets `this.isVisionModel` to `true` if vision request.
   * - Deletes `this.modelOptions.stop` if vision request.
   * @param {MongoFile[]} attachments
   */
  checkVisionRequest(attachments) {
    const availableModels = this.options.modelsConfig?.[EModelEndpoint.anthropic];
    this.isVisionModel = validateVisionModel({ model: this.modelOptions.model, availableModels });

    const visionModelAvailable = availableModels?.includes(this.defaultVisionModel);
    if (
      attachments &&
      attachments.some((file) => file?.type && file?.type?.includes('image')) &&
      visionModelAvailable &&
      !this.isVisionModel
    ) {
      this.modelOptions.model = this.defaultVisionModel;
      this.isVisionModel = true;
    }
  }

  /**
   * Calculate the token cost in tokens for an image based on its dimensions and detail level.
   *
   * For reference, see: https://docs.anthropic.com/claude/docs/vision#image-costs
   *
   * @param {Object} image - The image object.
   * @param {number} image.width - The width of the image.
   * @param {number} image.height - The height of the image.
   * @returns {number} The calculated token cost measured by tokens.
   *
   */
  calculateImageTokenCost({ width, height }) {
    return Math.ceil((width * height) / 750);
  }

  async addImageURLs(message, attachments) {
    const { files, image_urls } = await encodeAndFormat(
      this.options.req,
      attachments,
      EModelEndpoint.anthropic,
    );
    message.image_urls = image_urls.length ? image_urls : undefined;
    return files;
  }

  async recordTokenUsage({ promptTokens, completionTokens, model, context = 'message' }) {
    await spendTokens(
      {
        context,
        user: this.user,
        conversationId: this.conversationId,
        model: model ?? this.modelOptions.model,
        endpointTokenConfig: this.options.endpointTokenConfig,
      },
      { promptTokens, completionTokens },
    );
  }

  async buildMessages(messages, parentMessageId) {
    const orderedMessages = this.constructor.getMessagesForConversation({
      messages,
      parentMessageId,
    });

    logger.debug('[AnthropicClient] orderedMessages', { orderedMessages, parentMessageId });

    if (this.options.attachments) {
      const attachments = await this.options.attachments;
      const images = attachments.filter((file) => file.type.includes('image'));

      if (images.length && !this.isVisionModel) {
        throw new Error('Images are only supported with the Claude 3 family of models');
      }

      const latestMessage = orderedMessages[orderedMessages.length - 1];

      if (this.message_file_map) {
        this.message_file_map[latestMessage.messageId] = attachments;
      } else {
        this.message_file_map = {
          [latestMessage.messageId]: attachments,
        };
      }

      const files = await this.addImageURLs(latestMessage, attachments);

      this.options.attachments = files;
    }

    if (this.message_file_map) {
      this.contextHandlers = createContextHandlers(
        this.options.req,
        orderedMessages[orderedMessages.length - 1].text,
      );
    }

    const formattedMessages = orderedMessages.map((message, i) => {
      const formattedMessage = this.useMessages
        ? formatMessage({
          message,
          endpoint: EModelEndpoint.anthropic,
        })
        : {
          author: message.isCreatedByUser ? this.userLabel : this.assistantLabel,
          content: message?.content ?? message.text,
        };

      const needsTokenCount = this.contextStrategy && !orderedMessages[i].tokenCount;
      /* If tokens were never counted, or, is a Vision request and the message has files, count again */
      if (needsTokenCount || (this.isVisionModel && (message.image_urls || message.files))) {
        orderedMessages[i].tokenCount = this.getTokenCountForMessage(formattedMessage);
      }

      /* If message has files, calculate image token cost */
      if (this.message_file_map && this.message_file_map[message.messageId]) {
        const attachments = this.message_file_map[message.messageId];
        for (const file of attachments) {
          if (file.embedded) {
            this.contextHandlers?.processFile(file);
            continue;
          }

          orderedMessages[i].tokenCount += this.calculateImageTokenCost({
            width: file.width,
            height: file.height,
          });
        }
      }

      formattedMessage.tokenCount = orderedMessages[i].tokenCount;
      return formattedMessage;
    });

    if (this.contextHandlers) {
      this.augmentedPrompt = await this.contextHandlers.createContext();
      this.options.promptPrefix = this.augmentedPrompt + (this.options.promptPrefix ?? '');
    }

    let { context: messagesInWindow, remainingContextTokens } =
      await this.getMessagesWithinTokenLimit(formattedMessages);

    const tokenCountMap = orderedMessages
      .slice(orderedMessages.length - messagesInWindow.length)
      .reduce((map, message, index) => {
        const { messageId } = message;
        if (!messageId) {
          return map;
        }

        map[messageId] = orderedMessages[index].tokenCount;
        return map;
      }, {});

    logger.debug('[AnthropicClient]', {
      messagesInWindow: messagesInWindow.length,
      remainingContextTokens,
    });

    let lastAuthor = '';
    let groupedMessages = [];

    for (let i = 0; i < messagesInWindow.length; i++) {
      const message = messagesInWindow[i];
      const author = message.role ?? message.author;
      // If last author is not same as current author, add to new group
      if (lastAuthor !== author) {
        const newMessage = {
          content: [message.content],
        };

        if (message.role) {
          newMessage.role = message.role;
        } else {
          newMessage.author = message.author;
        }

        groupedMessages.push(newMessage);
        lastAuthor = author;
        // If same author, append content to the last group
      } else {
        groupedMessages[groupedMessages.length - 1].content.push(message.content);
      }
    }

    groupedMessages = groupedMessages.map((msg, i) => {
      const isLast = i === groupedMessages.length - 1;
      if (msg.content.length === 1) {
        const content = msg.content[0];
        return {
          ...msg,
          // reason: final assistant content cannot end with trailing whitespace
          content:
            isLast && this.useMessages && msg.role === 'assistant' && typeof content === 'string'
              ? content?.trim()
              : content,
        };
      }

      if (!this.useMessages && msg.tokenCount) {
        delete msg.tokenCount;
      }

      return msg;
    });

    let identityPrefix = '';
    if (this.options.userLabel) {
      identityPrefix = `\nHuman's name: ${this.options.userLabel}`;
    }

    if (this.options.modelLabel) {
      identityPrefix = `${identityPrefix}\nYou are ${this.options.modelLabel}`;
    }

    let promptPrefix = (this.options.promptPrefix || '').trim();
    if (promptPrefix) {
      // If the prompt prefix doesn't end with the end token, add it.
      if (!promptPrefix.endsWith(`${this.endToken}`)) {
        promptPrefix = `${promptPrefix.trim()}${this.endToken}\n\n`;
      }
      promptPrefix = `\nContext:\n${promptPrefix}`;
    }

    if (identityPrefix) {
      promptPrefix = `${identityPrefix}${promptPrefix}`;
    }

    // Prompt AI to respond, empty if last message was from AI
    let isEdited = lastAuthor === this.assistantLabel;
    const promptSuffix = isEdited ? '' : `${promptPrefix}${this.assistantLabel}\n`;
    let currentTokenCount =
      isEdited || this.useMessages
        ? this.getTokenCount(promptPrefix)
        : this.getTokenCount(promptSuffix);

    let promptBody = '';
    const maxTokenCount = this.maxPromptTokens;

    const context = [];

    // Iterate backwards through the messages, adding them to the prompt until we reach the max token count.
    // Do this within a recursive async function so that it doesn't block the event loop for too long.
    // Also, remove the next message when the message that puts us over the token limit is created by the user.
    // Otherwise, remove only the exceeding message. This is due to Anthropic's strict payload rule to start with "Human:".
    const nextMessage = {
      remove: false,
      tokenCount: 0,
      messageString: '',
    };

    const buildPromptBody = async () => {
      if (currentTokenCount < maxTokenCount && groupedMessages.length > 0) {
        const message = groupedMessages.pop();
        const isCreatedByUser = message.author === this.userLabel;
        // Use promptPrefix if message is edited assistant'
        const messagePrefix =
          isCreatedByUser || !isEdited ? message.author : `${promptPrefix}${message.author}`;
        const messageString = `${messagePrefix}\n${message.content}${this.endToken}\n`;
        let newPromptBody = `${messageString}${promptBody}`;

        context.unshift(message);

        const tokenCountForMessage = this.getTokenCount(messageString);
        const newTokenCount = currentTokenCount + tokenCountForMessage;

        if (!isCreatedByUser) {
          nextMessage.messageString = messageString;
          nextMessage.tokenCount = tokenCountForMessage;
        }

        if (newTokenCount > maxTokenCount) {
          if (!promptBody) {
            // This is the first message, so we can't add it. Just throw an error.
            throw new Error(
              `Prompt is too long. Max token count is ${maxTokenCount}, but prompt is ${newTokenCount} tokens long.`,
            );
          }

          // Otherwise, ths message would put us over the token limit, so don't add it.
          // if created by user, remove next message, otherwise remove only this message
          if (isCreatedByUser) {
            nextMessage.remove = true;
          }

          return false;
        }
        promptBody = newPromptBody;
        currentTokenCount = newTokenCount;

        // Switch off isEdited after using it for the first time
        if (isEdited) {
          isEdited = false;
        }

        // wait for next tick to avoid blocking the event loop
        await new Promise((resolve) => setImmediate(resolve));
        return buildPromptBody();
      }
      return true;
    };

    const messagesPayload = [];
    const buildMessagesPayload = async () => {
      let canContinue = true;

      if (promptPrefix) {
        this.systemMessage = promptPrefix;
      }

      while (currentTokenCount < maxTokenCount && groupedMessages.length > 0 && canContinue) {
        const message = groupedMessages.pop();

        let tokenCountForMessage = message.tokenCount ?? this.getTokenCountForMessage(message);

        const newTokenCount = currentTokenCount + tokenCountForMessage;
        const exceededMaxCount = newTokenCount > maxTokenCount;

        if (exceededMaxCount && messagesPayload.length === 0) {
          throw new Error(
            `Prompt is too long. Max token count is ${maxTokenCount}, but prompt is ${newTokenCount} tokens long.`,
          );
        } else if (exceededMaxCount) {
          canContinue = false;
          break;
        }

        delete message.tokenCount;
        messagesPayload.unshift(message);
        currentTokenCount = newTokenCount;

        // Switch off isEdited after using it once
        if (isEdited && message.role === 'assistant') {
          isEdited = false;
        }

        // Wait for next tick to avoid blocking the event loop
        await new Promise((resolve) => setImmediate(resolve));
      }
    };

    const processTokens = () => {
      // Add 2 tokens for metadata after all messages have been counted.
      currentTokenCount += 2;

      // Use up to `this.maxContextTokens` tokens (prompt + response), but try to leave `this.maxTokens` tokens for the response.
      this.modelOptions.maxOutputTokens = Math.min(
        this.maxContextTokens - currentTokenCount,
        this.maxResponseTokens,
      );
    };

    if (this.modelOptions.model.startsWith('claude-3')) {
      await buildMessagesPayload();
      processTokens();
      return {
        prompt: messagesPayload,
        context: messagesInWindow,
        promptTokens: currentTokenCount,
        tokenCountMap,
      };
    } else {
      await buildPromptBody();
      processTokens();
    }

    if (nextMessage.remove) {
      promptBody = promptBody.replace(nextMessage.messageString, '');
      currentTokenCount -= nextMessage.tokenCount;
      context.shift();
    }

    let prompt = `${promptBody}${promptSuffix}`;

    return { prompt, context, promptTokens: currentTokenCount, tokenCountMap };
  }

  getCompletion() {
    logger.debug('AnthropicClient doesn\'t use getCompletion (all handled in sendCompletion)');
  }

  /**
   * Creates a message or completion response using the Anthropic client.
   * @param {Anthropic} client - The Anthropic client instance.
   * @param {Anthropic.default.MessageCreateParams | Anthropic.default.CompletionCreateParams} options - The options for the message or completion.
   * @param {boolean} useMessages - Whether to use messages or completions. Defaults to `this.useMessages`.
   * @returns {Promise<Anthropic.default.Message | Anthropic.default.Completion>} The response from the Anthropic client.
   */
  async createResponse(client, options, useMessages) {
    return useMessages ?? this.useMessages
      ? await client.messages.create(options)
      : await client.completions.create(options);
  }

  async sendCompletion(payload, { onProgress, abortController }) {
    if (!abortController) {
      abortController = new AbortController();
    }

    const { signal } = abortController;

    const modelOptions = { ...this.modelOptions };
    if (typeof onProgress === 'function') {
      modelOptions.stream = true;
    }

    logger.debug('modelOptions', { modelOptions });

    const client = this.getClient();
    const metadata = {
      user_id: this.user,
    };

    let text = '';
    const {
      stream,
      model,
      temperature,
      maxOutputTokens,
      stop: stop_sequences,
      topP: top_p,
      topK: top_k,
    } = this.modelOptions;

    const requestOptions = {
      model,
      stream: stream || true,
      stop_sequences,
      temperature,
      metadata,
      top_p,
      top_k,
    };

    if (this.useMessages) {
      requestOptions.messages = payload;
      requestOptions.max_tokens = maxOutputTokens || 1500;
    } else {
      requestOptions.prompt = payload;
      requestOptions.max_tokens_to_sample = maxOutputTokens || 1500;
    }

    if (this.systemMessage) {
      requestOptions.system = this.systemMessage;
    }

    logger.debug('[AnthropicClient]', { ...requestOptions });

    const handleChunk = (currentChunk) => {
      if (currentChunk) {
        text += currentChunk;
        onProgress(currentChunk);
      }
    };

    const maxRetries = 3;
    async function processResponse() {
      let attempts = 0;

      while (attempts < maxRetries) {
        let response;
        try {
          response = await this.createResponse(client, requestOptions);

          signal.addEventListener('abort', () => {
            logger.debug('[AnthropicClient] message aborted!');
            if (response.controller?.abort) {
              response.controller.abort();
            }
          });

          for await (const completion of response) {
            // Handle each completion as before
            if (completion?.delta?.text) {
              handleChunk(completion.delta.text);
            } else if (completion.completion) {
              handleChunk(completion.completion);
            }
          }

          // Successful processing, exit loop
          break;
        } catch (error) {
          attempts += 1;
          logger.warn(
            `User: ${this.user} | Anthropic Request ${attempts} failed: ${error.message}`,
          );

          if (attempts < maxRetries) {
            await delayBeforeRetry(attempts, 350);
          } else {
            throw new Error(`Operation failed after ${maxRetries} attempts: ${error.message}`);
          }
        } finally {
          signal.removeEventListener('abort', () => {
            logger.debug('[AnthropicClient] message aborted!');
            if (response.controller?.abort) {
              response.controller.abort();
            }
          });
        }
      }
    }

    await processResponse.bind(this)();

    return text.trim();
  }

  getSaveOptions() {
    return {
      promptPrefix: this.options.promptPrefix,
      modelLabel: this.options.modelLabel,
      resendFiles: this.options.resendFiles,
      ...this.modelOptions,
    };
  }

  getBuildMessagesOptions() {
    logger.debug('AnthropicClient doesn\'t use getBuildMessagesOptions');
  }

  static getTokenizer(encoding, isModelName = false, extendSpecialTokens = {}) {
    if (tokenizersCache[encoding]) {
      return tokenizersCache[encoding];
    }
    let tokenizer;
    if (isModelName) {
      tokenizer = encodingForModel(encoding, extendSpecialTokens);
    } else {
      tokenizer = getEncoding(encoding, extendSpecialTokens);
    }
    tokenizersCache[encoding] = tokenizer;
    return tokenizer;
  }

  getTokenCount(text) {
    return this.gptEncoder.encode(text, 'all').length;
  }

  /**
   * Generates a concise title for a conversation based on the user's input text and response.
   * Involves sending a chat completion request with specific instructions for title generation.
   *
   * This function capitlizes on [Anthropic's function calling training](https://docs.anthropic.com/claude/docs/functions-external-tools).
   *
   * @param {Object} params - The parameters for the conversation title generation.
   * @param {string} params.text - The user's input.
   * @param {string} [params.responseText=''] - The AI's immediate response to the user.
   *
   * @returns {Promise<string | 'New Chat'>} A promise that resolves to the generated conversation title.
   *                            In case of failure, it will return the default title, "New Chat".
   */
  async titleConvo({ text, responseText = '' }) {
    let title = 'New Chat';
    const convo = `<initial_message>
  ${truncateText(text)}
  </initial_message>
  <response>
  ${JSON.stringify(truncateText(responseText))}
  </response>`;

    const { ANTHROPIC_TITLE_MODEL } = process.env ?? {};
    const model = this.options.titleModel ?? ANTHROPIC_TITLE_MODEL ?? 'claude-3-haiku-20240307';
    const system = titleFunctionPrompt;

    const titleChatCompletion = async () => {
      const content = `<conversation_context>
  ${convo}
  </conversation_context>
  
  Please generate a title for this conversation.`;

      const titleMessage = { role: 'user', content };
      const requestOptions = {
        model,
        temperature: 0.3,
        max_tokens: 1024,
        system,
        stop_sequences: ['\n\nHuman:', '\n\nAssistant', '</function_calls>'],
        messages: [titleMessage],
      };

      try {
        const response = await this.createResponse(this.getClient(), requestOptions, true);
        let promptTokens = response?.usage?.input_tokens;
        let completionTokens = response?.usage?.output_tokens;
        if (!promptTokens) {
          promptTokens = this.getTokenCountForMessage(titleMessage);
          promptTokens += this.getTokenCountForMessage({ role: 'system', content: system });
        }
        if (!completionTokens) {
          completionTokens = this.getTokenCountForMessage(response.content[0]);
        }
        await this.recordTokenUsage({
          model,
          promptTokens,
          completionTokens,
          context: 'title',
        });
        const text = response.content[0].text;
        title = parseTitleFromPrompt(text);
      } catch (e) {
        logger.error('[AnthropicClient] There was an issue generating the title', e);
      }
    };

    await titleChatCompletion();
    logger.debug('[AnthropicClient] Convo Title: ' + title);
    return title;
  }
}

module.exports = AnthropicClient;
