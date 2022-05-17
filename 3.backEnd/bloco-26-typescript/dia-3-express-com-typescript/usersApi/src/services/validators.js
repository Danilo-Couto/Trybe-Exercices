const fs = require('fs');
const jwt = require('jsonwebtoken');
const md5 = require('md5');
const validator = require('validator');
const User = require('../models/userJSON');
const msg = require('../utils/errMessages');

const err = (code, message) => ({ code, message });

const checkName = (name) => {
  if (name === undefined) throw err('badRequest', msg.nameRequired);
  if (validator.isEmpty(name)) throw err('badRequest', msg.emptyName);
  if (name.length < 6) throw err('badRequest', msg.emptyName);
};

const checkEmail = (email) => {
  if (email === undefined) throw err('badRequest', msg.emailRequired);
  if (validator.isEmpty(email)) throw err('badRequest', msg.emptyEmail);
  if (!validator.isEmail(email)) throw err('badRequest', msg.emailLength);
};

const checkPassword = (password) => {
  if (password === undefined) throw err('badRequest', msg.passwordRequired);
  if (validator.isEmpty(password)) throw err('badRequest', msg.emptyPassword);
  if (password.length < 6) throw err('badRequest', msg.passwordLength);
}

const user = async ({ name, email, password }) => {
  checkName(name);
  checkEmail(email);
  checkPassword(password.toString());
};

const login = async ({ email, password }) => {
  checkEmail(email);
  checkPassword(password.toString());
  const user = await User.getByEmail(email);
  if (!user || user.password !== md5(password)) throw err('unauthorized', msg.invalidEntries);
};

const userExists = async ({ email }) => {
  const exists = await User.getByEmail(email);
  if (exists) throw err('conflict', msg.emailRegistered);
};

const token = async ({ authorization }) => {
  const secret = fs.readFileSync('jwt.key', { encoding: 'utf-8' }).trim();
  if (!authorization) throw err('unauthorized', msg.tokenNotFound);
  try {
    const payload = jwt.verify(authorization, secret);
    return payload;
  } catch (e) {
    throw err('unauthorized', msg.invalidToken);
  }
};

const admin = async ({ role }) => {
  if (role !== 'admin') throw err('forbidden', msg.notAllowed);
};

module.exports = { user, login, userExists, token, admin };
