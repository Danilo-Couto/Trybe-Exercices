// 1 - Dada uma matriz, transforme em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  //const concat = (result, elem) => result.concat(elem);
  //return arrays.reduce(concat); 
  return arrays.reduce((acc, curr) => acc.concat(curr), []);

}
console.log (flatten());


