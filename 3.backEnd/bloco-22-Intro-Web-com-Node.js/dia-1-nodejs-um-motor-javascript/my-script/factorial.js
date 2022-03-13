const readline = require('readline-sync');

/* function fatoracao(x) {
    if (x === 0 || x === 1)
      return;
    for (let i = x - 1; i >= 1; i--) {
      x *= i;
    }
    return x;
  } */

function fatoracao(number) {
  let result = 1;
  for (let i = 2; i <= number; i += 1) {
    result *= i;
  } 
  return result;
}

// do gabarito é mais elegante:
/* function realizaFatoracao(x) {
    return [0, 1].includes(x)
      ? 1
      : x * realizaFatoracao(x - 1);  */

      

function calculo() {
  const x = readline.questionInt('Informe o valor de x: ');
  if (x <= 0) {
    console.log('Digite um número maior que 0!')
    return;
  }

  const resultado = fatoracao(x);
  
  console.log(`x: ${x}`);
  console.log(`Resultado: ${resultado}`);
}

calculo();