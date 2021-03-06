
const connection = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT * FROM model_example.books;'
  );
  return books;
};

const findById = async (id) => {
  const query =
    'SELECT * FROM model_example.books WHERE id = ?';
  const [bookData] = await connection.execute(query, [id]);
  if (bookData.length === 0) return null;
  return bookData;
};

const findByTitleAndId = async (title, author_id) => {
  let query = 'SELECT id, title, author_id FROM model_example.books WHERE title = ? AND author_id = ?';

  const [existingBook] = await connection.execute(query, [title, author_id]);
  if (existingBook.length === 0) return null;

  return existingBook;
};

const createBook = async (title, author_id) => {
  const query = 'INSERT INTO model_example.books (title, author_id) VALUES (?,?)'
  const [{insertId}] = await connection.execute(query, [title, author_id]);

  return {
    id: insertId,
    title, 
    author_id
  }
};

module.exports = {
  getAll,
  findById,
  createBook,
  findByTitleAndId
};