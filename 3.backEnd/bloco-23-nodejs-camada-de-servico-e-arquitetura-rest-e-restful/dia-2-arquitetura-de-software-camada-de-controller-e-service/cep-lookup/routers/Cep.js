const express = require('express');
const router = express.Router();
const rescue = require('express-rescue');

const CepControllers  = require('../1.controllers/Cep');

router
// .app.get('/ping', rescue(Cep.getAll))
.get('/', rescue(CepControllers.getAll))
.get('/:cep', rescue(CepControllers.findAddressByCep))
.post('/', rescue(CepControllers.createAddress));

module.exports = router