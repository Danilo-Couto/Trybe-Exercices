/* const customer1 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};
customer1.lastName = 'Faria';
console.log(customer1);
 
const customer2 = {
  firstName: 'Maria',
  age: 23,
  job: 'Medic',
};
customer2['lastName'] = 'Silva';
console.log(customer2) */;

const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};


//eu que fiz
let newKey2 = 'nacionality';
const nacionality = 'Brasil'
customer[newKey2] = nacionality;
let newkey = 'birthDate';
const birthDate = '19/11/1986';
customer[newkey] = birthDate;
let newkey2 = 'civilStatus';
const civilStatus = 'solteiro';
customer[newkey2] =civilStatus;
//eu que fiz

let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;

/* eu faria assim:
const lastName = 'Silva';
customer['lastName'] = lastName;
const nomeCompleto = `${customer.firstName} ${customer.lastName}`;
customer['fullName'] = nomeCompleto;
console.log(customer); */