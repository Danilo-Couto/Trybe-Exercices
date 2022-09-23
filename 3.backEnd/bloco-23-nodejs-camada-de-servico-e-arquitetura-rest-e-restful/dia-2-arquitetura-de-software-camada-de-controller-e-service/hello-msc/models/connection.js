// hello-msc/models/connection.js

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'danilo-couto',
  password: 'danilo-couto',
  database: 'model_example'
});

module.exports = connection;