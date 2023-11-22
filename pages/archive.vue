<template>
  <!-- TODO  поправить названия блоков -->
  <div>
    <div class="header">
      <p class="nameStantion">{{ stationName }}</p>
      <v-btn
        class="mx-2"
        icon="mdi:mdi-reload"
        size="x-small"
        variant="tonal"
        :class="[needUpdate ? 'text-red' : 'text-blue-grey-lighten-4']"
        @click="this.$router.go()"
      />
    </div>
  </div>
  <div class="wrapper_form">
    <date-pick v-model:date="date" />
    <v-search v-model="searchText" @searchTrain="searchTrain(searchText)" />
  </div>
  <v-trains
    :trains="trainsList"
    v-model="selectedTrain"
    @update:model-value="showPopup = true"
    @downloadTrain="downloadInfoTrain"
    @webTrain="showWebVersionTrain"
  />
  <div class="popup" v-show="showPopup">
    <div class="inner ">
      <div class="title">

          <v-tab value="video" variant="plain" density="comfortable" min-width="auto">
            <v-icon icon="mdi:mdi-video"  />
          </v-tab>
          <v-tab value="photo" variant="plain" density="comfortable" min-width="auto">
            <v-icon icon="mdi:mdi-image"  />
          </v-tab>
          <v-tab value="3d" variant="plain" density="comfortable" min-width="auto">
            <v-icon icon="mdi:mdi-cube"  />
          </v-tab>
          <v-tab value="weight" variant="plain" density="comfortable" min-width="auto">
            <v-icon icon="mdi:mdi-weight"  />
          </v-tab>
          <v-tab value="info" variant="plain" density="comfortable" min-width="auto">
            <v-icon icon="fa:fa-solid fa-info"  />
          </v-tab>
          <v-tab value="alerts" variant="plain" density="comfortable" min-width="auto">
            <v-icon icon="fa:fas fa-triangle-exclamation"  />
          </v-tab>
        <div class="info">
          <p v-tooltip.top="'Номер состава'">№ {{ selectedTrain.number }}</p>
          <p v-tooltip.top="'Количество вагонов'">{{ selectedTrain.count }} ваг.</p>
          <p v-tooltip.top="'Время прибытия состава'">{{ selectedTrain.time }}</p>
          <p v-tooltip.top="'Дата прибытия состава'">{{ selectedTrain.date }}</p>
          <p v-tooltip.top="'Индекс состава'">{{ selectedTrain.index }}</p>
          <v-btn
            icon="mdi:mdi-tray-arrow-down"
            size="x-small"
            variant="plain"
            v-tooltip.top="'Скачать архив'"
            @click.stop="downloadInfoTrain(selectedTrain)"
          >
          </v-btn
          ><v-btn
            size="x-small"
            variant="plain"
            icon="mdi:mdi-monitor"
            color="white "
            v-tooltip.top="'Посмотреть веб версию'"
            @click.stop="showWebVersionTrain(selectedTrain)"
          >
          </v-btn>
          <v-btn
            icon="mdi:mdi-close"
            size="x-small"
            variant="plain"
            
            v-tooltip.top="'Закрыть'"
            @click.stop="showPopup = false"
          />
        </div>
      </div>

      {{ tab }}
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import DatePick from "~/components/date-pick.vue";
import VSearch from "~/components/v-search.vue";
import VTrains from "~/components/v-trains.vue";
import { useToast } from "vue-toastification";
const tab = ref("info");
const stationName = "Сонина станция";
const showPopup = ref(false);
const date = ref(new Date()); //дата из календаря
let searchText = ref(" "); //переменная, для текста из поисковой строки
let needUpdate = ref(false); //нужно ли обовить страницу
let selectedTrain = ref({}); //выбранный состав
let trainsList = ref([
  {
    id: 1666709900667,
    count: 15,
    time: "14:58:20",
    date: "25.10.2022",
    prefix: "2022-10-25_14-58-20",
    ASKMneed: 1,
    number: "****",
    index: "00000000",
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
    index: "00000001",
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
//TODO downloadInfo  функция загрузки информации о составе
function downloadInfoTrain(train) {
  console.log("downloadInfoTrain", train);
}

//TODO showWebVersion  функция показа отчета по составу в вкладке браузера
function showWebVersionTrain(train) {
  console.log("showWebVersionTrain", train);
}
</script>

<style lang="scss" scoped>
.tabs {
  & .active {
    --v-border-color: white;
  }
}

.popup {
  position: fixed;
  top: 95px;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  & .inner {
    background: $color-grey-5;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-radius: 1rem;

    & .title {
      display: flex;
      align-items: center;
      justify-content: space-between;

      & .info {
        display: flex;
        align-items: center;

        & p {
          margin-right: 10px;
        }
      }
    }
  }
}

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
