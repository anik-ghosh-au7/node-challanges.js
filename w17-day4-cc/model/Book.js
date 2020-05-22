const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    BookName:{
        type: String,
        required: true,
        unique: true
    },
    BookAuthor:{
        type: String,
        required: true
    },
    Genre:[{
        type: String,
        required: true
    }],
    PublishedYear:{
        type: Date,
        required: true
    },
    Rating:{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('book', bookSchema);