const fs = require('fs/promises');

const simpsonsFile = './simpsons.json';

function getSimpsons() {
    return fs
        .readFile(simpsonsFile, 'utf-8')
        .then((content) => JSON.parse(content));
}

function setSimpsons (newSimpsons) {
    return fs.writeFile('./simpsons.json', JSON.stringify(newSimpsons));
}

module.exports = { getSimpsons, setSimpsons };