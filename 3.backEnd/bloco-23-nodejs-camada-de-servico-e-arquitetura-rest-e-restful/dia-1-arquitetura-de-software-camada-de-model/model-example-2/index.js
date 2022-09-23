// index.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const Authors = require('./models/Authors');
const Books = require('./models/Books');

app.get('/authors', async (_req, res) => {
    const authors = await Authors.getAll();

    res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
    const { id } = req.params;
    const author = await Authors.findById(id);

    if (!author) return res.status(404).json({ message: 'Not found' });

    res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
    const { first_name, middle_name, last_name } = req.body;

    if (!Authors.isValid(first_name, middle_name, last_name)) {
        return res.status(400).json({ message: 'Dados inválidos' });
    }

    await Authors.create(first_name, middle_name, last_name);

    res.status(201).json({ message: 'Autor criado com sucesso! '});
});

app.get('/books', async (req, res) => {
  const books = await Books.getAll();

  res.status(200).json(books);
});

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
