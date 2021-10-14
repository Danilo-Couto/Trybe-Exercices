/* //SEM MAP 

const persons = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

const fullNames = [];

for (let index = 0; index < persons.length; index += 1) {
  fullNames.push(`${persons[index].firstName} ${persons[index].lastName}`);
}

console.log(fullNames); 

// COM MAP

const fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`);
 
console.log(fullNames); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]


// -- Suponha que é preciso transformar todos os números em negativos e passa-lós para um array novo.
const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = numbers.map((number) => ((number > 0) ? number * (-1) : number));

console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
 */
//Outras formas de usar o .map é unir dois arrays para criar um novo. Considere que você possui duas listas: o preço do primeiro a ( Arroz ) é o primeiro elemento da lista prices ( 2.99 ), e assim por diante:

/* const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (a, b) => a.map((product, index) => (
  { [product]: b[index] }
));

const a = updateProducts(products, prices);
console.log(a); */

// ---
const numeros = [1, 2, 3, 4, 5, 6];
console.log(numeros.map((numero) => numero * 2)); // Retorno: [2, 4, 6, 8, 10, 12]

const paresMenoresQueCinco = [];
numeros.forEach((a) => {
  if (a < 5 && a % 2 === 0) {
    paresMenoresQueCinco.push(a);
  }
});
console.log(paresMenoresQueCinco); // Retorno: [2, 4]
