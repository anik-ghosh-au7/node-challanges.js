const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

//Import Routes
const postsRoute = require('./routes/posts');

// Middlewares
app.use(bodyParser.json());
app.use('/posts', postsRoute);


// Home Route

app.get('/', (req, res) => {
        res.send('we are on home');
    });

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, 
{ useNewUrlParser: true }, 
()=>{
    console.log('COnnected to DB');
});

// listening to the server
app.listen(4000);