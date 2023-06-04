const { connectMongo } = require('../db/connection');

const getPosts = async (req, res) => {
  const { Posts } = await connectMongo();
  const posts = await Posts.find({}).toArray();
  res.json({ posts });
};

const getPostById = (req, res) => {
  // const { id } = req.params;
  // const [post] = posts.filter((item) => item.id === id);
  // if (!post) {
  //   return res
  //     .status(400)
  //     .json({ status: `failure, no posts with id '${id}' found` });
  // }
  // res.json({ post, status: 'success' });
};

const addPost = (req, res) => {
  // const { topic, description } = req.body;
  // posts.push({
  //   topic,
  //   description,
  // });
  // res.json({ status: 'success' });
};

const changePost = (req, res) => {
  // const { topic, description } = req.body;
  // posts.forEach((post) => {
  //   if (post.id === req.params.id) {
  //     post.topic = topic;
  //     post.description = description;
  //   }
  // });
  // res.json({ status: 'success' });
};

const patchPost = (req, res) => {
  // const { topic, description } = req.body;
  // posts.forEach((post) => {
  //   if (post.id === req.params.id) {
  //     if (topic) {
  //       post.topic = topic;
  //     }
  //     if (description) {
  //       post.description = description;
  //     }
  //   }
  // });
  // res.json({ status: 'success' });
};

const deletePost = (req, res) => {
  // posts = posts.filter((item) => item.id === !req.params.id);
  // res.json({ status: 'success' });
};

module.exports = {
  getPosts,
  getPostById,
  addPost,
  changePost,
  patchPost,
  deletePost,
};
