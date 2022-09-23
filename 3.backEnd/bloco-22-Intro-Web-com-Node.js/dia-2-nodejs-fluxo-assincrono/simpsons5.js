// Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .

const fs = require('fs').promises;

const simpsonsFamily = './simpsonsFamily.json';

async function filterSimpsons() {  
    const simpsonsFamily = await fs
        .readFile(simpsonsFamily, 'utf-8')
        .then((content) => JSON.parse(content));

    simpsonsFamily.push({ "id": "8","name": "Nelson Muntz" });

    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily))
    .then(() => {
        console.log('Arquivo escrito com sucesso!');
    })
    .catch((err) => {
        console.error(`Erro ao escrever o arquivo: ${err.message}`);
    });  
}

filterSimpsons();