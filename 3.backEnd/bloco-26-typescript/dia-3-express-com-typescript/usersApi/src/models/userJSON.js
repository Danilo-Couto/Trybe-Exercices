const crypto = require('crypto');
const db = require('./jsonData');

const generateId = () => crypto.randomBytes(8).toString('hex');

const getAll = async () => {
  const users = await db.read();
  return users;
};

const getById = async (id) => {
  const users = await db.read();
  const user = users.find((user) => user.id === id);
  return user;
};

const getByEmail = async (email) => {
  const users = await db.read();
  const user = users.find((user) => user.email === email);
  return user;
};

const create = async ({ name, email, password, role }) => {
  const users = await db.read();
  const newUser = { id: generateId(), name, email, password, role };
  await db.write([ ...users, newUser ]);
  return newUser;
};

const update = async (id, { name, email, password }) => {
  const users = await db.read();
  const updatedUser = { id, name, email, password };
  const updatedList = users.map((user) => user.id === id ? updatedUser : user);
  await db.write(updatedList);
  return updatedUser;
};

const remove = async (id) => {
  const users = await db.read();
  const updatedList = users.filter((user) => user.id !== id);
  await db.write(updatedList);
  return null;
};

module.exports = { getAll, getById, getByEmail, create, update, remove };
