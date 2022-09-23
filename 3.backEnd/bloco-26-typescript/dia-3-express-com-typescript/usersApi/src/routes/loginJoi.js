const express = require('express');
const user = require('../controllers/user');
const joiValidate = require('../middlewares/joiValidate');
const { login } = require('../utils/joiSchemas');

const route = express.Router();

route.post('/', joiValidate(login), user.login);

module.exports = route;
