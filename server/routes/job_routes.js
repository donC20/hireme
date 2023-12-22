const express = require('express');
const router = express.Router();
const { addPostData, getPostData, getSinglePostData, updatePostData, deletePostData } = require('../controllers/jobPostController');
const { createUser } = require('../controllers/userRoutesController');
// Fetch all job posts
router.get('/:apikey', getPostData)

// Fet only one job post
router.get('/:apikey/fetchPost/:id', getSinglePostData)

// Add a new job post
router.post('/:apikey/addPost', addPostData);

// remove an post
router.delete('/:apikey/remove/:id', deletePostData)

// Update an post
router.patch('/:apikey/update/:id', updatePostData)

// invalid routers
router.get('*', (req, res) => {
    res.json({ msg: 'invalid routers' })
})

// User section

// create user
router.post('/:apikey/createUser', createUser);

module.exports = router;