/* eslint-disable object-curly-spacing */
/* eslint-disable indent */
const { User } = require('../db/userModel');
const { NotAuthorizedError } = require('../helpers/errors');

const registration = async (email, password) => {
  const user = new User({
    email,
    password,
  });
  await user.save();
};

const login = async (id) => {};

module.exports = {
  registration,
  login,
};
