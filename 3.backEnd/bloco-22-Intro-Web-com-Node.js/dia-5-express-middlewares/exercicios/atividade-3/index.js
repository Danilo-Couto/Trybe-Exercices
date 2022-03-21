const express = require('express');
const bodyParser = require('body-parser');

const postRouter = require('./postRouter');
const errors = require('./routerNotFound');
const PORT = 3000;

const app = express();
app.use(bodyParser.json());


app.get('/posts', userRouter);


app.use('*', (_req, _res, next) => next({ statusCode: 404, message: 'Opsss router not found' }));
app.use(errors.routerNotFound);

app.listen(PORT, () => {
  console.log('Aplicação ouvindo na porta 3000');
});

