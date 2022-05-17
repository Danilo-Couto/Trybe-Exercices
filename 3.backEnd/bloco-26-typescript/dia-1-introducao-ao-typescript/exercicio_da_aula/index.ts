// ./index.ts

import * as Exercise from './exercises';

console.log(Exercise.greeter('Maria'));
console.log(Exercise.personAge('Maria', 40));
console.log(`A soma do array é igual a ${Exercise.sumArray([3, 6, 9])}`);

console.log(`Triângulo de base 10cm e altura 25cm: ${Exercise.triangle(10, 25)}cm²`);
console.log(`Triângulo de base 5cm e altura 30cm: ${Exercise.triangle(5, 30)}cm²`);
console.log(`Triângulo de base 100cm e altura 200cm: ${Exercise.triangle(100, 200)}cm²`);

console.log(`Quadrado de lado 10cm: ${Exercise.square(10)}cm²`);
console.log(`Quadrado de lado 5cm: ${Exercise.square(5)}cm²`);
console.log(`Quadrado de lado 100cm: ${Exercise.square(100)}cm²`);

console.log(`Retângulo de base 10cm e altura 25cm: ${Exercise.rectangle(10, 25)}cm²`);
console.log(`Retângulo de base 5cm e altura 30cm: ${Exercise.rectangle(5, 30)}cm²`);
console.log(`Retângulo de base 100cm e altura 200cm: ${Exercise.rectangle(100, 200)}cm²`);

// Calcule a área de um losango que tem D = 32cm e d = 18cm;
console.log((`A área de um losango de Diagonal 32cm e diagonal de 18 cm é de ${Exercise.losangle(32,18)}cm2`));

// Calcule a área de um trapézio que tem B = 100cm, b = 70cm e altura = 50cm;
console.log((`A área de um trapézio de Base 100cm, altura 70 cm e base 50 cm é de ${Exercise.trapezie(100, 70, 50)}cm2`));

//Calcule a área de um círculo de raio igual 25cm;
console.log((`A área de um círculo de raio 25 cm é de ${Exercise.circle(25)}cm2`));

