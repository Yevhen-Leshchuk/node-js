const { NotFound } = require('http-errors');
const { userModel } = require('./users.model');

class UsersService {
  createUser(createParams) {
    return userModel.insertUser(createParams);
  }

  getUsers() {
    return userModel.findUsers();
  }

  getUser(id) {
    const user = userModel.findById(id);
    if (!user) {
      throw new NotFound('user not found');
    }

    return user;
  }
}

exports.usersService = new UsersService();
