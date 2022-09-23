const sinon = require('sinon');
const chai = require('chai');

const chaiHttp = require('chai-http');
const { expect } = require('chai');
const { User, Product } = require('../models');
const app = require('../app');
const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwtConfig');

describe('Product API Test', () => {
  describe('POST /products FALHA sem token', () => {
    it('a requisição seja respondida com status 404 e mensagem "Token is missing", quando não houver token no header  Authorization', async () => {
      const response = await chai.request(app)
        .post('/products')
        .send({})
      expect(response).to.have.status(404);
      expect(response.body).to.be.deep.equal({ message: 'Token is missing!' });
    })
  })

  describe('POST /products FALHA com token inválido', () => {
    before(() => {
      sinon.stub(jwt, 'verify').throws(Error('erro genérico'));
    });
    after(() => {
      jwt.verify.restore();
    })

    it('a requisição seja respondida com status 401 e mensagem "Not Authorized!!!", quando houver token inválido no header Authorization', async () => {
      const response = await chai.request(app)
        .post('/products')
        .set('Authorization', 1)
        .send({})
      expect(response).to.have.status(401);
      expect(response.body).to.be.deep.equal({ message: 'Not Authorized!!!' });
    })
  })
  describe('POST /products SUCESSO com token válido', () => {
    const fakeProduct = { name: 'Luminária', id: 1 }
    before(() => {
      sinon.stub(Product, 'create').resolves(fakeProduct);
      sinon.stub(jwt, 'verify').returns({ id: 1 });
    });
    after(() => {
      jwt.verify.restore();
      Product.create.restore();
    })

    it('a requisição seja respondida com status 201 e com o produto criado', async () => {
      const response = await chai.request(app)
        .post('/products')
        .set('Authorization', 1)
        .send({})
      expect(response).to.have.status(201);
      expect(response.body).to.be.deep.equal(fakeProduct);
    })
  })
  describe('PUT /products/:id SUCESSO', () => {
    let token = jwt.sign({ id: 1}, jwtConfig.secret);
    const fakeProduct = { id: 1, name: 'Product #01', quantity: 5 }

    before(async () => {
      fakeProduct.save = sinon.stub();

      sinon.stub(Product, 'findByPk').resolves(fakeProduct);
    })

    after(()=>{
      Product.findByPk.restore();
    })

    it('retorna produto atualizado', async () => {
      const response = await chai.request(app)
      .put('/products/1')
      .set('Authorization', token)
      .send({ name: 'Updated Product', quantity: 99})  

      expect(response).to.have.status(200);
      expect(response.body).to.have.keys(['id', 'name', 'quantity'])
    })
  })
})