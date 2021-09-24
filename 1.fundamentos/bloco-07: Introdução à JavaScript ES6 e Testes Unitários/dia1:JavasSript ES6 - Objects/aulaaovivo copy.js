// Desenvolva uma função que receba um array de números e retorne verdadeiro se TODOS os valores forem maior que o número recebido por parâmetro, falso caso contrário

// Ex: 
// array: [20, 30, 19, 1, 50]
// number: 20
// resultado esperado: false 

// Ex: 
// array: [20, 30, 19, 21]
// number: 18
// resultado esperado: true

/* function allGreaterThan (number, array)  {
    let contador = 0;
    for (let i = 0; i < array.length ; i+=1){
        if (array[i]>number) {
            contador +=1;
        }
    }
        (contador === array.length) ? console.log(true) : console.log (false);
    }

allGreaterThan(18, [20, 30, 19, 21]);
 */

function allGreaterThan (number, array)  {
  let result = true;
  for (let i = 0; i < array.length ; i+=1){
      if (array[i]<number) {
          result = false;
      } break
  }
  console.log (result);
}

allGreaterThan(28, [20, 30, 19, 21]);
