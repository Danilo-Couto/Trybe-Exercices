// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest .

// escreva sum abaixo

sum = (...args) => {
    return args.reduce((total, elem) => {
        return total + elem
    });
}

console.log(sum(1,2,3))

