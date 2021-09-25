/* Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .
Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .

Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
JavaScript;
HTML; ... #goTrybe". */

let array = ['html', 'css' , 'js', 'ecma6', 'react'];
array.sort();
let str = array.toString();

replacer = (x) => `Tryber ${x} aqui!`;

function concat() {
    console.log(`${replacer('Danilo')} Minhas cinco principais habilidades são: ${str} =).`)   
}
concat();