<template>
  <!-- trecho de código que representa o html do componente -->
  <!-- definindo o componente pill -->
  <div class="pill">
    <span class="name">{{ name }}</span>
    <span class="amount">{{ amount }}</span>
  </div>
</template>

<script>
export default {
  // propriedades a serem recebidas para criação do componente
  props: ["name", "amount"],
};
</script>

<style scoped>
/* trecho de código que representa o css do componente */

.pill {
  margin: 10px;
  height: 55px;
  border-radius: 30px;

  background-color: #dc143c;
  color: #fff;
  font-size: 1.3rem;
  font-weight: bold;

  display: flex;
  align-items: center;
}

.pill .name {
  margin-left: 15px;
}

.pill .amount {
  margin: 10px;
  padding: 5px;
  height: 35px;
  width: 35px;
  border-radius: 18px;

  background-color: #fff;
  color: #dc143c;

  font-size: 14px;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
