<template>
  <!-- trecho de código que representa o html do componente -->

  <v-app>
    <!-- inserindo um barra na aprte superior da página -->
    <v-app-bar app color="primary" dark>
      <!-- inserindo um título -->
      <v-toolbar-title>Most Used Words</v-toolbar-title>
    </v-app-bar>

    <v-main> <Home />  </v-main>
  </v-app>
</template>

<script>
// importando os componentes utilizados na composição

import Home from "./components/Home";

export default {
  name: "App",

  // componentes utilizados na composição deste componente
  components: { Home },

  data: () => ({
    //
  }),
};
</script>
