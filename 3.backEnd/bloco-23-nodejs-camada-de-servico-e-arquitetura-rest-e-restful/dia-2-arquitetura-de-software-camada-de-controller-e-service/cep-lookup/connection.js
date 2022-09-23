const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'danilo-couto',
    password: 'danilo-couto',
    database: 'cep_lookup'
});

module.exports = connection;