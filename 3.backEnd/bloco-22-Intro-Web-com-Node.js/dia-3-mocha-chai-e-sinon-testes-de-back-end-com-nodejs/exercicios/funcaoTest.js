// Estruture os testes utilizando mocha e chai para um função que irá dizer se um número é "positivo", "negativo" ou "neutro":
    // Essa função irá receber um número como parâmetro e retornar uma string como resposta;
    // Quando o número passado for maior que 0 deverá retornar "positivo", quando for menor que 0 deverá retornar "negativo" e quando igual a 0 deverá retornar "neutro";

function test(x){
    console.log(typeof(x));

    if (typeof x !== 'number') return 'o valor deve ser um número';
    
    if (x>0) return 'positivo';
    if (x<0) return 'negativo';
    return 'neutro'
}

console.log(test(10));

module.exports = test;
