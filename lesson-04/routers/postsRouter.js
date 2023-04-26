const express = require('express');
const router = express.Router();

const posts = [
  { id: '1', topic: 'test1', description: 'test1 test1 test1' },
  { id: '2', topic: 'test2', description: 'test2 test2 test2' },
  { id: '3', topic: 'test3', description: 'test3 test3 test3' },
];

// GET api/posts/ => [...posts]
router.get('/', (req, res) => {
  res.json({ posts });
});

// GET api/posts/<3> => {post with id 3}
router.get('/:id', (req, res) => {
  const [post] = posts.filter((item) => item.id === req.params.id);
  res.json({ post });
});

// GET api/posts/ => [newPost, ...posts]
router.post('/', (req, res) => {});

router.put('/:id', (req, res) => {});

router.delete('/:id', (req, res) => {});

module.exports = { postsRouter: router };
