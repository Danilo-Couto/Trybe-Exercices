/* 
2.
Faça uma função que retorne o array oddsAndEvens em ordem crescente.
Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".*/

let oddsAndEvens =  [13, 3, 4, 10, 7, 2];

crescentOrder = () => { 
  for(let j=0;j<oddsAndEvens.length;j+=1) { //loop para verificar se novo oddsAndEvensay criado por loop interno precisa de reordenacao
    for(let i=0; i < oddsAndEvens.length; i+=1) { // loop interno para reordenar elementos
        if(oddsAndEvens[i]>oddsAndEvens[i+1]) { //se maior, trocar de posição
            let temp = oddsAndEvens[i]; // temp recebe numero maior 
            oddsAndEvens[i] = oddsAndEvens[i+1]; //numero maior recebe o numero menor
            oddsAndEvens[i+1] = temp;  // numero menor recebe numero maior
        } 
    } 
  }
  return (oddsAndEvens);
}
console.log(`Os números ${crescentOrder()} se encontram ordenados de forma crescente!.`);

/* 
Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números. 
 */

/* 
// FUNCAO COM SORT
const oddsAndEvens =  [13, 3, 4, 10, 7, 2];
function crescentOrder () {
let lowestToHighest = oddsAndEvens.sort((a, b) => a - b);
console.log(lowestToHighest)
}
crescentOrder (oddsAndEvens);
//sort subscreve array original

// FUNCAO OTIMIZADA
crescentOrder = oddsAndEvens => {
  oddsAndEvens.sort((a, b) => a - b);
  console.log(oddsAndEvens)
}
crescentOrder ([13, 3, 4, 10, 7, 2]);
 */