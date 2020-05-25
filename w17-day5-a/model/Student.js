const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    FirstName:{
        type: String,
        require: true
    },
    LastName:{
        type: String,
        require: true
    },
    Email:{
        type: String,
        require: true,
        unique: true
    },
    Mobile:{
        type: Number,
        require: true
    },
    Address:{
        type: String,
        require: true
    },
    Pincode:{
        type: Number,
        require: true
    },
    State:{
        type: String,
        require: true
    },
    Country:{
        type: String,
        require: true
    }
});

module.exports = mongoose.model('student', studentSchema);