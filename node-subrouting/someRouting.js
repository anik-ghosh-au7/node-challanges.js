const express = require('express');

const someRouting = express.Router();

someRouting.get('/', (req, res) => {
    res.send({msg: "some other routes"});
});

module.exports =  someRouting;