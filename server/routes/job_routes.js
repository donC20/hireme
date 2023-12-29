const express = require('express');
const router = express.Router();
const { addPostData, getPostData, getSinglePostData, updatePostData, deletePostData } = require('../controllers/jobPostController');
const { createUser, userAuthenticate, logout } = require('../controllers/userRoutesController');

// login sesssion route
router.get('/session', (req, res) => {
    if (req.session.USER_ID) {
        console.log(req.session.USER_ID);
        res.status(200).json({ valid: true, userID: req.session.USER_ID, userData: req.session.USER_DATA });
    } else {
        res.status(200).json({ valid: false });
        console.log(req.session.USER_ID);
    }
})

// logout 
router.get('/logout', logout)

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
// --------------------------------------------------------------
// create user
router.post('/:apikey/createUser', createUser);
// user login
router.post('/:apikey/userAuthenticate', userAuthenticate);

module.exports = router;