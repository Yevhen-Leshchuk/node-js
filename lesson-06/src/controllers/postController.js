/* eslint-disable indent */
/* eslint-disable object-curly-spacing */
const { Post } = require('../db/postModel');

const getPosts = async (req, res) => {
  const posts = await Post.find({});
  res.json({ posts });
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id);
  if (!post) {
    return res
      .status(400)
      .json({ status: `failure, no posts with id '${id}' found` });
  }
  res.json({ post, status: 'success' });
};

const addPost = async (req, res) => {
  const { topic, text } = req.body;
  const post = new Post({ topic, text });
  await post.save();
  res.json({ status: 'success' });
};

const changePost = async (req, res) => {
  // const { topic, text } = req.body;
  // await req.db.Posts.updateOne(
  //   { _id: new ObjectId(req.params.id) },
  //   { $set: { topic, text } }
  // );
  // res.json({ status: 'success' });
};

const deletePost = async (req, res) => {
  // await req.db.Posts.deleteOne({ _id: new ObjectId(req.params.id) });
  // res.json({ status: 'success' });
};

module.exports = {
  getPosts,
  getPostById,
  addPost,
  changePost,
  deletePost,
};
