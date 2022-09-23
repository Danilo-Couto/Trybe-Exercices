/* 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
Valor esperado no retorno da função: 6 . */

function lowestIndex () {
    let arraySorted = arrayDeTeste.sort(function (a, b) {   return a - b;  });
    return arraySorted.length-1
}

let arrayDeTeste = [2, 4, 6, 7, 10, 0, -3];
let lowerNumber = lowestIndex(arrayDeTeste);

console.log(arrayDeTeste)
console.log("indiceMenorNumero:", lowerNumber);
console.log("----------");  