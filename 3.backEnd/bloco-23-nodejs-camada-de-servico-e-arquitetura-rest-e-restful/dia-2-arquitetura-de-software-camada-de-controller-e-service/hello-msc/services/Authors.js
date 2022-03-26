const Author = require('../models/Author');

const fullNameMaker = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;
  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');
  return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName,
  };
};

const getAll = async () => {
  const authors = await Author.getAll();
  return authors.map(fullNameMaker);
}

const findById = async (id) => {
  const author = await Author.findById(id);
  if (!author) return null;
  return fullNameMaker(author);
};

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return {code: 422, message: 'É obrigatório informar firstName e ele deve ser string'};
  if (!lastName || typeof lastName !== 'string') return {code: 422, message: 'É obrigatório informar middleName e ele deve ser string'};
  if (!middleName || typeof middleName !== 'string') return {code: 422, message: 'É obrigatório informar lastName e ele deve ser string'};
  return {};
}

const createAuthor = async (firstName, middleName, lastName) => {
  const validAuthor = isValid(firstName, middleName, lastName);
  if (validAuthor.message) return validAuthor;

  const author = await Author.createAuthor(firstName, middleName, lastName);
  return fullNameMaker(author);
};

module.exports = {
  getAll,
  findById,
  createAuthor,
}