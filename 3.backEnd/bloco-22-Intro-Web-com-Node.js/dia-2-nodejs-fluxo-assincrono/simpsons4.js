// Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.

const fs = require('fs').promises;

const simpsonsFile = './simpsons.json';

async function filterSimpsons() {  
    const simpsons = await fs
        .readFile(simpsonsFile, 'utf-8')
        .then((content) => JSON.parse(content));

    const simpsonsFamily = simpsons.filter(simpson => [1, 2, 3, 4].includes(simpson.id));

    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily))
    .then(() => {
        console.log('Arquivo escrito com sucesso!');
    })
    .catch((err) => {
        console.error(`Erro ao escrever o arquivo: ${err.message}`);
    });  
}

filterSimpsons();

/* 
Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .
Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json  */ 