const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: false,
    },
    prefferdJobs: {
        type: Array,
        required: false,
    },
    profileImage: {
        type: String,
        required: false,
    },
    userType: {
        type: String,
        default: 'seeker',
    },
    address: {
        type: String,
        required: false,
    },
    dob: {
        type: Date,
        required: false,
    },
    gender: {
        type: String,
        required: false,
    }
});

module.exports = mongoose.model('users', userSchema);