/* eslint-disable object-curly-spacing */
/* eslint-disable indent */
const { User } = require('../db/userModel');

const upload = async (email, password) => {
  const user = new User({
    email,
    password,
  });
  await user.save();
};

module.exports = {
  upload,
};
