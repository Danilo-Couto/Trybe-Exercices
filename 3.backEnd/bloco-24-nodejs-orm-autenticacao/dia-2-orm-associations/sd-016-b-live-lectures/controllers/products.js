const { Product, User } = require('../models');

const getAll = async (req, res) => {
  const product = await Product.findAll();

  return res.status(200).json(product);
}

const withUser = async (req, res) => {
  const products = await Product.findAll({
    attributes: { exclude: ['userId'] },
    include: { model: User, as: 'user', attributes: { exclude: ['password', 'createdAt', 'updatedAt'] } }
  });

  return res.status(200).json(products);
}

const getById = async (req, res) => {
  const { id } = req.params;

  const product = await Product.findOne(id);

  return res.status(200).json(product);
}

const create = async (req, res) => {
  const { name, quantity } = req.body;

  const product = await Product.create({ name, quantity, userId: req.user.id });

  return res.status(201).json(product);
}

const update = async (req, res) => {
  const { id } = req.params
  const { name, quantity } = req.body;

  const product = await Product.findByPk(id);

  product.name = name; 
  product.quantity = quantity;

  await product.save();

  // const product = await Product.update({ name, quantity }, { where: { id }})
  
  return res.json(product);
}

const remove = async (req, res) => {
  const { id } = req.params;

  await Product.destroy({ where: { id }});

  return res.status(200).json({ message: "excluido com sucesso"})

}

module.exports = {
  getAll,
  getById,
  withUser,
  create,
  update,
  remove,
}