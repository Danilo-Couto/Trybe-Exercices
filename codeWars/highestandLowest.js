/* 
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
 */
/* function highAndLow(numbers){
    const num = numbers.split(' ').map(n => { return Number(n)});
    const sorted = num.sort((a, b) => { return b - a});
    return [sorted[0], sorted[num.length-1]].join(' ')
} */

function highAndLow(numbers){
    numbers = numbers.split(' ');
    // console.log(...numbers)
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"

