const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: String,
    id: Number,
    completed: String
});

module.exports = mongoose.model('Post', postSchema);