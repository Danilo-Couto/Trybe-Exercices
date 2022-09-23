const express = require('express');
const user = require('../controllers/user');
const validate = require('../middlewares/validators');

const route = express.Router();

route.post('/', validate.user, validate.userExists, user.create);

route.use(validate.token);
route.get('/:id', user.getById);
route.put('/me', validate.user, user.updateSelf);

route.use(validate.admin);
route.get('/', user.getAll);
route.post('/admin', validate.user, user.createAdmin);
route.put('/:id', validate.user, user.update);
route.delete('/:id', user.remove);

module.exports = route;
