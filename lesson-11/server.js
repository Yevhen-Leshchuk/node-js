/* eslint-disable object-curly-spacing */
const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

const server = require('http').createServer(app);
const io = require('socket.io')(server);
io.on('connection', (socket) => {
  console.log('new client connected!');

  socket.on('CHAT_MESSAGE', ({ message, username }) => {
    io.emit('CHAT_UPDATE', { message, username });
  });
});

const { connectMongo } = require('./src/db/connection');
const { postsRouter } = require('./src/routers/postsRouter');
const { authRouter } = require('./src/routers/authRouter');
const { filesRouter } = require('./src/routers/filesRouter');
const { errorHandler } = require('./src/helpers/apiHelpers');
const PORT = process.env.PORT || 8081;

app.use(express.json());
app.use(express.static('build'));
app.use(morgan('tiny')); // morgan middleware (for logs)
app.use('/api/posts', postsRouter);
app.use('/api/auth', authRouter);
app.use('/api/files', filesRouter);
app.use(errorHandler);

const start = async () => {
  try {
    await connectMongo();

    server.listen(PORT, (err) => {
      if (err) {
        console.log('Error at server launch', err);
      }
      console.log(`Server work at PORT ${PORT}!`);
    });
  } catch (error) {
    console.error(`Failed to launch application witch error ${error.message}`);
  }
};

start();
