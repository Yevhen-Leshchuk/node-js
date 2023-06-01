const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const { postsRouter } = require('./src/routers/postsRouter');
const PORT = process.env.PORT || 8081;

app.use(express.json());
app.use(morgan('tiny')); // morgan middleware (for logs)
app.use('/api/posts', postsRouter);

const start = async () => {
  const client = await MongoClient.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
  });
  const db = client.db();
  const Posts = db.collection('posts');
  const posts = await Posts.find({}).toArray();
  console.log(posts);
  app.listen(PORT, (err) => {
    if (err) {
      console.log('Error at server launch', err);
    }
    console.log(`Server work at PORT ${PORT}!`);
  });
};

start();
