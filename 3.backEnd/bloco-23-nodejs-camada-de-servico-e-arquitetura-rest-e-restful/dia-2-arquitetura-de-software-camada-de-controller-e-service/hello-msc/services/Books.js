const Book = require('../models/Book');
const Author = require('../models/Author');

const getAll = async () => Book.getAll();

const findById = async (id) => {
  const book = await Book.findById(id);

  if (!book) {
    return {
      error: {
        code: 'notFound',
        message: 'Livro não encontrado',
      },
    };
  }
  return book;
};

const createBook = async (title, bookId) => {
  const author = await Author.findById(bookId);

  if (!author) {
    return {
      error: {
        code: 'notFound',
        message: 'Autor não encontrado',
      },
    };
  }

  return Book.createBook(title, bookId);
};

module.exports = {
  getAll,
  findById,
  createBook,
}