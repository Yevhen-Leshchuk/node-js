class NodeJsError extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}
class ValidationError extends NodeJsError {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

class WrongParametersError extends NodeJsError {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

class NotAuthorizedError extends NodeJsError {
  constructor(message) {
    super(message);
    this.status = 401;
  }
}

module.exports = {
  NodeJsError,
  ValidationError,
  WrongParametersError,
  NotAuthorizedError,
};
