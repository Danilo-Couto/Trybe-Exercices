2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

n = 5

*
**
***
****
***** 
*/

let n = 5;
let simbolo = '*';
let linha = '';

for (let contador=0; contador <= n; contador+=1) {
    console.log (linha)
    linha += simbolo;
}
*/

/* 3- Agora inverta o lado do triângulo. Por exemplo:
Copiar
n = 5

    *
   **
  ***
 ****
***** 


let n = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = n;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
    for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
        if (columnIndex < inputPosition) {
        inputLine = inputLine + ' ';
        } else {
        inputLine = inputLine + symbol;
    }
  }
    console.log(inputLine);
    inputLine = '';
    inputPosition -= 1;
};


/* 4- Depois, faça uma pirâmide com n asteriscos de base:

  *
 ***
***** 

*/


/*


let n = 5;
let simbolo = '*';
let linha = '';
let base = (n + 1) / 2;
let aesquerda = base;
let adireita = base;

for (let linhaIndex = 0; linhaIndex <= base; linhaIndex += 1) {
  for (let colunaIndex = 1; colunaIndex <=n; colunaIndex += 1) {
    if (colunaIndex > aesquerda && colunaIndex < adireita) {
      linha = linha + simbolo; 
      } else {
      linha = linha + ' ';
    }
}
console.log(linha);
linha = '';
adireita += 1;
aesquerda -= 1
}

//ou

let n = 5;
let simbolo = '*';
let linha = '';
let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let linhaIndex = 0; linhaIndex <= midOfMatrix; linhaIndex += 1) {
  for (let colunaIndex = 0; colunaIndex <= n; colunaIndex += 1) {
    if (colunaIndex > controlLeft && colunaIndex < controlRight) {
      linha = linha + simbolo;
    } else {
      linha = linha + ' ';
    }
}
console.log(linha);
linha = '';
controlRight += 1;
controlLeft -= 1
} */


/* 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
n = 7

   *
  * *
 *   *
*******/

/* Você pode manter a lógica do exercício 4, mas com o seguinte pensamento:
Antes, você estava colocando os espaços e depois colocando todos os asteriscos.
Agora, ainda precisa colocar os espaços, porém só vai colocar asteriscos no lugar onde colocava o primeiro e o último asterisco.
Como fazer seu programa só colocar asteriscos nesses lugares específicos? :pensativo:
Dica:
Qual estrutura posso utilizar para imprimir a variável de incremento em um loop for  apenas quando ela chegar em um valor específico?
 */
/* 
let n = 7;
let simbolo = '*';
let linha = '';
let base = (n + 1) / 2;
let aesquerda = base;
let adireita = base;

for (let linhaIndex = 1; linhaIndex <= base; linhaIndex += 1) {
  for (let colunaIndex = 1; colunaIndex <=n; colunaIndex += 1) {
    if (colunaIndex == aesquerda || colunaIndex == adireita || linhaIndex==base) {
      linha = linha + simbolo; 
      } else {
      linha = linha + ' ';
    }
}
console.log(linha);
linha = '';
adireita += 1;
aesquerda -= 1
}
 */
/* 
6- Faça um programa que diz se um número definido numa variável é primo ou não.
Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.

/* 
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

//ou 

/* let divisors = 1;
let numberToCheck = 31;

for (let number = 2; number <= numberToCheck; number += 1) {
  if (numberToCheck % number === 0) divisors += 1;
}

if (divisors === 2) console.log(numberToCheck + ' é primo');
else console.log(numberToCheck + ' não é primo');

