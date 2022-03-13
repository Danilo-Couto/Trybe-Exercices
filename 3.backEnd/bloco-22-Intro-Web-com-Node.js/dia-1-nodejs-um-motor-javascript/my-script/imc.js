/* 
const PESO_80KG = 80; 
const ALTURA_1M_78CM = 178;

const calculaImc = () => {
  const peso = PESO_80KG;
  const altura = ALTURA_1M_78CM;

  const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);

  console.log(`IMC: ${imc}`);
} */

// -------- // 

/* const readline = require('readline-sync');

const calculaImc = () => {
    const name = readline.question('Qual seu nome?');
    const peso = readline.questionFloat('Qual seu peso?');
    const altura = readline.questionFloat('Qual sua altura?');

    const imc = (peso / (altura ** 2)).toFixed(2);
    console.log(`${name}, seu imc é ${imc}`);
  }

  calculaImc(); */

// ----

const readline = require('readline-sync');

function situacaoImc(imc){
    if (imc < 18.5) {
        return 'Abaixo do peso (magreza)';
      }
      if (imc >= 18.5 && imc < 25) {
        return 'Peso normal';
      }
      if (imc >= 25 && imc < 30) {
        return 'Acima do peso (sobrepeso)';
      }
      if (imc >= 30 && imc < 35) {
        return 'Obesidade grau I';
      }
      if (imc >= 35 && imc < 40) {
        return 'Obesidade grau II';
      } 
      return 'Obesidade graus III e IV';
}

const calculaImc = () => {
    const name = readline.question('Qual seu nome?');
    const peso = readline.questionFloat('Qual seu peso?');
    const altura = readline.questionFloat('Qual sua altura?');

    const imc = (peso / (altura ** 2)).toFixed(2);

    console.log(`${name} seu IMC é ${imc}, ou seja, sua situação é ${situacaoImc(imc)}`);
  }

calculaImc();