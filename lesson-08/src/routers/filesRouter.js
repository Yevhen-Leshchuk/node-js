/* eslint-disable object-curly-spacing */
const express = require('express');
const router = new express.Router();

const { asyncWrapper } = require('../helpers/apiHelpers');

const { uploadController } = require('../controllers/filesController');

router.post('/upload', asyncWrapper(uploadController));

module.exports = {
  filesRouter: router,
};
