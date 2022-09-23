// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest .

// escreva sum abaixo
const sum = (...args) => args.reduce((acc, curr)=> acc+curr);

console.log(sum(1,2));

