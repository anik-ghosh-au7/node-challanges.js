const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({extended: false}));

app.set('views', 'src/views');
app.set('view engine', 'hbs');

const userDB = [
    {
        username: 'anik',
        password: '12345'
    }
];

app.get('/', (req, res) => {
    let data = {};
    if(req.query.loginFailed){
        data.loginFailed = true;
    };
    res.render('index', data);
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log(username, password);
    if (userDB.some(elem => elem.username === username) && userDB.some(elem => elem.password === password)){
        res.status(200).send('user successfully logged in!!!');
    } else {
        // res.status(400).send('invalid credentials, please check again');
        res.redirect('/?loginFailed=true');
    };
})

app.listen(5000, () => console.log('server started!!!'));