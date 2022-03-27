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

  if (!author) {
    return {
      error: {
        code: 'notFound',
        message: `Não foi possível encontrar uma pessoa autora com o id ${id}`,
      },
    };
  }

  return fullNameMaker(author);
};

const createAuthor = async (firstName, middleName, lastName) => {
  // const validAuthor = authorValitation.isValidPost(firstName, middleName, lastName);
  // if (validAuthor.message) return validAuthor;

  const existingAuthor = await Author.findByName(firstName, middleName, lastName);
  if (existingAuthor) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'Uma pessoa autora já existe com esse nome completo',
      },
    };
  };
  const author = await Author.createAuthor(firstName, middleName, lastName);

  return fullNameMaker(author);
};

module.exports = {
  getAll,
  findById,
  createAuthor,
}