const express = require('express');
const router = express.Router();
const PostsController = require('../controllers/posts');

// Posts Starts 
router.get('/posts', PostsController.index);
router.post('/posts', PostsController.newPost);
// Posts Ends 

module.exports = router;