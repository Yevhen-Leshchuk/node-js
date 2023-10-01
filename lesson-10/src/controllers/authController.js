/* eslint-disable object-curly-spacing */
const {
  registration,
  registrationConfirmation,
  login,
} = require('../services/authService');

const registrationController = async (req, res) => {
  const { email, password } = req.body;

  await registration(email, password);

  res.json({ status: 'success' });
};

const registrationConfirmationController = async (req, res) => {
  const { code } = req.params;

  await registrationConfirmation(code);

  res.json({ status: 'success' });
};

const loginController = async (req, res) => {
  const { email, password } = req.body;

  const token = await login(email, password);

  res.json({ status: 'success', token });
};

module.exports = {
  registrationController,
  registrationConfirmationController,
  loginController,
};
