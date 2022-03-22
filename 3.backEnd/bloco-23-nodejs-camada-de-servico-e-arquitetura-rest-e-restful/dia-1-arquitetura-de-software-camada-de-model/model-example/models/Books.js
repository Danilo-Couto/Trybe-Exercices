const connection = require('./connection');
const Author = require('./Author');

const getAll = async () => {
    const [books] = await connection.execute('SELECT * FROM model_example.books;');

    return books.map(({ id, title, author_id }) => ({
        id, 
        title, 
        authorId: author_id,
    }));
};

const getAuthorById = async (authorId) => {
    const query = 'SELECT * FROM model_example.books WHERE author_id = ?'
    const [ books ] = await connection.execute(query, [authorId]);

    return books.map(({id, title, author_id}) => ({
        id,
        title,
        authorId: author_id,
    }));
};

const isValid = async (title, authorId) => {
    if (!title || typeof title !== 'string' || title.length < 3) return false;
    if (!authorId || typeof authorId !== 'number' || !(await Author.findById(authorId))) return false;
  
    return true;
  };
  
  const create = async (title, authorId) => connection.execute(
  'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
  [title, authorId],
  );

module.exports = {
    getAll,
    getAuthorById,
    isValid,
    create,
}