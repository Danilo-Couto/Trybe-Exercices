/* 
6- Faça um programa que diz se um número definido numa variável é primo ou não.
Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.


let n = 521;
let ehprimo = "";

for (i=0; i<=n ; i+=1){
  if (n>11) {
    if (n%2==0 || n%3==0 || n%5==0 || n%11==0) {
      ehprimo = false;
    } else {
      ehprimo = true;
    } 
  } else {
    if (n==1 || n==4|| n==6 || n==8 || n==10) {
      ehprimo = false;
    } else {
      ehprimo = true;
    }
  } 
}
console.log ('numeroprimo?:'+ehprimo);
 */

/*
Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; 
Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar. 
*/

/* let n = 2;
let ehprimo = '';

  for (index=1; index <n; index +=1) {
    if (n%index==0) {
      ehprimo = false;
      break;
    } else {
      ehprimo = true;
    }
  }  

console.log ('ehprimo?:'+ehprimo); */
/* 
let divisores = 1;
let n = 31 ;

for (index = 1; index < n; index +=1) {
  if (n%index==0) divisores+=1
}
if (divisores >= 2) {
  console.log ('ehprimo');
} else {
  console.log ('naoehprimo');
}
console.log ('divisores:'+divisores)
 */
//ou 

/* let divisors = 1;
let numberToCheck = 31;

for (let number = 2; number <= numberToCheck; number += 1) {
  if (numberToCheck % number === 0) divisors += 1;
}

if (divisors === 2) console.log(numberToCheck + ' é primo');
else console.log(numberToCheck + ' não é primo');
*/