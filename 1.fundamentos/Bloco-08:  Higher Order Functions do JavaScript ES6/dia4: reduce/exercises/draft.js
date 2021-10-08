const arrays = [
    ['1', '2', '3'], //a
    [true], //b 
    [4, 5, 6], // c
  ];

function flatten() {
    return arrays.reduce( (result, elem) => result + elem);
};

console.log(flatten());
