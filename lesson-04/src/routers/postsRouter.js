const short = require('short-uuid');
const express = require('express');
const router = express.Router();

const {
  addPostValidation,
  addPatchValidation,
} = require('../middlewares/validationMiddleware');

const {
  getPosts,
  getPostById,
  addPost,
  changePost,
  patchPost,
  deletePost,
} = require('../controllers/postController');

router.get('/', getPosts);
router.get('/:id', getPostById);
router.post('/', addPostValidation, addPost);
router.put('/:id', addPostValidation, changePost);
router.patch('/:id', addPatchValidation, patchPost);
router.delete('/:id', deletePost);

module.exports = { postsRouter: router };
