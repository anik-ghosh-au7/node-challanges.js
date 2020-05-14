const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist/')));
app.set('views', 'src/view');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/home', (req, res) => {
    res.render('index', {list: ['hello', 'world'], name : 'anik'});
});

app.listen(5000, () => console.log('Server started!!!'));