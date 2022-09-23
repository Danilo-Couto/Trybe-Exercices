// Importamos o driver do banco
const mysql = require('mysql2/promise');

// Criamos uma "pool" de conexões
const connection = mysql.createPool({
    host: 'localhost',
    user: 'danilo-couto',
    password: 'danilo-couto',
    database: 'users_crud',
});

module.exports = connection;