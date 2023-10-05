<template>
  <div>
    <div class="header">
      <p class="nameStantion">Название старнции</p>
      <v-btn
        class="mx-2"
        color="blue-grey-lighten-4"
        icon="mdi-reload"
        size="x-small"
        variant="tonal"
        @click="this.$router.go()"
      ></v-btn>
    </div>
  </div>
  <div class="wrapper_form">
    <DatePick v-model:date="date"></DatePick>
  </div>
</template>
<script setup>
import { ref } from "vue";
import DatePick from "../components/date-pick.vue";
const date = ref(new Date());
</script>

<style lang="scss" scoped>
.nameStantion {
  color: white;
  font-weight: 100;
}
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
