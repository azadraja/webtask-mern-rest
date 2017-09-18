const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    author: String,
    content: String,
    amazingFactor: String,
    created_at: Date,
    id: mongoose.Schema.ObjectId
});