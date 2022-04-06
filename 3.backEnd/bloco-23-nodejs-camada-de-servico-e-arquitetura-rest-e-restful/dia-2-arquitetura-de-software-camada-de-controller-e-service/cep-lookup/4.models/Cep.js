const { formatResult } = require('../3.middlewares/validations');
const connection = require('../connection');

const getAll = async () => {
    const [ping] = await connection.execute(
        'SELECT * FROM cep_lookup.ceps'
    );
    return ping;
};

const findAddressByCep = async (cepToSearch) => {
  // Removemos todos os traços, pois armazenamos o CEP puro no banco
  const treatedCep = cepToSearch.replace('-', '');
  const query = 'SELECT cep, logradouro, bairro, localidade, uf FROM cep_lookup.ceps WHERE cep = ?';
  const [result] = await connection.execute(query, [treatedCep]);
  
  if (result.length === 0) return null;
  return formatResult(result[0]);
};

const createAddress = async (cep, logradouro, bairro, localidade, uf) => {
  const treatedCep = cep.replace('-', '');

  const params = [treatedCep, logradouro, bairro, localidade, uf]; 
  const query = 'INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)';

  await connection.execute(query, params);
  
  return {
    cep, logradouro, bairro, localidade, uf
  }
};

module.exports = {
    getAll,
    findAddressByCep,
    createAddress
};