// errorHandler.js
const { sendResponse } = require('~/server/utils');
const { logger } = require('~/config');
const getLogStores = require('~/cache/getLogStores');
const { CacheKeys, ViolationTypes, ContentTypes } = require('librechat-data-provider');
const { getConvo } = require('~/models/Conversation');
const { recordUsage, checkMessageGaps } = require('~/server/services/Threads');

/**
 * @typedef {Object} ErrorHandlerContext
 * @property {OpenAIClient} openai - The OpenAI client
 * @property {string} thread_id - The thread ID
 * @property {string} run_id - The run ID
 * @property {boolean} completedRun - Whether the run has completed
 * @property {string} assistant_id - The assistant ID
 * @property {string} conversationId - The conversation ID
 * @property {string} parentMessageId - The parent message ID
 * @property {string} responseMessageId - The response message ID
 * @property {string} endpoint - The endpoint being used
 * @property {string} cacheKey - The cache key for the current request
 */

/**
 * @typedef {Object} ErrorHandlerDependencies
 * @property {Express.Request} req - The Express request object
 * @property {Express.Response} res - The Express response object
 * @property {() => ErrorHandlerContext} getContext - Function to get the current context
 */

/**
 * Creates an error handler function with the given dependencies
 * @param {ErrorHandlerDependencies} dependencies - The dependencies for the error handler
 * @returns {(error: Error) => Promise<void>} The error handler function
 */
const createErrorHandler = ({ req, res, getContext }) => {
  const cache = getLogStores(CacheKeys.ABORT_KEYS);

  /**
   * Handles errors that occur during the chat process
   * @param {Error} error - The error that occurred
   * @returns {Promise<void>}
   */
  return async (error) => {
    const {
      openai,
      run_id,
      endpoint,
      cacheKey,
      thread_id,
      completedRun,
      assistant_id,
      conversationId,
      parentMessageId,
      responseMessageId,
    } = getContext();

    const defaultErrorMessage =
      'The Assistant run failed to initialize. Try sending a message in a new conversation.';
    const messageData = {
      thread_id,
      assistant_id,
      conversationId,
      parentMessageId,
      sender: 'System',
      user: req.user.id,
      shouldSaveMessage: false,
      messageId: responseMessageId,
      endpoint,
    };

    if (error.message === 'Run cancelled') {
      return res.end();
    } else if (error.message === 'Request closed' && completedRun) {
      return;
    } else if (error.message === 'Request closed') {
      logger.debug('[/assistants/chat/] Request aborted on close');
    } else if (/Files.*are invalid/.test(error.message)) {
      const errorMessage = `Files are invalid, or may not have uploaded yet.${
        endpoint === 'azureAssistants'
          ? ' If using Azure OpenAI, files are only available in the region of the assistant\'s model at the time of upload.'
          : ''
      }`;
      return sendResponse(req, res, messageData, errorMessage);
    } else if (error?.message?.includes('string too long')) {
      return sendResponse(
        req,
        res,
        messageData,
        'Message too long. The Assistants API has a limit of 32,768 characters per message. Please shorten it and try again.',
      );
    } else if (error?.message?.includes(ViolationTypes.TOKEN_BALANCE)) {
      return sendResponse(req, res, messageData, error.message);
    } else {
      logger.error('[/assistants/chat/]', error);
    }

    if (!openai || !thread_id || !run_id) {
      return sendResponse(req, res, messageData, defaultErrorMessage);
    }

    await new Promise((resolve) => setTimeout(resolve, 2000));

    try {
      const status = await cache.get(cacheKey);
      if (status === 'cancelled') {
        logger.debug('[/assistants/chat/] Run already cancelled');
        return res.end();
      }
      await cache.delete(cacheKey);
      const cancelledRun = await openai.beta.threads.runs.cancel(thread_id, run_id);
      logger.debug('[/assistants/chat/] Cancelled run:', cancelledRun);
    } catch (error) {
      logger.error('[/assistants/chat/] Error cancelling run', error);
    }

    await new Promise((resolve) => setTimeout(resolve, 2000));

    let run;
    try {
      run = await openai.beta.threads.runs.retrieve(thread_id, run_id);
      await recordUsage({
        ...run.usage,
        model: run.model,
        user: req.user.id,
        conversationId,
      });
    } catch (error) {
      logger.error('[/assistants/chat/] Error fetching or processing run', error);
    }

    let finalEvent;
    try {
      const runMessages = await checkMessageGaps({
        openai,
        run_id,
        endpoint,
        thread_id,
        conversationId,
        latestMessageId: responseMessageId,
      });

      const errorContentPart = {
        text: {
          value:
            error?.message ?? 'There was an error processing your request. Please try again later.',
        },
        type: ContentTypes.ERROR,
      };

      if (!Array.isArray(runMessages[runMessages.length - 1]?.content)) {
        runMessages[runMessages.length - 1].content = [errorContentPart];
      } else {
        const contentParts = runMessages[runMessages.length - 1].content;
        for (let i = 0; i < contentParts.length; i++) {
          const currentPart = contentParts[i];
          /** @type {CodeToolCall | RetrievalToolCall | FunctionToolCall | undefined} */
          const toolCall = currentPart?.[ContentTypes.TOOL_CALL];
          if (
            toolCall &&
            toolCall?.function &&
            !(toolCall?.function?.output || toolCall?.function?.output?.length)
          ) {
            contentParts[i] = {
              ...currentPart,
              [ContentTypes.TOOL_CALL]: {
                ...toolCall,
                function: {
                  ...toolCall.function,
                  output: 'error processing tool',
                },
              },
            };
          }
        }
        runMessages[runMessages.length - 1].content.push(errorContentPart);
      }

      finalEvent = {
        final: true,
        conversation: await getConvo(req.user.id, conversationId),
        runMessages,
      };
    } catch (error) {
      logger.error('[/assistants/chat/] Error finalizing error process', error);
      return sendResponse(req, res, messageData, 'The Assistant run failed');
    }

    return sendResponse(req, res, finalEvent);
  };
};

module.exports = { createErrorHandler };
