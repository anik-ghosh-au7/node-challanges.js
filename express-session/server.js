const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const {v4 : uuid} = require('uuid');

const app = express();

app.use(morgan('tiny'));
app.use(session({
    genid: (req) => uuid(),
    secret: 'SECRET_KEY',
    resave: false,
    name: 'curr_session',
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60,
        httpOnly: true,
        secure: false,
        signed: true
    }
}));

app.get('/', (req, res) => {
    console.log(req.sessionID);
    // res.cookie('token', 'cookie_value');
    console.log(req.session.cookie);
    res.cookie(req.session.cookie);
    res.send('cookie received!!!');
})

// app.get('/getCookie', (req, res) => {
//     // const received_cookie = req.signedCookies;
//     const received_cookie = req.cookies;
//     console.log(received_cookie);
//     res.send(`Cookie Name : ${Object.keys(received_cookie)} & Cookie Value : ${Object.values(received_cookie)}`);
// })

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));