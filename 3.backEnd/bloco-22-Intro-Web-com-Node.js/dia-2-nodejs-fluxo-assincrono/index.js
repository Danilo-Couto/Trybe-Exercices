// Crie uma função que recebe três parâmetros retorna uma Promise.
// Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números" .
// Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c ).
// Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
// Caso o resultado seja maior que 50, resolva a Promise com o valor obtido. */

function doMath(a, b, c) {
    const promise = new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number')
            reject(new Error('Informe apenas números'));
      
        const sum = ((a + b) * c );
        if (sum<50) 
          reject(new Error('Valor muito baixo'))
    
        resolve(sum);
    }); 

    return promise;
}

/* doMath(10, 10, 10)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))

doMath(1, 1, 'a')
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))

doMath(1, 1, 1)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error)) */


// Escreva um código para consumir a função construída no exercício anterior.
  // Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. Para gerar um número aleatório, utilize o seguinte trecho de código: Math.floor(Math.random() * 100 + 1) .
  // Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
  // Utilize then e catch para manipular a Promise retornada pela função:
  // Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
  // Caso a Promise seja resolvida, escreva na tela o resultado do cálculo.

function getRandomNumber() {
  return Math.floor(Math.random() * 101);
}

function callDoMath() {
  const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);

  doMath(...randomNumbers)
    .then(result => console.log(`sucesso: ${result}`))
    .catch(err => console.error(`falha: ${err.message}`))
}

callDoMath();


// Reescreva o código do exercício anterior para que utilize async/await.

async function callDoMath() {
  const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);
  
  try {
    const result = await doMath(...randomNumbers);
    console.log(`sucesso: ${result}`);    
  } catch(err) {
    console.error(`falha: ${err}`)
  }
}

callDoMath();

