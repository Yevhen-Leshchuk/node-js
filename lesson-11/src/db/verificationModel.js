/* eslint-disable space-before-function-paren */
const mongoose = require('mongoose');

const verificationSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
  confirmed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Verification = mongoose.model('Verification', verificationSchema);

module.exports = {
  Verification,
};
