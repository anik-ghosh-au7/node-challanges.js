var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var booksRouter = require('./routes/books');

mongoose.connect('mongodb://localhost/attainu', { useUnifiedTopology: true , useNewUrlParser: true })
    .then(() => console.log('connected'))
    .catch(err => console.log(err))

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/books', booksRouter);

module.exports = app;
