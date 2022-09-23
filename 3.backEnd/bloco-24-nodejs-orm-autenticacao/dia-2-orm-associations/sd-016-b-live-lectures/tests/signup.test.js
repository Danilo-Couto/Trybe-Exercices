const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const { expect } = require('chai');
const { User } = require('../models');
const app = require('../app');
const jwt = require('jsonwebtoken');

chai.use(chaiHttp);

describe('User API Test', () => {
  describe('POST /signup SUCESSO', () => {
    before(() => {
      sinon.stub(User, 'findOne').resolves(false);
      sinon.stub(User, 'create').resolves();
    });
    after(() => {
      User.findOne.restore();
      User.create.restore();
    })
    it('a requisição seja respondida com status 201 e mensagem "user created!"', async () => {
      const response = await chai.request(app)
        .post('/signup')
        .send({ email: 'email@email.com', password: 'Turma 16 <3' })
      expect(response).to.have.status(201);
      expect(response.body).to.be.deep.equal({ message: 'user created!' });
    })
  })

  describe('POST /signup ERRO', () => {
    before(() => {
      sinon.stub(User, 'findOne').resolves({});
    });
    after(() => {
      User.findOne.restore();
    })
    it('a requisição seja respondida com status 201 e mensagem "user created!"', async () => {
      const response = await chai.request(app)
        .post('/signup')
        .send({ email: 'email@email.com', password: 'Turma 16 <3' })
      expect(response).to.have.status(400);
      expect(response.body).to.be.deep.equal({ message: 'User already exist!'});
    })
  })

  describe('POST /login SUCESSO', () => {
    const token = "definitivamente é um token"
    before(() => {
      sinon.stub(User, 'findOne').resolves({ email: 'email@email.com', password: 'Turma 16 <3', id: 1 });
      sinon.stub(jwt, 'sign').returns(token)
    });
    after(() => {
      User.findOne.restore();
      jwt.sign.restore();
    })
    it('a requisição seja respondida com status 201 e mensagem "user created!"', async () => {
      const response = await chai.request(app)
        .post('/login')
        .send({ email: 'email@email.com', password: 'Turma 16 <3' })
        
      expect(response).to.have.status(200);
      expect(response.body).to.be.deep.equal({ token });
    })
  })

  describe('POST /login ERRO (User not exist)', () => {
    before(() => {
      sinon.stub(User, 'findOne').resolves(false);
    });
    after(() => {
      User.findOne.restore();
    })
    it('a requisição seja respondida com status 400 e mensagem "User not exist!"', async () => {
      const response = await chai.request(app)
        .post('/login')
        .send({ email: 'email@email.com', password: 'Turma 16 <3' })
      expect(response).to.have.status(400);
      expect(response.body).to.be.deep.equal({ message: 'User not exist!'});
    })
  })

  describe('POST /login ERRO (Incorrect Password)', () => {
    before(() => {
      sinon.stub(User, 'findOne').resolves({ email: 'email@email.com', password: 'Turma 16 <3' });
    });
    after(() => {
      User.findOne.restore();
    })
    it('a requisição seja respondida com status 400 e mensagem "User not exist!"', async () => {
      const response = await chai.request(app)
        .post('/login')
        .send({ email: 'email@email.com', password: 'Turma 16' })
      expect(response).to.have.status(401);
      expect(response.body).to.be.deep.equal({ message: 'Incorrect password!'});
    })
  })
})

