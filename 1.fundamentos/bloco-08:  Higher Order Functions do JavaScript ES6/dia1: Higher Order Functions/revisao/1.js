/* 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

 */const newEmployees = () => {
    const employees = {
      id1: contratados('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: contratados('Luiza Drummond'),
      id3: contratados('Carla Paiva'),
    }
    return employees;
  };

  function contratados({nomeCompleto}) {
    let nomeEmail = nomeCompleto.toLowerCase().split(' ').join('_');
    return {nomeCompleto, `${nomeEmail}@trube.com` };
  };

console.log(newEmployees());
