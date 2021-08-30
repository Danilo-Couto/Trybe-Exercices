
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

let n = 7;
let meio = (n+1)/2;
let simbolo = '*';
let linha = '';
let esquerda = meio;
let direita = meio;

for (let i=1; i<=n; i+=1){
    for (let j=1; j<=n; j+=1) {
    if (j==esquerda || j==direita || i===meio){
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
