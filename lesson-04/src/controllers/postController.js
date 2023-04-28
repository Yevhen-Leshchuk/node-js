let posts = [
  { id: '1', topic: 'test1', description: 'test1 test1 test1' },
  { id: '2', topic: 'test2', description: 'test2 test2 test2' },
  { id: '3', topic: 'test3', description: 'test3 test3 test3' },
];

const getPosts = (req, res) => {
  res.json({ posts, status: 'success' });
};

const getPostById = (req, res) => {
  const { id } = req.params;
  const [post] = posts.filter((item) => item.id === id);

  if (!post) {
    return res
      .status(400)
      .json({ status: `failure, no posts with id '${id}' found` });
  }

  res.json({ post, status: 'success' });
};

const addPost = (req, res) => {
  const { topic, description } = req.body;

  posts.push({
    id: short.generate(),
    topic,
    description,
  });
  res.json({ status: 'success' });
};

const changePost = (req, res) => {
  const { topic, description } = req.body;

  posts.forEach((post) => {
    if (post.id === req.params.id) {
      post.topic = topic;
      post.description = description;
    }
  });
  res.json({ status: 'success' });
};

const patchPost = (req, res) => {
  const { topic, description } = req.body;

  posts.forEach((post) => {
    if (post.id === req.params.id) {
      if (topic) {
        post.topic = topic;
      }
      if (description) {
        post.description = description;
      }
    }
  });
  res.json({ status: 'success' });
};

const deletePost = (req, res) => {
  posts = posts.filter((item) => item.id === !req.params.id);
  res.json({ status: 'success' });
};

module.exports = {
  getPosts,
  getPostById,
  addPost,
  changePost,
  patchPost,
  deletePost,
};
