/* eslint-disable spaced-comment */
/* eslint-disable object-curly-spacing */
const jwt = require('jsonwebtoken');
const { NotAuthorizedError } = require('../helpers/errors');

const authMiddleware = (req, res, next) => {
  try {
    //TODO: validate tape token later (typeToken).
    const [token] = req.headers['authorization'].split(' ');

    if (!token) {
      next(new NotAuthorizedError('Please provide a token'));
    }

    const user = jwt.decode(token, process.env.JWT_SECRET);
    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    next(new NotAuthorizedError('Invalid a token'));
  }
};

module.exports = {
  authMiddleware,
};
