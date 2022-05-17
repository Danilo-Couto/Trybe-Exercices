const express = require('express');

const authMiddleware = require('./middleware/authMiddleware');
const productControllers = require('./controllers/products');
const userController = require('./controllers/user');

const app = express();

app.use(express.json());

app.post('/signup', userController.signUp);

app.post('/login', userController.login);

app.post('/products', authMiddleware, productControllers.create);

app.put('/products/:id', productControllers.update);

// 

app.get('/products', authMiddleware, productControllers.getAll);

app.get('/userproducts', authMiddleware, userController.usersProduct);

app.get('/allproducts', productControllers.withUser);

app.get('/products/:id', authMiddleware, productControllers.getById);

app.delete('/products/:id', productControllers.remove);

module.exports = app;
