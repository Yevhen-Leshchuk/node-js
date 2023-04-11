const uuid = require('uuid');
const users = [];

class userModel {
  insertUser(createParams) {
    const id = uuid.v4();
    const user = { id, ...createParams };

    users.push(user);
    return user;
  }
}

exports.userModel = new userModel();
