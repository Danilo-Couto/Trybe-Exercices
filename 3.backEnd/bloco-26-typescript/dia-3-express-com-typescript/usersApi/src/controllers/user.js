const rescue = require('express-rescue');
const User = require('../services/user').default;
const status = require('../utils/httpStatus');
const generateToken = require('../services/generateToken');

const login = rescue((req, res) => generateToken(req.body)
  .then((token) => res.status(status['ok']).json(token)));

const create = rescue((req, res) => User.create(req.body)
  .then((data) => res.status(status['created']).json(data)));

const createAdmin = rescue((req, res) => User.create(req.body, 'admin')
  .then((data) => res.status(status['created']).json(data)));

const getAll = rescue((_req, res) => User.getAll()
  .then((data) => res.status(status['ok']).json(data)));

const getById = rescue((req, res) => User.getById(req.params)
  .then((data) => res.status(status['ok']).json(data)));

const update = rescue((req, res) => User.update(req.params, req.body)
  .then(() => res.status(status['noContent']).end()));

const updateSelf = rescue((req, res) => User.update(req.user, req.body)
  .then(() => res.status(status['noContent']).end()));

const remove = rescue((req, res) => User.remove(req.params)
  .then(() => res.status(status['noContent']).end()));

module.exports = { login, create, createAdmin, getAll, getById, update, updateSelf, remove };
