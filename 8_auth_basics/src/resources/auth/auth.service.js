const { Conflict } = require('http-errors');
const bcryptjs = require('bcryptjs');
const { UserModel } = require('../users/users.model');
const { getConfig } = require('../../config');

class AuthService {
  async signUp(userParams) {
    const { username, email, password } = userParams;

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      throw new Conflict('User witch such email already exists!');
    }
    const passwordHash = await this.hashPassword(password);
    const user = await UserModel.create({ username, email, passwordHash });

    return user;
  }
  async hashPassword(password) {
    const { bcryptCostFactor } = getConfig();
    return bcryptjs.hash(password, bcryptCostFactor);
  }
}

exports.AuthService = new AuthService();
