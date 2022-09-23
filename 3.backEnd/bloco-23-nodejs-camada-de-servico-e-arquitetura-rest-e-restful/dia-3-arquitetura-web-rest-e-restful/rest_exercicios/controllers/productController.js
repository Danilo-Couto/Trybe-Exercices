const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/', async (req, res, next) => {
  const products = await ProductModel.getAll();

  res.status(200).json(products || []);
});

router.get('/:id', async (req, res, next) => {
  const product = await ProductModel.getById(req.params.id);

  if (!product) res.status(400).json({erro: 400, message: 'Produto não encontrado'})

  res.status(200).json(product);
});

router.post('/', async (req, res) => {
    const { name, brand } = req.body;

    const newProduct = await ProductModel.add(name, brand);

    if (!newProduct) res.status(400).json({erro: 400, message: 'Algo deu errado'})

    res.status(200).json(newProduct);
});

router.delete('/:id', async (req, res) => {
  const products = await ProductModel.exclude(req.params.id);

  if (!products) res.status(400).json({erro: 400, message: 'Algo deu errado'})

  res.status(200).json(products);
});

router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;

  const editedProduct = await ProductModel.update(req.params.id, name, brand);
  console.log(editedProduct)
  
  if (editedProduct) res.status(400).json({erro: 400, message: 'Algo deu errado'})

  res.status(200).json(editedProduct);
});

module.exports = router;