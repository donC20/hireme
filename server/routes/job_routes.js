const express = require('express');
const router = express.Router();
const { addPostData,getPostData,getSinglePostData,updatePostData,deletePostData } = require('../controllers/jobPostController');

// Fetch all job posts
router.get('/',getPostData)

// Fet only one job post
router.get('/:id', getSinglePostData)

// Add a new job post
router.post('/addPost',addPostData);

// remove an post
router.delete('/:id', deletePostData)

// Update an post
router.patch('/:id', updatePostData)

// invalid routers
router.get('*', (req, res) => {
    res.json({ msg: 'invalid routers' })
})

module.exports = router;