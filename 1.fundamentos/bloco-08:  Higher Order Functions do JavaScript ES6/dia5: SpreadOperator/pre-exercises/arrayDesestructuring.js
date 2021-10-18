
/*
const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada */

const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [firstCountry, secondCountry,...restCountries] = arrayCountries;

console.log(firstCountry, secondCountry, ...restCountries); 
// console.log(...restCountries);


/* const [, ,...restCountries] = arrayCountries;
console.log(restCountries); 
 */