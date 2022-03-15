// Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

const fs = require('fs').promises;

const simpsonsFile = './simpsons.json';

async function filterSimpsons() {  
    const simpsons = await fs
        .readFile(simpsonsFile, 'utf-8')
        .then((content) => JSON.parse(content));

    const newSimpsonsArray = simpsons.filter(simpson => simpson.id !== '10' && simpson.id !== '6');

    await fs.writeFile(simpsonsFile, JSON.stringify(newSimpsonsArray))
    .then(() => {
        console.log('Arquivo escrito com sucesso!');
    })
    .catch((err) => {
        console.error(`Erro ao escrever o arquivo: ${err.message}`);
    });  
}

filterSimpsons();

/* 
Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.
Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .
Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json  */ 