const fs = require('fs').promises;

const read = async () => fs.readFile('./user.json').then((file) => JSON.parse(file));
const write = async (data) => fs.writeFile('./user.json', JSON.stringify(data));

module.exports = { read, write };
