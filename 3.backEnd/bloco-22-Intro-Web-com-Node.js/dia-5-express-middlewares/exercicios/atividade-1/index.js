const express = require('express');
const bodyParser = require('body-parser');

const userRouter = require('./userRouter');
const PORT = 3000;

const app = express();
app.use(bodyParser.json());

const users = [
    {
        username:'nosss',
        email: 'nos@gmail.com',
        password: 12345
        }
];

app.get('./user', userRouter);

app.all('*', function (req, res) {
    return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(PORT, () => {
  console.log('Aplicação ouvindo na porta 3000');
});

