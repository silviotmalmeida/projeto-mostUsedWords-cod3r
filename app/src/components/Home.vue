<template>
  <!-- trecho de código que representa o html do componente -->
  <!-- definindo o componente home -->

  <!-- definindo um container para ocupar a tela inteira -->
  <v-container fluid>
    <!-- formulário -->
    <v-form>
      <!-- renderiza o componente vuetify de carregamento de arquivos -->
      <!-- vincula a variável files ao valor atual do input -->
      <!-- o atributo @click:append-outer é responsável por escutar o evento de click do append padrão e emitir um novo evento que executa o método processSubtitles -->
      <v-file-input
        label="Selecione as Legendas"
        prepend-icon="mdi-message-text"
        append-outer-icon="mdi-send"
        outlined
        multiple
        chips
        v-model="files"
        @click:append-outer="processSubtitles"
      />
    </v-form>

    <!-- div que conterá as pílulas -->
    <div class="pills">
      <!-- inicia a renderização das pílulas -->
      <!-- laço de repetição para desenhar a quantidade de palavras contidas no array de objetos groupedWords -->
      <Pill
        v-for="word in groupedWords"
        :key="word.name"
        :name="word.name"
        :amount="word.amount"
      />
    </div>
  </v-container>
</template>

<script>
// importando os componentes utilizados na composição
import { ipcRenderer } from "electron";
import Pill from "./Pill";

export default {
  // componentes utilizados na composição deste componente
  components: { Pill },

  // função que retorna o estado inicial das variáveis do componente
  data: function() {
    return {
      // refere-se ao array de arquivos de legenda .srt a serem processados
      files: [],

      // refere-se ao array de objetos {name,amount} resultante do processamento
      groupedWords: [],
    };
  },
  methods: {
    // função responsável por processar os arquivos de legenda e retornar os objetos {name,amount} no array groupedWords
    processSubtitles() {
      // obtendo os paths dos arquivos selecionados
      const paths = this.files.map((f) => f.path);

      // utilizando o IPC para enviar o array de paths para o backend pelo canal process-subtitles
      ipcRenderer.send("process-subtitles", paths);

      // utilizando o IPC para receber o array de objetos {name, amount} do backend pelo canal process-subtitle
      ipcRenderer.on("process-subtitles", (event, resp) => {
        this.groupedWords = resp;
      });
    },
  },
};
</script>

<style>
/* trecho de código que representa o css do componente */

.pills {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
