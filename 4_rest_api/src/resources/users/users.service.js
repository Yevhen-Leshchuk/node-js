const { userModel } = require('./users.model');

class userService {
  createUser(createParams) {
    return userModel.insertUser(createParams);
  }
}

exports.userService = new userService();
