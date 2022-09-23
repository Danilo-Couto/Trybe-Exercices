/*   
Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson  */

const fs = require('fs').promises;
const simpsonsFile = './simpsons.json';
/* 
fs.readFile(simpsonsFile, 'utf8')
    .then((content) => { 
        console.log(`sucesso: ${content}`);    
        const simpsons = JSON.parse(content);
        return simpsons.map(({ id, name }) => console.log(`${id} - ${name}`));
    })
    .catch((err)=>{
        console.error(`falha: ${err}`);
    });

/*      .then((strings) => {
        // console.log(strings);
        strings.forEach((string) => console.log(string));
    }); */ 

async function main() {
    try {
        const content = await fs.readFile(simpsonsFile, 'utf8');
        const simpsons = JSON.parse(content);
        // console.log(`sucesso: ${content}`);    
        return simpsons.map(({ id, name }) => `${id} - ${name}`);

    } catch(err) {
        // console.error(`falha: ${err}`);
        throw new Error(err);
    }
}

main()
    .then(c => console.log(c));

