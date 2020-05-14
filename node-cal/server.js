const express = require('express');
const moragn = require('morgan');
const bodyParser = require('body-parser');


const app = express();

app.use(moragn('tiny'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Server is running!!!');
});

app.get('/add/:num1/:num2', (req, res) => {
    let num1 = Number(req.params.num1);
    let num2 = Number(req.params.num2);
    res.send(`The sum of ${num1} and ${num2} is ${num1+num2}`);
});

app.get('/diff/:num1/:num2', (req, res) => {
    let num1 = Number(req.params.num1);
    let num2 = Number(req.params.num2);
    res.send(`The difference of ${num1} and ${num2} is ${Math.abs(num1-num2)}`);
});

app.get('/mul/:num1/:num2', (req, res) => {
    let num1 = Number(req.params.num1);
    let num2 = Number(req.params.num2);
    res.send(`The product of ${num1} and ${num2} is ${num1*num2}`);
});

app.get('/div/:num1/:num2', (req, res) => {
    let num1 = Number(req.params.num1);
    let num2 = Number(req.params.num2);
    res.send(`The division result of ${num1} by ${num2} is ${num1/num2}`);
});

app.get('/mod/:num1/:num2', (req, res) => {
    let num1 = Number(req.params.num1);
    let num2 = Number(req.params.num2);
    res.send(`The modulus result of ${num1} by ${num2} is ${num1%num2}`);
});


app.listen(3000, () => console.log('server started!!!'));