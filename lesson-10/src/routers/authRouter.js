/* eslint-disable indent */
/* eslint-disable object-curly-spacing */
const express = require('express');
const router = new express.Router();

const { asyncWrapper } = require('../helpers/apiHelpers');

const {
  registrationController,
  registrationConfirmationController,
  loginController,
} = require('../controllers/authController');

router.post('/registration', asyncWrapper(registrationController));
router.post(
  '/registration_confirmation/:code',
  asyncWrapper(registrationConfirmationController)
);
router.post('/login', asyncWrapper(loginController));

module.exports = {
  authRouter: router,
};
