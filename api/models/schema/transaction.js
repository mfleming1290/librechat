const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    index: true,
    required: true,
  },
  conversationId: {
    type: String,
    ref: 'Conversation',
    index: true,
  },
  tokenType: {
    type: String,
    enum: ['prompt', 'completion', 'credits'],
    required: true,
  },
  model: {
    type: String,
  },
  context: {
    type: String,
  },
  valueKey: {
    type: String,
  },
  rawAmount: Number,
  tokenValue: Number,
});

module.exports = transactionSchema;
