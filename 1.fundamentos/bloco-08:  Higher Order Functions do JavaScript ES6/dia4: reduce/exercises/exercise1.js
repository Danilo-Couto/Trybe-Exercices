// 1 - Dada uma matriz, transforme em um array.

const arrays = [
  ['1', '2', '3'], //a
  [true], //b 
  [4, 5, 6], // c
];

console.log(arrays.length-1);

 
/* function flatten() {
  return arrays.reduce((acc, curr) => acc.concat(curr),[])
} 
console.log(flatten());
 */
//[ [ '1', '2', '3' ], [ true ], [ 4, 5, 6 ] ]



/*   function flatten() {
    return arrays.reduce((a,c)=>{
      c.forEach((v)=>a.push(v));  // aqui é ~~criada~~ a array
      return a;                   // aqui o acumulador é atualizado
    },[]);                        // note que acumulador é iniciado com uma array vazia
  };
  
  console.log(flatten()); // [ '1', '2', '3', true, 4, 5, 6 ]


return books.reduce((a,c) => {
    c.forEach((v)=> a.push(v.authorname));
    return a;
},[])

 */

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