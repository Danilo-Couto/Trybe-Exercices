/* //Neste exemplo, serão comparados valores para buscar o maior valor em um array. Tente criar essa função apenas com for e depois tente com reduce 

const numbers = [50, 85, -30, 3, 15];
let bigger = 0;

for (let i in numbers) {   
    if (numbers[i] > bigger) {
        bigger = numbers[i];
    }    
}   
console.log (bigger);
*/

// REDUCE

/* const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => ((bigger > number)? bigger : number);    
const higher = numbers.reduce(getBigger,0);

console.log (higher);
 */


//faça uma função que some todos os números pares do array:
//Tente criar uma usando reduce e filter , e outra apenas usando reduce .

/* const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getEven = numbers.filter((element)=> element % 2===0);
const getSum = (result, number) => result + number;
const sum = getEven.reduce(getSum,0);

console.log(sum);


//GABARITO:
const getEven = (number) => number % 2 === 0;
const sumPair = (currentValue, number) => currentValue + number;

const sumNumbers = (array) => array.filter(getEven).reduce(sumPair); // Olhe que código pequeno e conciso!

console.log(sumNumbers(numbers)); // 152
*/


//Solução usando apenas reduce :

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumPair = (currentValue, number) => (
  (number % 2 === 0) ? currentValue + number : currentValue
);

const sumNumbers = (array) => array.reduce(sumPair, 0);

console.log(sumNumbers(numbers)); // 152
