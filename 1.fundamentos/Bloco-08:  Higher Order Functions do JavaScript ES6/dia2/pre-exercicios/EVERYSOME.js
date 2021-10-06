/* const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false 


/* const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};
//  console.log(Object.values(grades).every((grade) => grade === 'Aprovado'))

const verifyGrades = (studentGrades) => (
  Object.values(grades).every((grade) => grade === 'Aprovado')
);

console.log(verifyGrades(grades));
 */

// PARA FIXAR:
// 1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false , use some ;

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];
  //console.log(names.some((nome) => nome === 'Ana'))

const hasName = (arr, name) => {
  return arr.some((nome) => nome === name)
}

console.log(hasName(names, 'Ana'))


//2 - Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false , use every ;

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  return arr.every((nome) => nome.age === minimumAge)  
}

console.log(verifyAges(people, 18));

