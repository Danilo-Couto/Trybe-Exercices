const Book = require('../services/Books');

const getAll = async (_req, res) => {
  const books = await Book.getAll();
  res.status(200).json(books);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const book = await Book.findById(id);
  if (!book) return res.status(404).json({ message: 'Book not found' });
  res.status(200).json(book);
}

const createBook = async (req, res, next) => {
  const { title, author_id } = req.body;
  const newBook = await Book.createBook(title, author_id);
  return res.status(201).json(newBook);
};

module.exports = {
  getAll,
  findById,
  createBook,
}