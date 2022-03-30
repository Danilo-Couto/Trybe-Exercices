const { formatCep } = require('../3.middlewares/validations');
const Cep = require('../4.models/Cep');
const JOI = require('joi');

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

  const requiredNonEmptyString = JOI.string().not().empty().required();

  const { error } = JOI.object({
      cep: JOI.string().regex(/\d{5}-\d{3}/).required(),
      logradouro: requiredNonEmptyString,
      bairro: requiredNonEmptyString,
      localidade: requiredNonEmptyString,
      uf: requiredNonEmptyString.length(2),
  }).validate({cep, logradouro, bairro, localidade, uf});

  if (error) return ({error});

  const existingAddress = await Cep.findAddressByCep(cep);
  
  if (existingAddress) return ({ error: { code: "alreadyExists", message: "CEP já existente" }});
  
  return await Cep.createAddress(cep, logradouro, bairro, localidade, uf);
};


module.exports = {
    getAll,
    findAddressByCep,
    createAddress
}