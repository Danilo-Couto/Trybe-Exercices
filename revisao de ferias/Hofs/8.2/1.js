const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
 //  1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
  function authorBornIn1947() {
    return books.find(({author: {birthYear}}) => birthYear === 1947);
  }
// 2 - Retorne o nome do livro de menor nome.
function smallerName() {
  let nameBook = books[0].name;
  books.forEach(book => {
    (book.name.length < nameBook.length) ? nameBook = book.name : null
  })
  return nameBook;
}

// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.
function getNamedBook() {
  return books.find(book => book.name.length === 26)
}

// 4 - Ordene os livros por data de lançamento em ordem decrescente.
function booksOrderedByReleaseYearDesc() {
  return books.sort((bookA, bookB) => bookB.releaseYear - bookA.releaseYear);
}
console.log(booksOrderedByReleaseYearDesc())

// 5 - Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.
function everyoneWasBornOnSecXX() {
  return books.every(book=> {
    book.author.birthYear > 1900 || book.author.birthYear <= 2000;

  })
}
// 6 - Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.
const expectedResult = true;

function someBookWasReleaseOnThe80s() {
  return books.some((book)=> book.releaseYear >= 1980 && book.releaseYear <= 1989);
  }

//7 - Faça uma função que retorne true , caso algum author tenha nascido no mesmo ano, e false , caso contrário.

function authorUnique() {
  return books.some((book) =>  books.some((bookSome) =>
      (bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name)));
}

  