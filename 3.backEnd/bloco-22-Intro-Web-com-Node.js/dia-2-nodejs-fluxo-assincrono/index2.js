/*   
Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson  */

const fs = require('fs').promises;
const simpsonsFile = './simpsons.json';

console.log(fs);
fs.readFile(simpsonsFile, 'utf8')
    .then((content) => { 
        return JSON.parse(content)
    })
    .then((simpsons) => {
        // console.log(simpsons);
        return simpsons.map(({ id, name }) => console.log(`${id} - ${name}`));
    })
/*     .then((strings) => {
        // console.log(strings);
        strings.forEach((string) => console.log(string));
    }); */
