/* let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
} 

let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let index in car) {
    console.log(index, car[index]);
  }

let food = ['hamburguer', 'bife', 'acarajé'];

    for (let position in food) {
    console.log(food[position]);
  };

  for (let position in food) {
      console.log (position);
  }

  let food = ['hamburguer', 'bife', 'acarajé'];
  for (let value of food) {
  console.log(value);
}; 
 */

/* 1 - Usando o objeto abaixo, utilize For/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão. */

/*   let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' 
};

for (let key in names)
 */
/* console.log (names[key]); */

/* console.log (key, names[key]);*/
/* 
console.log ('Olá, '+names.person1);
console.log ('Olá, '+names.person2);
console.log ('Olá, '+names.person3); */
/* 
let names = ['Joao', 'Maria', 'Jose'];

for (let key in names)
console.log (key);
console.log (names);
console.log (names[2]);
console.log (names[key]);
console.log (key, names[key]);

 */
/* 2 - Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e valores desse objeto.
 */

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let key in car)

console.log (key, car[key])