
// Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".

const fs = require('fs').promises;

const simpsonsFile = './simpsons.json';

async function getSimpsonById(id) {
    const content = await fs.readFile(simpsonsFile, 'utf-8')
    const simpsons = JSON.parse(content);

    const chosenSimpson = simpsons.find((simpson) => Number(simpson.id) == id);
    
    if (!chosenSimpson) { throw new Error('id não encontrado');}

    return chosenSimpson;
}

getSimpsonById(3);
