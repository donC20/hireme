// Connect to MongoDB
const mongoose = require('mongoose');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error for hireme:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});
const authCollection = db.collection('auth');

module.exports = { authCollection }