const dotenv = require('dotenv');
const path = require('path');
const { MongoClient, ObjectId } = require('mongodb');

dotenv.config({ path: path.resolve(__dirname, '.env') });

const url = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB_NAME;

const client = new MongoClient(url);

async function main() {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');
  // const collection = db.collection('leagues');

  // await collection.insertOne({
  //   name: 'first document',
  //   createdAt: new Date(),
  // });

  // for (let i = 0; i < 20; i++) {
  //   const userNum = i + 1;
  //   await collection.insertOne({
  //     name: `user${userNum}`,
  //     age: userNum,
  //     ageStr: `${userNum}`,
  //   });
  // }

  // console.log('finished');

  // console.log(
  //   await collection.findOne({ _id: new ObjectId('6457eed8726228a91bea83c7') })
  // );

  // await collection.insertOne({
  //   name: 'UEFA',
  //   teams: [
  //     {
  //       order: 1,
  //       name: 'Real Madrid',
  //     },
  //     {
  //       order: 2,
  //       name: 'Manchester City',
  //     },
  //   ],
  // });

  // console.log(
  //   await collection
  //     .find({ teams: { $elemMatch: { order: { $gt: 2 } } } })
  //     .toArray()
  // );

  // console.log(await collection.find({ age: { $gte: 8, $lte: 17 } }).toArray());

  // console.log(
  //   await collection
  //     .find({
  //       _id: {
  //         $in: [
  //           new ObjectId('645a89488f1642e501a58c8b'),
  //           new ObjectId('645a89498f1642e501a58c8f'),
  //         ],
  //       },
  //     })
  //     .toArray()
  // );

  // console.log(
  //   await collection
  //     .find({
  //       $or: [
  //         { _id: new ObjectId('645a8f157fd1337285fe153b') },
  //         { name: 'user3' },
  //       ],
  //     })
  //     .toArray()
  // );

  // console.log(await collection.find().sort({ age: 'asc' }).toArray());
  console.log(
    await collection.find().skip(2).limit(3).sort({ age: 'desc' }).toArray()
  );
}

main();
