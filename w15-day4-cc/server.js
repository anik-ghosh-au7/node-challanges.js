const express = require('express');
const morgan = require('morgan');
const apiRouting = require('./apiRouting');

const app = express();



app.use(morgan('tiny'));
app.use(express.json());
app.use('/', apiRouting);



port = process.env.port || 5000;
app.listen(port, () => console.log(`Server started at port ${port}`));