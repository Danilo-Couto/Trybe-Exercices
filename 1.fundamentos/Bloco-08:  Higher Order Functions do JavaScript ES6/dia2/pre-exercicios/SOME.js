/* const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false 
*/

// PARA FIXAR:
// 1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false , use some ;

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];
  //console.log(names.some((nome) => nome === 'Ana'))

const hasName = (arr, name) => {
  return arr.some((nome) => nome === name)
}

console.log(hasName(names, 'Ana'));