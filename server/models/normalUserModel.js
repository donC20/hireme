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
        default: [],
    },
    profileImage: {
        type: String,
        default: "",
    },
    userType: {
        type: String,
        default: 'seeker',
    },
    address: {
        type: String,
        default: "",
    },
    dob: {
        type: Date,
        default: Date.now,
    },
    gender: {
        type: String,
        default: "Not Specified",
    }
});

module.exports = mongoose.model('users', userSchema);