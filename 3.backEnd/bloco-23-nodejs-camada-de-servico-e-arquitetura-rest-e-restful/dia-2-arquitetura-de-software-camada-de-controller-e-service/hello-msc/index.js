const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const rescue = require('express-rescue');
const errorMiddleware = require('./schemas/error');

const Author = require('./controllers/Author');
const Book = require('./controllers/Books');

app.use(bodyParser.json());

app.get('/authors', rescue(Author.getAll));
app.get('/authors/:id', rescue(Author.findById));
app.post('/authors', rescue(Author.createAuthor));

app.get('/books', Book.getAll);
app.get('/books/:id', Book.findById);
app.post('/books', Book.createBook);

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});