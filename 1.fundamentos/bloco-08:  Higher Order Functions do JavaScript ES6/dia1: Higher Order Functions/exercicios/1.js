



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