const express = require('express');
const bodyParser = require('body-parser');

const user = require('./routes/user');
const login = require('./routes/login');
const error = require('./middlewares/error');

const app = express();
app.use(bodyParser.json());

app.use('/user', user);
app.use('/login', login);

app.use(error);

module.exports = app;
