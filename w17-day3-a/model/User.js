const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        require: true
    },
    Username: {
        type: String,
        require: true,
        unique: true
    },
    Email: {
        type: String,
        require: true
    },
    Password: {
        type: String,
        require: true
    },
    Group: [{
        type: String,
        require: true
    }]
});

module.exports = mongoose.model('user', userSchema);