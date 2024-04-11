const { v4: uuidv4 } = require('uuid');
const { Constants } = require('librechat-data-provider');
const { bulkSaveConvos } = require('~/models/Conversation');
const { bulkSaveMessages } = require('~/models/Message');
const { logger } = require('~/config');

const defaultModel = 'gpt-3.5-turbo';

// Factory function for creating ConversationBuilder instances
/**
 * Creates an instance of ImportBatchBuilder.
 * @param {string} requestUserId - The ID of the user making the request.
 * @returns {ImportBatchBuilder} - The newly created ImportBatchBuilder instance.
 */
function createImportBatchBuilder(requestUserId) {
  return new ImportBatchBuilder(requestUserId);
}

/**
 * Class for building a batch of conversations and messages and pushing them to DB for Conversation Import functionality
 */
class ImportBatchBuilder {
  /**
   * Creates an instance of ImportBatchBuilder.
   * @param {string} requestUserId - The ID of the user making the import request.
   */
  constructor(requestUserId) {
    this.requestUserId = requestUserId;
    this.conversations = [];
    this.messages = [];
  }

  /**
   * Starts a new conversation in the batch.
   * @param {string} [endpoint='openAI'] - The endpoint for the conversation. Defaults to 'openAI'.
   * @returns {Promise<void>} A promise that resolves when the conversation is started.
   */
  async startConversation(endpoint) {
    // we are simplifying by using a single model for the entire conversation

    this.endpoint = endpoint || 'openAI';
    this.conversationId = uuidv4();
    this.lastMessageId = Constants.NO_PARENT;
  }

  /**
   * Adds a user message to the current conversation.
   * @param {string} text - The text of the user message.
   * @returns {Promise<object>} A promise that resolves with the saved message object.
   */
  async addUserMessage(text) {
    const message = await this.saveMessage(text, 'user', true);
    return message;
  }

  /**
   * Adds a GPT message to the current conversation.
   * @param {string} text - The text of the GPT message.
   * @param {string} [model='defaultModel'] - The model used for generating the GPT message. Defaults to 'defaultModel'.
   * @param {string} [sender='GPT-3.5'] - The sender of the GPT message. Defaults to 'GPT-3.5'.
   * @returns {Promise<object>} A promise that resolves with the saved message object.
   */
  async addGptMessage(text, model, sender = 'GPT-3.5') {
    const message = await this.saveMessage(text, sender, false, model || defaultModel);
    return message;
  }

  /**
   * Finishes the current conversation and adds it to the batch.
   * @param {string} [title='Imported Chat'] - The title of the conversation. Defaults to 'Imported Chat'.
   * @param {Date} [createdAt] - The creation date of the conversation.
   * @returns {Promise<object>} A promise that resolves with the added conversation object.
   */
  async finishConversation(title, createdAt) {
    const convo = {
      user: this.requestUserId,
      conversationId: this.conversationId,
      title: title || 'Imported Chat',
      createdAt: createdAt,
      updatedAt: createdAt,
      overrideTimestamp: true,
      endpoint: this.endpoint,
      model: defaultModel,
    };
    this.conversations.push(convo);
    logger.debug(`Conversation added to the batch: ${convo.conversationId}`);

    return convo;
  }

  /**
   * Saves the batch of conversations and messages to the DB.
   * @returns {Promise<void>} A promise that resolves when the batch is saved.
   * @throws {Error} If there is an error saving the batch.
   */
  async saveBatch() {
    try {
      await bulkSaveConvos(this.conversations);
      await bulkSaveMessages(this.messages);
    } catch (error) {
      logger.error('Error saving batch', error);
      throw error;
    }
  }

  /**
   * Adds a message to the current conversation. It's supposed to be used internally by the class.
   * @param {string} text - The text of the message.
   * @param {string} sender - The sender of the message.
   * @param {boolean} isCreatedByUser - Indicates whether the message is created by the user.
   * @returns {object} The saved message object.
   */
  saveMessage(text, sender, isCreatedByUser) {
    const newMessageId = uuidv4();
    const message = {
      messageId: newMessageId,
      parentMessageId: this.lastMessageId,
      conversationId: this.conversationId,
      isCreatedByUser: isCreatedByUser,
      user: this.requestUserId,
      endpoint: this.endpoint,
      model: this.model,
      text: text,
      unfinished: false,
      error: false,
      isEdited: false,
      sender: sender,
    };
    this.lastMessageId = newMessageId;

    this.messages.push(message);

    return message;
  }
}

module.exports = { ImportBatchBuilder, createImportBatchBuilder };
