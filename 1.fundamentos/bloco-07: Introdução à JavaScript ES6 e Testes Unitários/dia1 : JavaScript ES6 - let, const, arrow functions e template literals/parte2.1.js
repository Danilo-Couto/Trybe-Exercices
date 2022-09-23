/* Crie uma função que receba um número e retorne seu fatorial.
Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.*/

/* 
factorial = x => {
    let fatorial = 1;
    for (let i=0 ; i<x ; i+=1){
        fatorial *= x-i;    
    }
    return fatorial;
}   
console.log(factorial(10));
*/

/* Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .  */

const factorial = x => x > 1 ? x * factorial(x - 1) : 1;
console.log(factorial(4));
