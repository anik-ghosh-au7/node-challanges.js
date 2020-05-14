const express = require('express');

const apiRouting = express.Router();

// add
apiRouting.post('/add', (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    if (num1 && num2){
        const result = num1 + num2;
        const obj = {
        num1,
        num2,
        result
        };
        res.status(200).send(obj);
    } else {
        res.status(400).send({msg: "Plaese provide both inputs"});
    };
});

// subtract
apiRouting.post('/sub', (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    if (num1 && num2){
        const result = num1 - num2;
        const obj = {
        num1,
        num2,
        result
        };
        res.status(200).send(obj);
    } else {
        res.status(400).send({msg: "Plaese provide both inputs"});
    };
});

// division
apiRouting.post('/div', (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    if (num1 && num2){
        const result = num1 / num2;
        const obj = {
        num1,
        num2,
        result
        };
        res.status(200).send(obj);
    } else {
        res.status(400).send({msg: "Plaese provide both inputs"});
    };
});

// multiplication
apiRouting.post('/mul', (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    if (num1 && num2){
        const result = num1 * num2;
        const obj = {
        num1,
        num2,
        result
        };
        res.status(200).send(obj);
    } else {
        res.status(400).send({msg: "Plaese provide both inputs"});
    };
});

// modulo
apiRouting.post('/mod', (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    if (num1 && num2){
        const result = num1 % num2;
        const obj = {
        num1,
        num2,
        result
        };
        res.status(200).send(obj);
    } else {
        res.status(400).send({msg: "Plaese provide both inputs"});
    };
});

module.exports = apiRouting;