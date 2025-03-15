const express = require('express');
const router = express.Router();

const { createComment } = require('../controllers/commentControllers');
const {createPost} =require('../controllers/PostControllers');
const {getAllPosts} =require('../controllers/PostControllers');
const {likePost} = require('../controllers/likeControllers');
const {unlikePost} = require('../controllers/likeControllers');



router.post('/comments/create', createComment);
router.post('/posts/create', createPost);
router.get('/posts', getAllPosts);
router.post('/likes/like', likePost);
router.post('/likes/unlike', unlikePost); 

module.exports = router; 
