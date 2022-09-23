const express = require('express');
const bodyParser = require('body-parser');
const res = require('express/lib/response');
const app = express();
app.use(bodyParser.json());

const rescue = require('express-rescue');

const simpsonsUtils = require('./fs-utils');

// Crie um endpoint GET /simpsons
   // O endpoint deve retornar um array com todos os simpsons.

/* app.get('/simpsons', rescue(async(req, res) => {
    const simpsons = await simpsonsUtils.getSimpsons();
    res.status(200).json(simpsons);
}))
 */
app.get('/simpsons', async function(req, res) {
    const simpsons = await simpsonsUtils.getSimpsons();
    res.status(200).json(simpsons);
})

// Crie um endpoint GET /simpsons/:id
    // O endpoint deve retornar o personagem com o id informado na URL da requisição.
    // Caso não exista nenhum personagem com o id especificado, retorne o JSON { message: 'simpson not found' } com o status 404 - Not Found .

app.get('/simpsons/:id', async function(req, res) {
    const simpsons = await simpsonsUtils.getSimpsons();
    const {id} = req.params;

    const simpson = simpsons.find(el => el.id === id);

    if (!simpson) res.status(404).json({ message: 'simpson not found' })
    res.status(202).json(simpson);
})

// Crie um endpoint POST /simpsons .
    // Este endpoint deve cadastrar novos personagens.
    // O corpo da requisição deve receber o seguinte JSON: { id: <id-da-personagem>, name: '<nome-da-personagem>' } .
    // Caso já exista uma personagem com o id informado, devolva o JSON { message: 'id already exists' } com o status 409 - Conflict .
    // Caso a personagem ainda não exista, adicione-a ao arquivo simpsons.json e devolva um body vazio com o status 204 - No Content . Para encerrar a request sem enviar nenhum dado, você pode utilizar res.status(204).end(); .
    // 

app.post('/simpsons',
   async function(req, res){
    const { id, name } = req.body;
    const simpsons = await simpsonsUtils.getSimpsons();
    const simpson = simpsons.find(el => el.id === id);

    if(simpson) { return res.status(409).json({message:'id already exists'});}
    simpsons.push({id, name});
    await simpsonsUtils.setSimpsons(simpsons);
  
    res.status(204).end();
})

app.use(function (err, req, res, next) {
    res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
  });
  
  app.listen(3001, () => console.log('ouvindo na porta 30001!'));