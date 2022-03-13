/* 
1. O número gerado deve ser um inteiro entre 0 e 10.
2. Caso a pessoa acerte o número, exiba na tela "Parabéns, número correto!".
3. Caso a pessoa erre o número, exiba na tela "Opa, não foi dessa vez. O número era [número sorteado]".
4. Ao final, pergunte se a pessoa deseja jogar novamente. Se sim, volte ao começo do script. 
*/

const readline = require('readline-sync');

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function goSorteio() {
    const numeroJogado = readline.question('Jogue um número inteiro de 0 a 10: ');
    const numeroSorteado = getRandomIntInclusive(0,10) 
    const resultado = numeroJogado === numeroSorteado ? 'Parabéns, número correto!': `Opa, não foi dessa vez. O número era ${numeroSorteado}.`;
    console.log(resultado);

    const playAgain = readline.question('Quer jogar novamente? Digite s para sim, e qualquer outra coisa para não ');
    if (playAgain !== 's') return console.log('OK, até a próxima!');
    goSorteio();
}

goSorteio();
