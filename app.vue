<template>
  <v-menu v-model:routerName="routerName"></v-menu>

  <NuxtPage />
</template>

<script lang="ts" setup>
import VMenu from "./components/v-menu.vue";
import "@fortawesome/fontawesome-free/css/all.css";

const routerName = [
  { linkTo: "", text: "Главная", desc: "Главная страница" },
  { linkTo: "viewing", text: "Просмотр", desc: "Просмотр в реальном времени" },
  { linkTo: "archive", text: "Архив", desc: "Архивные записи" },
  { linkTo: "settings", text: "Настройки", desc: "Настройки приложения" },
];
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;700&display=swap");
body {
  margin: 0;
  padding: 15px;
  top: 0;
  background-color:$color-grey-6;
  font-family: "Roboto", sans-serif;
  transition: 0.2ms;
}

.v-icon {
  color: $color-grey-2;
  cursor: pointer;
  &:hover{
    color: $color-white;
  }
}
</style>
