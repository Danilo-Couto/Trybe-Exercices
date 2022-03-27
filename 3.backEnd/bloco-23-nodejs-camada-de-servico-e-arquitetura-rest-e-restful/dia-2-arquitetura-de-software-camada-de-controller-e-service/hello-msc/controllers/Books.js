const Joi = require('joi');
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

  const { error } = Joi.object({
    title: Joi.string().not().empty().required(),
    author_id: Joi.number().not().empty().required(),
  }).validate({title, author_id});

  if (error) {
    return next(error);
  }

  const newBook = await Book.createBook(title, author_id);

  if (newBook.error) return next(newBook.error);

  return res.status(201).json(newBook);
};

module.exports = {
  getAll,
  findById,
  createBook,
}