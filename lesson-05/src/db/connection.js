const MongoClient = require('mongodb').MongoClient;
const collection = {};

const getCollections = () => {
  return collection;
};

const connectMongo = async () => {
  const client = await MongoClient.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db();

  collection.Posts = db.collection('posts');
  console.log('Database connected successfully!');
};

module.exports = {
  connectMongo,
  getCollections,
};
