const jobPost = require('../models/job_post');
const mongoose = require('mongoose');

// fetch post controller

const getPostData = async (req, res) => {
    try {
        // Execute the query and await the results
        const jobFetchData = await jobPost.find({}).sort({ createdAt: -1 });

        // Respond with the fetched data
        res.status(200).json(jobFetchData);
    } catch (error) {
        console.error(error);

        // Respond with an error message
        res.status(500).json({ error: `Internal Server Error ${error}` });
    }
};

// get single post controller
const getSinglePostData = async (req, res) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: 'Invalid ID' })
        }
        const singlePostData = await jobPost.findById({_id: id});
        if (!jobPost) {
            return res.status(404).json({ error: 'job not found' })

        } else {
            res.status(200).json(singlePostData);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}



// add post controller
const addPostData = async (req, res) => {
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
}

// remove data controller
const deletePostData = async (req, res) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: 'Invalid ID' })
        }
        await jobPost.findOneAndDelete({ _id: id });
        if (!jobPost) {
            return res.status(400).json({ error: 'Job not found' })

        } else {
            res.status(200).json({ message: "Job deleted" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// update data controller
const updatePostData = async (req, res) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: 'Invalid ID' })
        }
        await jobPost.findOneAndUpdate({ _id: id },{
            ...req.body
        });
        if (!jobPost) {
            return res.status(400).json({ error: 'Job not found' })

        } else {
            res.status(200).json({ message: "Job updated" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    addPostData,
    getPostData,
    getSinglePostData,
    updatePostData,
    deletePostData
}