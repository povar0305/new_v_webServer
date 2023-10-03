<template>
  <div id="app">
  <VMenu></VMenu>
    <NuxtPage />
  </div>
</template>

<script lang="ts">
import { NuxtLayout, VMenu } from '#build/components';


</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;700&display=swap');

body {
  margin: 0;
  padding: 0;
  top: 0;
  background-color: #15181a;
  font-family: 'Roboto', sans-serif;
}
</style>
