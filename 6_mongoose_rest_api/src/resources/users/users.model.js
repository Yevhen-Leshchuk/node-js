const { required } = require('joi');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const UserModel = mongoose.model('User', userSchema);
exports.UserModel = UserModel;
