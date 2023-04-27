const short = require('short-uuid');
const express = require('express');
const router = express.Router();

let posts = [
  { id: '1', topic: 'test1', description: 'test1 test1 test1' },
  { id: '2', topic: 'test2', description: 'test2 test2 test2' },
  { id: '3', topic: 'test3', description: 'test3 test3 test3' },
];

// GET api/posts/ => [...posts]
router.get('/', (req, res) => {
  res.json({ posts, status: 'success' });
});

// GET api/posts/<123> => {post with id 123}
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const [post] = posts.filter((item) => item.id === id);

  if (!post) {
    return res
      .status(400)
      .json({ status: `failure, no posts with id '${id}' found` });
  }

  res.json({ post, status: 'success' });
});

// POST api/posts/ => [newPost, ...posts]
router.post('/', (req, res) => {
  const { topic, description } = req.body;
  posts.push({ id: short.generate(), topic, description });
  res.json({ status: 'success' });
});

// PUT api/posts/<123> => [changedPost, ...posts]
router.put('/:id', (req, res) => {
  const { topic, description } = req.body;
  posts.forEach((post) => {
    if (post.id === req.params.id) {
      post.topic = topic;
      post.description = description;
    }
  });
  res.json({ status: 'success' });
});

// PATCH api/posts/<123> => [changedPost item, ...posts]
router.patch('/:id', (req, res) => {
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
});

// DELETE api/posts/<123> => [posts without post with id 123]
router.delete('/:id', (req, res) => {
  posts = posts.filter((item) => item.id === !req.params.id);
  res.json({ status: 'success' });
});

module.exports = { postsRouter: router };
