// arquivo principal para as funções de backend, como por exemplo acesso ao sistema de arquivos

// importando as dependências
const { ipcMain } = require("electron");
const pathsToRows = require("./pathsToRows");
const prepareData = require("./prepareData");
const groupWords = require("./groupWords");

// utilizando o IPC para receber um evento originado do frontend pelo canal process-subtitles,
// processar os dados e responder ao frontend
ipcMain.on("process-subtitles", (event, paths) => {
  //obtendo as linhas de texto dos arquivos a partir dos paths
  pathsToRows(paths)
    .then((rows) => prepareData(rows))
    .then((words) => groupWords(words))

    // enviando o array de objetos {name, amount} para o frontend pelo canal process-subtitle
    .then((groupedWords) => event.reply("process-subtitles", groupedWords));
});
