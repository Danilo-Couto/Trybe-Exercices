/* 
2.
Faça uma função que retorne o array oddsAndEvens em ordem crescente.
Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números. */

/* 
  // FUNCAO ORIGINAL
  const oddsAndEvens =  [13, 3, 4, 10, 7, 2];
  function crescentOrder () {
  let lowestToHighest = oddsAndEvens.sort((a, b) => a - b);
  console.log(lowestToHighest)
}
crescentOrder (oddsAndEvens);
 */

  // FUNCAO OTIMIZADA
crescentOrder = oddsAndEvens => {
  oddsAndEvens.sort((a, b) => a - b);
  console.log(oddsAndEvens)
}
crescentOrder ([13, 3, 4, 10, 7, 2]);

//sort subscreve array original