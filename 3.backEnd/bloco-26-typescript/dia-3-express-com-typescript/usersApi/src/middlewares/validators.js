const rescue = require('express-rescue');
const validate = require('../services/validators');

const user = rescue((req, _res, next) => validate.user(req.body)
  .then(() => next()));

const login = rescue((req, _res, next) => validate.login(req.body)
  .then(() => next()));

const userExists = rescue((req, _res, next) => validate.userExists(req.body)
  .then(() => next()));

const token = rescue((req, _res, next) => validate.token(req.headers)
  .then((data) => { req.user = data; next(); }));

const admin = rescue((req, _res, next) => validate.admin(req.user)
  .then(() => next()));

module.exports = { user, login, userExists, token, admin };
