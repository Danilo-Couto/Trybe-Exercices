// Estruture os testes utilizando mocha e chai para um função que irá dizer se um número é "positivo", "negativo" ou "neutro":
    // Essa função irá receber um número como parâmetro e retornar uma string como resposta;
    // Quando o número passado for maior que 0 deverá retornar "positivo", quando for menor que 0 deverá retornar "negativo" e quando igual a 0 deverá retornar "neutro";
    // Descreva todos os cenários de teste utilizando describes ;
    // Descreva todos os testes que serão feitos utilizando its ;
    // Crie as asserções validando se os retornos de cada cenário tem o tipo e o valor esperado.

const { expect } = require('chai');

const test = require('./funcaoTest');

describe('executa a funcao test', () => {
    describe('Quando o arquivo existe', () => {
        describe('o retorno', () => {
            const retorno = test();

        it('é uma string', () => {
            expect(retorno).a('string');
        });
    
        it('Quando o número passado é maior que 0 retorna "positivo"', () => {
            const retorno = test(1);
            expect(retorno).to.be.equals('positivo');
        });

        it('Quando o número passado é menor que 0 retorna "negativo"', () => {
            const retorno = test(-1);
            expect(retorno).to.be.equals('negativo');
        });
        
        it('Quando o número passado é 0 retorna "neutro"', () => {
            const retorno = test(0);
            expect(retorno).to.be.equals('neutro');
        });

        it('Quando o número passado é 0 retorna "neutro"', () => {
            const retorno = test(0);
            expect(retorno).to.be.equals('neutro');
        });

        });
    });
    
    describe('Quando o arquivo não existe', () => {
        describe('o retorno', () => {
        it('é igual a "null"', () => {
            const retorno = test();
            expect(retorno).to.be.equal(null);
        });
        });
    });

    describe('Quando o paramentro não é número', () => {
        describe('o retorno', () => {
        it('é igual a "o valor deve ser um número"', () => {
            const retorno = test('string');
            expect(retorno).to.be.equal( "o valor deve ser um número");
        });
        });
    });

    });
