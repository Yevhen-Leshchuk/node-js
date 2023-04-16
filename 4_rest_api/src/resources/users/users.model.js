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

  updateById(id, updateParams) {
    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
      return null;
    }

    users[userIndex] = {
      ...users[userIndex],
      ...updateParams,
    };

    return users[userIndex];
  }
}

exports.userModel = new userModel();
