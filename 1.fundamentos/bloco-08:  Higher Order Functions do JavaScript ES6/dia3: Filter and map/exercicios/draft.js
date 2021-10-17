/* const books = [
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

function authorWith3DotsOnName() {
const bookname = books.find((element) => (element.author.name.split(' ')
.filter((element) => element.endsWith('.')).length === 3
))
return bookname.name;
}

console.log(authorWith3DotsOnName())
 */

const autor =  'H. P. Lovecraft';
console.log ( autor.split(' ') ); // [ 'H.', 'P.', 'Lovecraft' ]
console.log ( autor.split('') ); 
/* [
  'H', '.', ' ', 'P',
  '.', ' ', 'L', 'o',
  'v', 'e', 'c', 'r',
  'a', 'f', 't'
]
 */

//console.log ( autor.split('').length ); //15
console.log ( autor.split('').filter((a)=> a === '.')) // [ '.', '.' ]
// console.log ( autor.split('').filter((a)=> a === '.').length ); //2

