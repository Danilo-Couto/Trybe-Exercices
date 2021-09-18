/* EXERCICIOS 4.2 

ok -Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
ok - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
ok - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
ok - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
ok - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
ok - Utilizando for , descubra qual o maior valor contido no array e imprima-o;
ok - Utilizando for , descubra qual o menor valor contido no array e imprima-o;
ok - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
ok - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 . */
 
  */


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1
for (contador=0; contador < numbers.length; contador +=1) {
    console.log (numbers[contador]); 
} 

//2
let soma = 0;
for (contador=0; contador < numbers.length; contador +=1) {
    soma += (numbers[contador]);
   } 
console.log (soma);   
 
//3 
let soma = 0;
for (contador=0; contador < numbers.length; contador +=1) {
    soma += (numbers[contador]);
} 

//4
let media_aritmetica = (soma/numbers.length)
console.log (media_aritmetica); */


//5
let qtd_impar = 0;

for (contador=0; contador<numbers.length; contador+=1) {
    if (numbers[contador]%2!=0) {
        qtd_impar++;
    } else {
    }
}
console.log(qtd_impar);

//6
let maior = 0;

for (contador=0; contador<numbers.length; contador+=1) {
    if (numbers[contador]> maior) {
        maior = numbers[contador]
    } else {
        
    }
} 
console.log (maior); 

//7
var menor= numbers[0];

for (contador=0; contador<numbers.length; contador+=1) {
    if (numbers[contador]< menor) {
        menor = numbers[contador]
    } else {
        
    }
} 
console.log (menor); 

//ou

var menor= Infinity;

for (contador=0; contador<numbers.length; contador+=1) {
    if (numbers[contador]< menor) {
        menor = numbers[contador]
    } else {
        
    }
} 
console.log (menor); 

//8
let lista = [];

for (contador=0; contador<numbers.length; contador +=1) {
    if (numbers[contador]<=25) {
        lista.push (numbers[contador])
    } else {
        }
}
console.log (lista.sort(function(a,b){return a-b}));
 
//ou

let lista = [];
for (contador=0; contador<=25; contador +=1) {
    lista.push(contador)
}
console.log (lista);

//9
for (contador=0; contador<lista.length; contador +=1) {
    console.log (lista[contador]/2);
}