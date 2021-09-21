let array = [37,-5,-15,-37,5,15]

array.sort((a,b) => a-b) // Sort numerically, ascending
console.log(array) // -37, -15, -5, 5, 15, 37

let min = array[0]
let max = array[array.length-1]
console.log(`Minimum: ${min}, Maximum: ${max}`) // Minimum: -37, Maximum: 37


