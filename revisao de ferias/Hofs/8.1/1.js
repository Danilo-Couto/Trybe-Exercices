// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const newEmployees = (...callback) => {
  const employees = callback.map((element, index) => (
  id = { name: element, email:`${element.toLowerCase().split(' ').join('.')}@trybe.com` }
  ));
  return employees;
};

console.log(newEmployees('Pedro Guerra', 'Luiza Drumond', 'Carla Paiva'));

