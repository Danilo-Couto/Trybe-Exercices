/* 
Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .
 */
const hiredPerson = (name) => {
  let email = name.toLowerCase().split(' ').join('_');
  email = `${email}@trybe.com`;
  return { name, email };
};
// console.log (hiredPerson('Danilo Couto')); { nomeCompleto: 'danilo_couto', email: 'danilo_couto@trybe.com' }

/* const newEmployees = (a, b, c) => {
  const employees = {
    id1: hiredPerson(a),
    id2: hiredPerson(b),
    id3: hiredPerson(c),
  }
  return employees;
};
console.log(newEmployees('Pedro Guerra', 'Luiza Drumond', 'Carla Paiva'));
 */

// gabarito é assim:
const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), //retorna   id1: { name: 'Pedro Guerra', email: 'pedro_guerra@trybe.com' },
    id2: callback('Luiza Drumond'), // idem 
    id3: callback('Carla Paiva'), // idem
  };
  return employees;
};
console.log(newEmployees(hiredPerson));

/* 
// dissecando o codigo:

const newEmployees = (hiredPerson) => {
  const employees = {
    id1: hiredPerson('Pedro Guerra'),
    id2: hiredPerson('Luiza Drumond'),
    id3: hiredPerson('Carla Paiva'),
  };
  return employees;
};
console.log(newEmployees(hiredPerson)); */