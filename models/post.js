const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    band: {
        type: String,
        required: true,
    },
    track: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("Post", postSchema);