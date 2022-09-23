const { User, Product } = require('../models');
const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwtConfig');

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email }});

  if(!user) {
    return res.status(400).json({ message: 'User not exist!'});
  }

  if(password !== user.password)
    return res.status(401).json({ message: 'Incorrect password!'})

  const token = jwt.sign({ id: user.id }, jwtConfig.secret, jwtConfig.configs);

  return res.status(200).json({ token })
}

const signUp = async (req, res) => {
  const { email, password } = req.body;

  const exist = await User.findOne({ where: { email }});

  if(exist) {
    return res.status(400).json({ message: 'User already exist!'});
  }

  await User.create({ email, password });

  return res.status(201).json({ message: 'user created!'});
}

const usersProduct = async (req, res) => {
  const userProduct = await User.findOne({ 
    where: { id: req.user.id },
    include: { model: Product, as: 'products', attributes: { exclude: ['userId']} },
    attributes: { exclude: ['password', 'createdAt', 'updatedAt']}
  });

  return res.status(200).json(userProduct);
}

module.exports = { login, signUp, usersProduct };