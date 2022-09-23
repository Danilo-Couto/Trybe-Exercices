/* 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

n = 5

*****
*****
*****
*****
***** */

let n = 5;
let simbolo = '*';
let linha = '';

for (let contador=0; contador < n; contador+=1) {
    linha +=simbolo;
};

for (let contador=0; contador < n; contador+=1) {
  console.log(linha);
};

