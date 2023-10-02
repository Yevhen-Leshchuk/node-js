/* eslint-disable object-curly-spacing */
/* eslint-disable max-len */
/* eslint-disable indent */
const { authMiddleware } = require('../src/middlewares/authMiddleware');
const { NotAuthorizedError } = require('../src/helpers/errors');
const jwt = require('jsonwebtoken');
require('dotenv').config();

describe('Auth middleware test', () => {
  it('should call next() and add user and token properties to req object', () => {
    const user = {
      _id: '1',
      createdAt: new Date().getTime(),
    };
    const token = jwt.sign(
      {
        _id: user._id,
        createdAt: user.createdAt,
      },
      process.env.JWT_SECRET
    );
    const mReq = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
    const mRes = {};
    const mNext = jest.fn();

    authMiddleware(mReq, mRes, mNext);

    expect(mReq.token).toEqual(token);
    expect(mReq.user._id).toEqual(user._id);
    expect(mReq.user.createdAt).toEqual(user.createdAt);
    expect(mNext).toHaveBeenCalled();
  });

  it('should call next() with error in case authorization header is absent', () => {
    const mReq = {
      headers: {},
    };
    const mRes = {};
    const mNext = jest.fn();

    authMiddleware(mReq, mRes, mNext);

    expect(mNext).toHaveBeenCalledWith(
      new NotAuthorizedError(
        'Please provide a token in request authorization header'
      )
    );
  });
});
