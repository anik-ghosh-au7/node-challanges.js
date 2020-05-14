const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');


const app = express();

app.use(morgan('tiny'));
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    console.log(req.body);
    res.send('Hey i am routing');
});

app.get('/add/:number1/:number2', (req, res)=>{
    console.log(req.params);
    let result = 0;
    let number1 = req.params.number1;
    let number2 = req.params.number2;
    result = parseInt(number1) + parseInt(number2);
    res.send(`The sum of ${number1} and ${number2} is ` + result);
})

app.listen(3000, ()=>{
    console.log('server is running');
});

