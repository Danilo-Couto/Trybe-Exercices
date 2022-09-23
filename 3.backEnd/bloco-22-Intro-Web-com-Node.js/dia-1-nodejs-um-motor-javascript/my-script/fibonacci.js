const readline = require('readline-sync');

// A sequência de fibonacci começa com 0 e 1 e os números seguintes são sempre a soma dos dois números anteriores.

function calcFibo(n) {
    const fibSequence = [1];
    let curr = 1;
    let prev = 0;
  
    if (n === 1) {
      return fibSequence;
    }
    for (let i = 0 ; i < n ; i++ ) {
        curr += prev;
        prev = curr - prev;
        fibSequence.push(curr);
    }
  
    return fibSequence;
  }

  function calculo() {
    const n = readline.questionInt('Informe o valor de n para a Sequencia de Fibonacci: ');
    if (n <= 0) {
        console.log('Digite um número maior que 0!')
        return;
    }
  
    const resultado = calcFibo(n);
    
    console.log(`n: ${n}`);
    console.log(`Resultado: ${resultado}`);
  }
  
calculo();
