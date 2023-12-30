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

// cors
// const origin =
//     process.env.NODE_ENV === 'production'
//         ? 'https://hireme-nu.vercel.app'
//         : 'http://localhost:3000';

// app.use(cors({
//     origin,
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true,
// }));



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
    console.log(req.url, req.method);
    console.log('session started Hello');
    // res.json({msg:"Hello connected"})
    next();
})
// routes
app.use('/api/jobposts', jobRoutes);


mongoose.connect(process.env.MONGO_URI).then(() => {
    // listen for request
    const PORT = process.env.PORT;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((err) => { console.log(err) })

