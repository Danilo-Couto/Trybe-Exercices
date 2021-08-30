/* 4- Depois, faça uma pirâmide com n asteriscos de base:

  *
 ***
***** 

*/


let n = 5;
let base = n;
let meio = (n+1)/2;
let simbolo = '*';
let linha = '';
let esquerda = meio;
let direita = meio;

for (let i=1; i<n; i+=1){
    for (let i=1; i<=n; i+=1) {
    if (i>esquerda && i<direita){
        linha = linha + simbolo;
        } else {
        linha = linha + ' ';
        }
    }
    console.log (linha);
    linha = '';
    esquerda = esquerda -1;
    direita = direita +1;
};

