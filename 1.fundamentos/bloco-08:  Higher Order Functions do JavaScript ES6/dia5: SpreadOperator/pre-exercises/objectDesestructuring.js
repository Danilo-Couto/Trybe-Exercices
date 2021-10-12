/* const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
  };

const { name: nome, seller, price} = product;
console.log(nome); // Smart TV Crystal UHD
console.log(seller); // Casas de Minas */

// no lugar de:
// console.log(product.name); // Smart TV Crystal UHD
// console.log(product.seller); // Casas de Minas


// ------

/* const student = {
    a: 'Maria',
    b: 'Turma B',
    c: 'Matematica',
  };

const { a: name, b: classAssigned, c: subject } = student;
  
console.log(name); // Maria
console.log(classAssigned); // Turma B
console.log(subject); // Matemática */

// ------

const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const printProductDetails = ({ name, price, seller }) => {
  console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
};

printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas