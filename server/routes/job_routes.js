const express = require('express');
const router = express.Router();
const jobPost = require('../models/job_post');

// Fetch all job posts
router.get('/', (req, res) => {
    res.json({ msg: 'Fetch all jobs' })
})

// Fet only one job post
router.get('/:id', (req, res) => {
    res.json({ msg: 'Single job' })
})

// Add a new job post
router.post('/addPost', async (req, res) => {
    try {
        const jobData = req.body;

        // Create and save the new job post with dynamic fields
        const jobInsertData = await jobPost.create(jobData);

        // Respond with the inserted data
        res.status(200).json(jobInsertData);
    } catch (error) {
        console.error(error);

        // Respond with an error message
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// remove an post
router.delete('/:id', (req, res) => {
    res.json({ msg: 'delete a job' })
})

// Update an post
router.patch('/:id', (req, res) => {
    res.json({ msg: 'Update a job' })
})

// invalid routers
router.get('*', (req, res) => {
    res.json({ msg: 'invalid routers' })
})

module.exports = router;

// const mongoose = require('mongoose');
