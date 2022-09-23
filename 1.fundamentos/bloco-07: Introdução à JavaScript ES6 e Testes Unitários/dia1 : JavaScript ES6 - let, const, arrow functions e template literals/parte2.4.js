/* Crie um código JavaScript com a seguinte especificação:
Não se esqueça de usar template literals
Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
Exemplo:
String determinada: "Tryber x aqui!"
Parâmetro: "Bebeto"
Retorno: "Tryber Bebeto aqui!"
*/
/* 
function replacer (phrase, find, replace) {
    let newStr= phrase.replace(find, replace);
    console.log (newStr);
}
replacer ("Tryber x aqui!", 'x', 'Bebeto');
 */

replacer = x => console.log(`Tryber ${x} aqui!`);

replacer ('Danilo');




