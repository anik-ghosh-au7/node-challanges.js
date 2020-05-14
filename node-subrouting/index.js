const express = require('express');
const morgan = require('morgan');
const someRouting = require('./someRouting');

const app = express();

const userRouting = express.Router();
const categoryRouting = express.Router();

app.use(morgan('tiny'));
app.use('/profile', userRouting);
app.use('/category', categoryRouting);
app.use('/some', someRouting);

app.get('/', (req, res) => {
    res.send({name: 'Attainu, root level routing'});
});

userRouting.get('/user', (req, res) => {
    res.send({data: 'user'});
});

userRouting.post('/userBankAccount', (req, res) => {
    res.send({data: 'user'});
});

userRouting.put('/user/:id', (req, res) => {
    res.send({data: 'user'});
});

userRouting.delete('/user/:id', (req, res) => {
    res.send({msg: 'user has been successfully deleted!!!'});
});

categoryRouting.get('/', (req, res) => {
    res.send('sending all categories');
});

categoryRouting.get('/:name', (req, res) => {
    res.send('sending all category of shoe');
});

categoryRouting.post('/addCategory', (req, res) => {
    res.send({msg: 'shoe category added'});
});

categoryRouting.put('/:id', (req, res) => {
    res.send({data: 'shoe_category'});
});

categoryRouting.delete('/:id', (req, res) => {
    res.send({msg: 'shoe has been successfully deleted!!!'});
});

app.listen(5000, () => console.log('server started'));