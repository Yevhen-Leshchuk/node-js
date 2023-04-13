const uuid = require('uuid');
const users = [];

class userModel {
  insertUser(createParams) {
    const id = uuid.v4();
    const user = { id, ...createParams };

    users.push(user);
    return user;
  }
  findUsers() {
    return users;
  }
  findById(id) {
    return users.find((u) => u.id === id);
  }
}

exports.userModel = new userModel();
