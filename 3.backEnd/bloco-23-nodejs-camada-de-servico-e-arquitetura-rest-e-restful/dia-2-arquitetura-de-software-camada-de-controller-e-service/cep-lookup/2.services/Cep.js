const { formatCep } = require('../3.middlewares/validations');
const Cep = require('../4.models/Cep');

const getAll = async () => {
    return await Cep.getAll();
};

const findAddressByCep = async (searchedCep) => { 
  const cep = await formatCep(searchedCep);

  if (!cep) return { 
    error: { code: "invalidData", message: "CEP inválido" }
  };

  const address = await Cep.findAddressByCep(searchedCep);
    if (!address) {
      return {
        error: {
          code: 'notFound',
          message: 'CEP não encontrado',
        },
      };
    }
  return address;
  };

const createAddress = async (cep, logradouro, bairro, localidade, uf) => {
  const existingAddress = await Cep.findAddressByCep(cep);
  
  if (existingAddress) return ({ error: { code: "alreadyExists", message: "CEP já existente" }});

  return await Cep.createAddress(cep, logradouro, bairro, localidade, uf);
};


module.exports = {
    getAll,
    findAddressByCep,
    createAddress
}