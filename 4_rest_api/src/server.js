const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const { getConfig } = require('./config');
const { usersRouter } = require('./resources/users/users.controller');

class UsersServer {
  constructor() {
    this.app = null;
  }

  start() {
    this.initServer();
    this.initConfig();
    // this.initDatabase();
    this.initMiddlewares();
    this.initRoutes();
    this.initErrorHandling();
    this.startListening();
  }

  initServer() {
    this.app = express();
  }

  initConfig() {
    dotenv.config({ path: path.resolve(__dirname, '../.env') });
  }

  initMiddlewares() {
    this.app.use(express.json({ limit: '500kb' }));
  }

  initRoutes() {
    this.app.use('/users', usersRouter);
  }

  initErrorHandling() {
    this.app.use((err, req, res, next) => {
      const statusCode = err.status || '500';
      res.status(statusCode).send(err.message);
    });
  }

  startListening() {
    const { port } = getConfig();
    this.app.listen(port, () => {
      console.log('Started listening on port', port);
    });
  }
}

exports.UsersServer = UsersServer;
