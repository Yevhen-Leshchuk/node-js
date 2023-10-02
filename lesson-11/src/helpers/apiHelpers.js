/* eslint-disable object-curly-spacing */
const { NodeJsError } = require('../helpers/errors');

const asyncWrapper = (controller) => {
  return (req, res, next) => {
    controller(req, res).catch(next);
  };
};

const errorHandler = (error, req, res, next) => {
  if (error instanceof NodeJsError) {
    return res.status(error.status).json({ message: error.message });
  } else {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  asyncWrapper,
  errorHandler,
};
