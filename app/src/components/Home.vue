<template>
  <!-- trecho de código que representa o html do componente -->
  <!-- definindo o componente home -->

  <!-- definindo um container -->
  <v-container fluid>
    <v-form>
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
    <div class="pills">
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
// import { ipcRenderer } from "electron";
import Pill from "./Pill";

export default {
  // componentes utilizados na composição deste componente
  components: { Pill },

  // função que retorna o estado inicial das variáveis do componente
  data: function() {
    return {
      files: [],

      // refere-se ao array de objetos {name,amount} resultante do processamento
      groupedWords: [

          {name: 'teste1', amount: '999'},
          {name: 'teste2', amount: '998'}
      ],
    };
  },
  methods: {
    processSubtitles() {
      //console.log(this.files);
      // const paths = this.files.map((f) => f.path);
      // ipcRenderer.send("process-subtitles", paths);
      // ipcRenderer.on("process-subtitles", (event, resp) => {
      //     this.groupedWords = resp;
      // });
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
