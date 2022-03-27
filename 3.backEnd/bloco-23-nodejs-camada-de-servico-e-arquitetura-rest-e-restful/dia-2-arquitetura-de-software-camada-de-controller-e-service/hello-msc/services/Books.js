const Author = require('../models/Author');
const Book = require('../models/Book');

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

const createBook = async (title, author_id) => {
  const authorId = await Author.findById(author_id);

  if (!authorId) {
    return {
      error: {
        code: 'notFound',
        message: 'Autor não encontrado',
      },
    };
  }

  const existingBook = await Book.findByTitleAndId(title, author_id);
  if (existingBook) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'Este livro já existe com esse título e de mesmo autor',
      },
    };
  };
  return await Book.createBook(title, author_id);
};

module.exports = {
  getAll,
  findById,
  createBook,
}