const express = require('express');
const bodyParser = require('body-parser');
const errorMiddleware = require('./3.middlewares/errors');

const app = express();
app.use(bodyParser.json());

const CepRouter  = require('./routers/Cep');

app.use(express.json());

app.use('/cep', CepRouter);

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
});