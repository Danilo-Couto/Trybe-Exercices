/* Utilizando as enums criadas nos exercícios anteriores e o pacote readline-sync, que cria uma interface para ler o que for inserido no console (mais informações, veja a documentação), crie um programa que quando a pessoa usuária escolher o mês do ano e o hemisfério no terminal:
Retorne em que estação aquele mês se encontra.
Caso seja um mês que possua duas estações retorne ambas. */

/*var readlineSync = require('readline-sync');

 // Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');
 
// Handle the secret text (e.g. password).
var favFood = readlineSync.question('What is your favorite food? ', {
  hideEchoBack: true // The typed text on screen is hidden by `*` (default).
});
console.log('Oh, ' + userName + ' loves ' + favFood + '!'); */

var readlineSync = require('readline-sync'),
  animals = ['Lion', 'Elephant', 'Crocodile', 'Giraffe', 'Hippo'],
  index = readlineSync.keyInSelect(animals, 'Which animal?');
console.log('Ok, ' + animals[index] + ' goes to your room.');
