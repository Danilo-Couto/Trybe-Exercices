/*
const sumFixAmount = (amount) => {
  return (number) => amount + number;
      // (number) => 15 + number;.
  // quando chama initialSum: (5) => 15 + 5.
}
const initialSum = sumFixAmount(15)

console.log(initialSum(5)); 
// initialSum(5) = (number) => 15 + number;
// initialSum(5) = (5) => 15 + 5;

/* Quando a função sumFixAmount é chamada como: sumFixAmount(15) , ela retorna (number) => 15 + number;.
Então initialSum = sumFixAmount(15) é o mesmo que initialSum = (number) => 15 + number;.
E quando você chama initialSum(5) é o mesmo que chamar (5) => 15 + 5. (editado) 
 */
// ----

/* 
const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  repeat(2, console.log); 


  const repeat = (2, console.log) => {
    for (let count = 0; count <= 2; count += 1) {
      console.log(count); //0, 1, 2
    }
  };
  repeat(5, console.log); 
 
 */ // ----
  
/*   const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  repeat(3, (qqrCoisa) => {
    if (qqrCoisa % 2 === 0) {
      console.log(qqrCoisa, 'is even');
    }
  });
 */
  //----

const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

const isEven = (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
};

const isOdd = (number) => {
  if ((number % 2) > 0) {
    console.log(number, 'is odd');
  }
};

repeat(3, isEven); // Testa quais números serão pares;
repeat(3, isOdd); // Testa quais números serão ímpares;

/* //dissecando:
const repeat = (3, isEven) => {
  for (let count = 0; count <= 3; count += 1) {
    isEven(count); // 0, 1, 2
  }
};

const isEven = (3) => {
  if (3 % 2 === 0) {
    console.log(3, 'is even');
  }
};

const isOdd = (3) => {
  if ((3 % 2) > 0) {
    console.log(3, 'is odd');
  }
};
 */