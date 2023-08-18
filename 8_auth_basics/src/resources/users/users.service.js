const { NotFound } = require('http-errors');
const { UserModel } = require('./users.model');

class UserService {
  async getCurrentUser(userId) {
    const user = await UserModel.findById({ userId });

    if (!user) {
      throw new NotFound('User not found');
    }
    return user;
  }
}

exports.userService = new UserService();
