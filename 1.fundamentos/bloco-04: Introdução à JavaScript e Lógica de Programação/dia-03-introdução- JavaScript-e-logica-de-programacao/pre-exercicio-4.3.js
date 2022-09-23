/* 
Utilizando o array abaixo, percorra-o somando todos os valores. Caso o valor final seja maior que 15, imprima-o. Caso seja igual ou menor que 15, imprima a mensagem: "valor menor que 16":

Adicionar o array;
Criar uma variável com valor 0;
Criar um loop que percorre o array;
Incrementar a variável com o valor correspondente a cada loop;
Criar um if com a condição da variável ser maior que 15;
Caso a variável obedeça a condição;
Imprimir a variável
Caso não obedeça a condição;
Imprimir a mensagem "valor menor que 16"; */

let fruits = [3, 4, 10, 1, 12];
let soma = 0;

for (var contador=0;contador<fruits.length; contador +=1) {
    soma += fruits[contador];     
} 
if (soma > 15) {
    console.log (soma);
} else {
    console.log ('valor menor que 16')
}
