const express = require('express');
const {getPosts, getMusic, createPost} = require('../controllers/post');
const validator = require('../validators/index');

const router = express.Router();

router.get('/', getPosts);
router.get('/music/', getMusic);
router.post("/post", validator.createPostValidator, createPost);

module.exports = router;
