/* 3- Agora inverta o lado do triângulo. Por exemplo:
Copiar
n = 5
    *
   **
  ***
 ****
***** 
*/

let n = 5;
let base = n;
let simbolo = '*';
let linha = '';

for (let i=0; i<n; i+=1){
    for (let i=0; i<=n; i+=1) {
    if (i<base){
        linha = linha + ' ';
        } else {
        linha = linha + simbolo;
        }
    }
    console.log (linha);
    base = base - 1;
    linha = '';
};

