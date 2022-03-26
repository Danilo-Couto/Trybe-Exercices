const Author = require('../models/Author');
const authorValitation = require('../schemas/authorValitation');

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

const createAuthor = async (firstName, middleName, lastName) => {
  const validAuthor = authorValitation.isValid(firstName, middleName, lastName);
  if (validAuthor.message) return validAuthor;

  const author = await Author.createAuthor(firstName, middleName, lastName);
  return fullNameMaker(author);
};

module.exports = {
  getAll,
  findById,
  createAuthor,
}