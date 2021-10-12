/* const greeting = (user) => console.log(`Welcome ${user}!`);

greeting(); // Welcome undefined! */

const greeting = (user = 'amigo') => console.log(`Welcome ${user}!`);

greeting(); 