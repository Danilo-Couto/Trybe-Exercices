const express = require('express');
const router = express.Router();

const { Book } = require('../models');

router.get('/', async (req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200);
    res.json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);

    if (!book) return res.status(404).json({ message: 'Livro não encontrado' });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, author, pageQuantity = 0} = req.body;
    const newBook = await Book.create({ title,author, pageQuantity });

    return res.status(201).json(newBook);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const { id } = req.params;

    const [updatedBook] = await Book.update(
      { title, author, pageQuantity },
      { where: { id } },
    );

    console.log(updatedBook); // confira 

    if(!updatedBook) return res.status(404).json({ message: 'Livro não encontrado' });

    return res.status(200).json({ message: 'Livro atualizado com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBook = await Book.destroy(
      { where: { id } },
    );

    console.log(deleteBook) // confira

    return res.status(200).json({ message: 'Livro excluído com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

module.exports = router;


/* const { Book } = require('../models');

const getAll = async (req, res) => {
  try {
    const books = await Book.findAll(); // Bônus: Crie uma ordenação no endpoint GET /books para ordenar por ordem alfabética e por data de criação;
    
    res.status(200);
    res.json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const books = await Book.findByPk(id);

    res.status(200);
    res.json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const createNew = async (req, res) => {
  try {
    const { title, author, pageQuantity = 0 } = req.body;

    const book = await Book.create({
      title,
      author,
      pageQuantity,
    });

    res.status(201);
    res.json(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const updateById = async (req, res) => {
  try {
    const { title, author, pageQuantity = 0 } = req.body;
    const { id } =  req.params;

    const result = await Book.update(
      {
        title,
        author,
        pageQuantity,
      },
      { where: { id } },
    );

    res.status(200);
    res.json(result);
  } catch (err) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    const bookToDelete = await Book.findByPk(id);
    await bookToDelete.destroy();

    res.status(200);
    res.json(bookToDelete);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  deleteById,
  getAll,
  getById,
  updateById,
  createNew,
};
 */