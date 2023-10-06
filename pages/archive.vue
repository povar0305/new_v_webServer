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
    <vSearch v-model="searchText" @searchTrain="searchTrain(searchText)"></vSearch>
  </div>
</template>
<script setup>
import { ref } from "vue";
import DatePick from "../components/date-pick.vue";
import vSearch from "~/components/v-search.vue";
import { useToast } from "vue-toastification";

const date = ref(new Date());
let searchText = ref(" ");

function searchTrain(text) {
  useToast().clear();
  if (Number(text)) {
    console.log("text", text);
    //TODO тут вызвать функцию для получаения данных по поиску
  } else {
    useToast().warning("Неверный формат поисковой строки (допустимы только цифры)", {
      position: "bottom-left",
      hideProgressBar: true,
      timeout: false,
    });
    this.searchText = "";

    return;
  }
  if (text.length <= 2) {
    useToast().error("Введите больше 3х цифр", {
      position: "bottom-left",
      hideProgressBar: true,
      timeout: false,
    });
  }
}
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
.wrapper_form {
  display: flex;
  padding-top: 10px;
}
</style>
