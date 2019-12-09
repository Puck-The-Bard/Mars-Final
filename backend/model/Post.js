const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    id: String,
    av: String
});

module.exports = mongoose.model('Post', postSchema);