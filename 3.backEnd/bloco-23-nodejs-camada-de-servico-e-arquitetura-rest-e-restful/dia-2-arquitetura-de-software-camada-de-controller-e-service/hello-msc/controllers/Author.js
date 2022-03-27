const Author = require('../services/Authors');
const Joi = require('joi');

const getAll = async (_req, res) => {
  const authors = await Author.getAll();
  res.status(200).json(authors);
};

const findById = async (req, res, next) => {
  const { id } = req.params;
  const author = await Author.findById(id);
  if (author.error) return next(author.error);
  // res.status(404).json({ message: 'Author not found' });
  
  return res.status(200).json(author);
}

const createAuthor = async (req, res, next) => {
  const { firstName, middleName, lastName } = req.body;
    // Utilizamos o Joi para descrever o objeto que esperamos receber na requisição. Para isso, chamamos Joi.object() passando um objeto com os campos da requisição e suas descrições
  const { error } = Joi.object({
    firstName: Joi.string().not().empty().required(),
    lastName: Joi.string().not().empty().required(),
  })
  // Por fim, pedimos que o Joi verifique se o corpo da requisição se adequa a essas regras
    .validate({ firstName, lastName });
  
  // Caso exista algum problema com a validação, iniciamos o fluxo de erro e interrompemos o middleware.
  if (error) {
    return next(error);
  }

  // Caso não haja erro de validação, prosseguimos com a criação do usuário
  const newAuthor = await Author.createAuthor(firstName, middleName, lastName);

  // Caso haja erro na criação da pessoa autora, iniciamos o fluxo de erro
  if (newAuthor.error) return next(newAuthor.error);

  // Caso esteja tudo certo, retornamos o status 201 Created, junto com as informações da nova pessoa autora
  return res.status(201).json(newAuthor);
};

module.exports = {
  getAll,
  findById,
  createAuthor,
}