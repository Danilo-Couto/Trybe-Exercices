
// Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".

const fs = require('fs').promises;

const simpsonsFile = './simpsons.json';

async function getSimpsonById(id) {
    const simpsons = await fs
        .readFile(simpsonsFile, 'utf-8')
        .then((content) => JSON.parse(content));

    console.log(simpsons);
    const chosenSimpson = simpsons.find((simpson) => simpson.id === id);
    
    if (!chosenSimpson) { throw new Error('id não encontrado');}

    console.log(chosenSimpson);
    return chosenSimpson;
}

getSimpsonById(3);
