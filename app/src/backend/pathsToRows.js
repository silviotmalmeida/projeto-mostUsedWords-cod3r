// importando as dependências
const fs = require("fs");

// exportando a função de leitura de arquivos a partir de seus path
// recebe um array de path e retorna um array com as linhas de texto
module.exports = (paths) => {
  return new Promise((resolver, reject) => {
    try {
      // criando o array de saída a partir do array de paths
      const rows = paths
        // criando um array com o conteudo dos arquivo e convertendo para utf8
        .map((path) => fs.readFileSync(path).toString("utf-8"))
        // concatenando todos os elementos do array em uma única string
        .reduce((fullText, fileText) => `${fullText}\n${fileText}`)
        // criando um array com todo o texto
        .split("\n");

      // retornando o array de saída com as linhas de texto
      resolver(rows);
    } catch (e) {
      // retornando o evento de exceção em caso de problema na leitura dos arquivos
      reject(e);
    }
  });
};
