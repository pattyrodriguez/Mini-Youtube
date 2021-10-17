const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const videosSchema = new Schema({
    fileName: {
        type: String,
        required: true,
    },
    filePath: {
        type: String,
        required: true
    },
    fileType:{
        type: String,
        required: true,
    },
    tags: [ String ],
    likes: {
        type: Number,
    }
}, {timestamps: true});

module.exports = mongoose.model('Videos', videosSchema);