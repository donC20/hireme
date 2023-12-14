const express = require('express');
require('dotenv').config()
// exress app
const app = express();
// mongoose mongoDB connection
const mongoose = require('mongoose');

// route initialization
const jobRoutes = require('./routes/job_routes');

// Express -- middleware
app.use(express.json());

// Global moddleware
app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
})
// routes
app.use('/api/jobposts', jobRoutes);

mongoose.connect(process.env.REACT_MONGO_URI).then(() => {
    // listen for request
    const PORT = process.env.PORT;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((err) => { console.log(err) })

