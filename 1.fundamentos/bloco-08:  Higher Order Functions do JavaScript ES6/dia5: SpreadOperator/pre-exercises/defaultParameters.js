/* const person = {
    name: 'João',
    lastName: 'Jr',
    age: 34,
  };
  
  const { nationality = 'Brazilian' } = person;
  console.log(nationality); // Brazilian
 */

/* const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 0  */


const greeting = (user) => console.log(`Welcome ${user}!`);
greeting(); // Welcome undefined! 

const greeting = (user = 'amigo') => console.log(`Welcome ${user}!`);
greeting(); 

const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);
greeting(); // // Welcome usuário!