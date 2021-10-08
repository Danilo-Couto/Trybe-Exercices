// 1 - Dada uma matriz, transforme em um array.

const arrays = [
  ['1', '2', '3'], //a
  [true], //b 
  [4, 5, 6], // c
];
 
function flatten() {
  return arrays.reduce((acc, curr) => acc.concat(curr),[])
} 
console.log(flatten());

//[ [ '1', '2', '3' ], [ true ], [ 4, 5, 6 ] ]

// GABARITO:

/* function flatten() {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
}
console.log(flatten());
/* [
  '1',  '2', '3',
  true, 4,   5,
  6
] */ 