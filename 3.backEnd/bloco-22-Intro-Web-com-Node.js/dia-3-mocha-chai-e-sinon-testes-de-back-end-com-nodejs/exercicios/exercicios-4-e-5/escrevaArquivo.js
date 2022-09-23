const fs = require('fs');

/* module.exports = (nomeDoArquivo, conteudoDoArquivo) => {
  fs.writeFileSync(`${__dirname}/${nomeDoArquivo}`, conteudoDoArquivo);

  return 'ok';
}; */

function escrevaArquivo(nomeDoArquivo, conteudoDoArquivo){
  fs.writeFileSync(nomeDoArquivo, conteudoDoArquivo);

  return 'ok';
}

/* function escrevaArquivo(nomeDoArquivo, conteudoDoArquivo){
  fs.writeFile(`${nomeDoArquivo}`, conteudoDoArquivo)
    .then(() => {
      return 'ok';
    })
    .catch((err) => {
      console.error(`Erro ao escrever o arquivo: ${err.message}`);
    });
  }
 */
escrevaArquivo('arquivo.txt', '#vqv conteúdo');

module.exports = escrevaArquivo;
