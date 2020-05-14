const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();

app.use(morgan('tiny'));
app.use(cookieParser('SECRET_KEY'));

app.get('/', (req, res) => {
    const cookieConfig = {
        secure: false,
        httpOnly: true,
        maxAge: 1000 * 60 * 60,
        signed: true
    };
    res.cookie('token', 'cookie_value', cookieConfig);
    res.send('cookie received!!!');
})

app.get('/getCookie', (req, res) => {
    const received_cookie = req.signedCookies;
    console.log(received_cookie);
    res.send(`Cookie Name : ${Object.keys(received_cookie)} & Cookie Value : ${Object.values(received_cookie)}`);
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));