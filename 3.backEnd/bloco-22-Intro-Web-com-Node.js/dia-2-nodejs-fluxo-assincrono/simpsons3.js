// Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
/* 
Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.
Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .
Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json  */

const fs = require('fs').promises;

const simpsonsFile = './simpsons.json';

async function filterSimpsons() {  
    try {
        const content = await fs.readFile(simpsonsFile, 'utf-8');
        const simpsons = JSON.parse(content);
        const newSimpsonsArray = simpsons.filter(simpson => simpson.id !== '10' && simpson.id !== '6');   
        
        // console.log('Arquivo escrito com sucesso!');
        return await fs.writeFile(simpsonsFile, JSON.stringify(newSimpsonsArray));
    } catch(err) {
        console.error(`falha: ${err}`);
    }
}

filterSimpsons();
