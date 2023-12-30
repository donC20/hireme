const express = require('express');
const session = require('express-session');
const cors = require('cors');
// const cookieParser = require('cookie-parser');
require('dotenv').config()
// exress app
const app = express();
// mongoose mongoDB connection
const mongoose = require('mongoose');

// route initialization
const jobRoutes = require('./routes/job_routes');

// Express -- middleware
app.use(express.json());

// For vercel deployment
app.use(cors({
    origin: 'https://hireme-api.vercel.app/',
    credentials: true,
  }));

// based on localhost
// app.use(cors({
//     origin: 'http://localhost:3000',
//     credentials: true,
//   }));
// session
// app.use(cookieParser());
app.use(session({
    secret: 'session-secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60 * 24
    }
}));


// Global moddleware
app.use((req, res, next) => {
    // console.log(req.url, req.method);
    // console.log('session started Hello');
    res.json({msg:"Hello connected"})
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

