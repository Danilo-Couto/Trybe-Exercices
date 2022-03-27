const connection = require('./connection');

// Converte o nome dos campos de snake_case para camelCase
const serialize = (authorData) => authorData.map((item) => ({
  id: item.id,
  firstName: item.first_name,
  middleName: item.middle_name,
  lastName: item.last_name}));

// Busca todos os autores do banco.
const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors;'
  );
  return serialize(authors);
};

const findById = async (id) => {
  const query =
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors WHERE id = ?';
  const [authorData] = await connection.execute(query, [id]);
  if (authorData.length === 0) return null;
  return serialize(authorData)[0];
};

const findByName = async (firstName, middleName, lastName) => {
  let query = 'SELECT id, first_name, middle_name, last_name ' +
              'FROM model_example.authors ';
    if (middleName) {
      query += 'WHERE first_name = ? AND middle_name = ? AND last_name = ?';
    } else {
      query += 'WHERE first_name = ? AND last_name = ?';
    }

  const params = middleName ? [firstName, middleName, lastName] : [firstName, lastName];

  const [authorData] = await connection.execute(query, params);
  if (authorData.length === 0) return null;

  return serialize(authorData);
};

const createAuthor = async (firstName, middleName, lastName) => {
  const query = 'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?, ?, ?)';
  const [author] = await connection.execute(query,[firstName, middleName, lastName]
  );
  
  return { id: author.insertId, firstName, middleName, lastName };
}

module.exports = {
  getAll,
  findById,
  createAuthor,
  findByName
};