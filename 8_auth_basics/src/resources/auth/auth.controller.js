const { Router } = require('express');
const { catchErrors } = require('../../middlewares/catch-errors');
const { validate } = require('../../middlewares/validate');
const { signUpSchema } = require('./auth.schemas');
const { AuthService } = require('./auth.service');
const { serializeUserResponse } = require('../users/users.serializers');

const authRouter = Router();

authRouter.post(
  '/sign-up',
  validate(signUpSchema),
  catchErrors(async (req, res, next) => {
    const user = await AuthService.signUp(req.body);
    res.status(201).send(serializeUserResponse(user));
  })
);

authRouter.post('/sign-in', () => {});

exports.authRouter = authRouter;
