<template>
  <div>
    <div class="header">
      <p class="nameStantion">Название станции</p>
      <v-btn
        class="mx-2"
        icon="mdi-reload"
        size="x-small"
        variant="tonal"
        :class="[needUpdate ? 'text-red' : 'text-blue-grey-lighten-4']"
        @click="this.$router.go()"
      ></v-btn>
    </div>
  </div>
  <div class="wrapper_form">
    <DatePick v-model:date="date"></DatePick>
    <vSearch v-model="searchText" @searchTrain="searchTrain(searchText)"></vSearch>
  </div>
  <vTrains :trains="trainsList" v-model="selectedTrain"></vTrains>{{ selectedTrain }}
</template>
<script setup>
import { ref } from "vue";
import DatePick from "~/components/date-pick.vue";
import vSearch from "~/components/v-search.vue";
import vTrains from "~/components/v-trains.vue";
import { useToast } from "vue-toastification";

const date = ref(new Date()); //дата из календаря
let searchText = ref(" "); //переменная, для текста из поисковой строки
let needUpdate = ref(false); //нужно ли обовить страницу
let selectedTrain = ref({}); //выбранный состав
let trainsList = ref([
  {
    id: 1666709900667,
    count: 19,
    time: "14:58:20",
    date: "25.10.2022",
    prefix: "2022-10-25_14-58-20",
    ASKMneed: 1,
    number: "****",
    index: "**********",
    weight: 90,
    speed: 168,
    direction: "Неизвестно",
    gateactive: true,
    hvisoractive: false,
    icoactive: true,
    hasAlarm: true,
  },
  {
    id: 1666709900888,
    count: 19,
    time: "14:58:20",
    date: "25.10.2022",
    prefix: "2022-10-25_14-58-20",
    ASKMsent: 0,
    ASKMneed: 1,
    number: "****",
    index: "**********",
    weight: 0,
    speed: 168,
    direction: "Неизвестно",
    gateactive: true,
    hvisoractive: false,
    icoactive: true,
    hasAlarm: false,
  },
]);
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
