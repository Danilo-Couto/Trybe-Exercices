// Crie uma rota GET /ping
    // Sua rota deve retornar o seguinte JSON: { message: 'pong' }

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/ping', function(req, res){
    res.status(200).json({message: 'pong'});    
})

// Crie uma rota POST /hello
    // Sua rota deve receber, no body da requisição, o seguinte JSON: { "name": "<nome do usuário>" }
    //Sua rota deve retornar o seguinte JSON: { "message": "Hello, <nome do usuário>!" //} .

app.post('/hello', function(req, res){
    const { name } = req.body;
    res.status(201).json({ message: `Hello, ${name}!`});
})

// Crie uma rota POST /greetings
    // Sua rota deve receber o seguinte JSON: { "name": "<nome do usuário>", "age": <idade do usuário> } .
    // Caso a pessoa usuária tenha idade superior a 17 anos, devolva o JSON { "message": "Hello, <nome do usuário>!" } com o status code 200 - OK .
    // Caso a pessoa usuária tenha 17 anos ou menos, devolva o JSON { "message": "Unauthorized" } com o status code 401 - Unauthorized .
    // 

app.post('/greetings', (req, res) => {
    const { name, age } = req.body;
    parseInt(age) <= 17
        ? res.status(401).json({ message: `Unauthorized` })
        : res.status(200).json({ message: `Hello, ${name}!` }); 
});
    
//Crie uma rota PUT /users/:name/:age .
    //Sua rota deve retornar o seguinte JSON: { "message": "Seu nome é <name> e você tem <age> anos de ida

app.put('/users/:name/:age', function (req, res) {
    const {name, age} = req.params;
    res.status(200).json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` })
})

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

// para rodar usando o run dev, deve-se renomear este arquivo para index.js