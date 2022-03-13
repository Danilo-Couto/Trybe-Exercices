const readline = require('readline-sync');

// A sequência de fibonacci começa com 0 e 1 e os números seguintes são sempre a soma dos dois números anteriores.

/* function calcFibo(n){   
    const array = [0,1];

    for (let j = 1; j < n ; j++) {
        let soma = 0;

        for (let i = 0; i < array.length; i++) {
            soma += array[i];
        }

        array.push(soma)
    }
    return array.splice(1);
} */


/* function calcFibo(n){   
    const array = [0,1];
    for (let j = 1; j < n ; j++) {
        let soma = 0;
        array.forEach(el => {
            soma+=el
        });
        array.push(soma)
    }
    return array.splice(1);
}
 */
function calcFibo(n){   
    const array = [0,1];
    for (let j = 1; j < n ; j+=1) {
        let soma = array.reduce((x,y) => x + y, 0);
        array.push(soma)
    }
    return array.splice(1);
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
