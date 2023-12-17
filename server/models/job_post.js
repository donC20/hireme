const mongoose = require('mongoose');

// initialize schema
const Schema = mongoose.Schema

// Assingn a schema to the job post

const jobSchema = new Schema({
    jobTitle: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    jobType: {
        type: String,
        required: true
    },
    postingDate: { type: Date, default: Date.now },
    expirationDate: { type: Date, required: true },
    experience: {
        type: String,
        required: true
    },
}, { timestamps: true })

module.exports = mongoose.model('jobs', jobSchema)