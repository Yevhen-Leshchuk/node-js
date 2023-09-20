/* eslint-disable object-curly-spacing */
const { upload } = require('../services/filesService');

const uploadController = async (req, res) => {
  const { email, password } = req.body;

  await registration(email, password);

  res.json({ status: 'success' });
};

module.exports = {
  uploadController,
};
