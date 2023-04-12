const { Router } = require('express');
const { userService } = require('./users.service');
const { validate } = require('../../middlewares/validate');
const { createUserSchema } = require('./users.schemas');
const { serializeUserResponse } = require('./users.serializers');

const router = Router();

// 1. C - Create
router.post('/', validate(createUserSchema), (req, res, next) => {
  const user = userService.createUser(req.body);
  res.status(201).send(serializeUserResponse(user));
});

exports.usersRouter = router;
