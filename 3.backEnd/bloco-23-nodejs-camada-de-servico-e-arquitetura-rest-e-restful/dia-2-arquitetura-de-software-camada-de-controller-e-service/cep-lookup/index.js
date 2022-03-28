const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const errorMiddleware = require('./3.middlewares/errors');
const app = express();

app.use(bodyParser.json());

const Cep = require('./1.controllers/Cep');9

// app.get('/ping', rescue(Cep.getAll));
app.get('/cep', rescue(Cep.getAll));
app.get('/cep/:cep', rescue(Cep.findAddressByCep));
app.post('/cep', rescue(Cep.createAddress));

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
});