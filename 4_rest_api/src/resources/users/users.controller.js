const { Router } = require('express');
const { usersService } = require('./users.service');
const { validate } = require('../../middlewares/validate');
const { createUserSchema } = require('./users.schemas');
const {
  serializeUserResponse,
  serializeUsersListResponse,
} = require('./users.serializers');

const router = Router();

// 1. C - Create
router.post('/', validate(createUserSchema), (req, res, next) => {
  const user = usersService.createUser(req.body);
  res.status(201).send(serializeUserResponse(user));
});

// 2. - Read

router.get('/', (req, res, next) => {
  const users = usersService.getUsers();
  res.status(200).send(serializeUsersListResponse(users));
});
router.get('/:id', (req, res, next) => {
  const user = usersService.getUser(req.params.id);
  res.status(200).send(serializeUserResponse(user));
});

exports.usersRouter = router;
