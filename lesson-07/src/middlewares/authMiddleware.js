/* eslint-disable object-curly-spacing */
const jwt = require('jsonwebtoken');
const { NotAuthorizedError } = require('../helpers/errors');

const authMiddleware = (req, res, next) => {
  // eslint-disable-next-line no-unused-vars
  const [typeToken, token] = req.headers['authorization'].split(' ');

  if (!token) {
    next(new NotAuthorizedError('Please provide a token'));
  }

  try {
    const user = jwt.decode(token, process.env.JWT_SECRET);
    req.token = token;
    req.user = user;
  } catch (error) {
    next(new NotAuthorizedError('Invalid a token'));
  }

  next();
};

module.exports = {
  authMiddleware,
};
