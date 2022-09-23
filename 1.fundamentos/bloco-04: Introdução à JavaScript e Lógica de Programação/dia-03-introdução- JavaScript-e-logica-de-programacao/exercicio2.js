/* 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

n = 5

*
**
***
****
*****  */

let n = 5;
let base = n;
let simbolo = '*';
let linha = '';

for (i=0; i<n; i+=1) {
  linha +=simbolo;
  console.log (linha);
}