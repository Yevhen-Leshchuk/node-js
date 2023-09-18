const { authorize } = require('./authorize.middleware');
const config = require('./config');
const { Unauthorized } = require('http-errors');

describe('Auth middleware Test Suite', () => {
  describe('when token was not present', () => {
    const middleware = authorize();
    const req = { headers: {} };
    const res = {};
    const next = jest.fn();

    let actualResult;

    beforeAll(() => {
      jest.spyOn(config, 'getConfig').mockReturnValue({});

      try {
        middleware(req, res, next);
      } catch (error) {
        actualResult = error;
      }
    });

    afterAll(() => {
      jest.clearAllMocks();
    });

    test('should throw Unauthorized error', () => {
      expect(actualResult).toBeInstanceOf(Unauthorized);
    });

    test('should not call next', () => {
      expect(next).not.toBeCalled();
    });
  });
});
