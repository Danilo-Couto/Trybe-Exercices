const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');

const escrevaArquivo = require('./escrevaArquivo');
const { lerArquivo } = require("./lerArquivo");

describe('Executa a função escrevaArquivo', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore();
  });

  describe('a resposta', () => {
    it('é uma "string"', () => {
      const resposta = escrevaArquivo('arquivo.txt', '#vqv conteúdo');
      expect(resposta).to.be.a('string');
    });

    it('é igual a "ok"', () => {
      const resposta = escrevaArquivo('arquivo.txt', '#vqv conteúdo');
      expect(resposta).to.be.equals('ok');
    });
  });
});

describe("Chama a função 'lerArquivo'", () => {
    describe("Quando o arquivo é lido com sucesso", () => {
    const CONTENT = "#vqv conteúdo";

      before(() => {
        sinon.stub(fs, "readFile").resolves(CONTENT);
      });

      after(() => {
        fs.readFile.restore();
      });

    describe("a resposta'", () => {
      it("é igual ao conteúdo do arquivo", async () => {
        const resposta = await lerArquivo("arquivo.txt");
        expect(resposta).to.be.equal("#vqv conteúdo");
      });
    });
  });

  describe("Quando a leitura de arquivo falha", () => {
    describe("a resposta", () => {
      it("é igual a 'null'", async () => {
        const resposta = await lerArquivo("arquivo_not_found.txt");

        expect(resposta).to.be.null;
      });
    });
  });
});