const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const { postsRouter } = require('./src/routers/postsRouter');
const PORT = process.env.PORT || 8081;

app.use(express.json());
app.use(morgan('tiny')); // morgan middleware (for logs)
app.use('/api/posts', postsRouter);

app.listen(PORT, (err) => {
  if (err) {
    console.log('Error at server launch', err);
  }
  console.log(`Server work at PORT ${PORT}!`);
});
