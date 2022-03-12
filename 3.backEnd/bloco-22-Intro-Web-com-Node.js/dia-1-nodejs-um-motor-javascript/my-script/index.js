const readline = require('readline-sync');

// OBJ COM OS SCRIPTS
const scripts = [
  { name: 'Calcular IMC ', script: './imc.js' },
  { name: 'Calcular velocidade média ', script: './velocidade.js' },
  { name: 'Jogo de adivinhação ', script: './sorteio.js' },
];

// MENSAGEM 
let mensagem = scripts
  .map((script, index) => `${index + 1} - ${script.name}`);

mensagem.unshift('Escolha um número para executar o script correspondente');
mensagem = mensagem.join('\n');

// A ESCOLHA DA OPÇÃO
const scriptNumber = readline.questionInt(mensagem) - 1;

// ENTRANDO NO OBJETO ESCOLHIDO
const script = scripts[scriptNumber];
if (!script) console.log('Número inválido. Saindo');

// E EXECUTANDO O SCRIPT ESCOLHIDO
require(script.script);


//RESOLUCAO DO GABARITO