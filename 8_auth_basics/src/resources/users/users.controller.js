const { Router } = require('express');
const { catchErrors } = require('../../middlewares/catch-errors');
const { authorize } = require('../../middlewares/authorize.middlewares');
const { userService } = require('./users.service');
const { serializeUserResponse } = require('./users.serializers');

const usersRouter = Router();

usersRouter.get(
  '/current',
  authorize(),
  catchErrors(async (req, res) => {
    const user = await userService.getCurrentUser(req.user);
    res.status(200).send(serializeUserResponse(user));
  })
);

exports.usersRouter = usersRouter;
