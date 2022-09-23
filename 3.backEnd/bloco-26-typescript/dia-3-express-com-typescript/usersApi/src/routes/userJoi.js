const express = require('express');
const user = require('../controllers/user');
const validate = require('../middlewares/validators');
const joiValidate = require('../middlewares/joiValidate');
const { user } = require('../utils/joiSchemas');

const route = express.Router();

route.post('/', joiValidate(user), validate.userExists, user.create);

route.use(validate.token);
route.get('/:id', user.getById);
route.put('/me', joiValidate(user), user.updateSelf);

route.use(validate.admin);
route.get('/', user.getAll);
route.post('/admin', joiValidate(user), user.createAdmin);
route.put('/:id', joiValidate(user), user.update);
route.delete('/:id', user.remove);

module.exports = route;
