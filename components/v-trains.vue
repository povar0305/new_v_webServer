<template>
  <div class="trains">
    <div class="trains_title">
      <p>
        <span v-tooltip.top="'Время прибытия состава '" class="text-blue-grey-lighten-4">
          Время
        </span>
      </p>
      <p>
        <span v-tooltip.top="'Количество вагонов'" class="text-blue-grey-lighten-4">
          Вагоны
        </span>
      </p>
      <p>
        <span v-tooltip.top="'Номер состава'" class="text-blue-grey-lighten-4">
          Номер
        </span>
      </p>
      <p>
        <span v-tooltip.top="'Индекс состава'" class="text-blue-grey-lighten-4">
          Индекс
        </span>
      </p>
      <p>
        <span v-tooltip.top="'Есть ли данные АСКМ'" class="text-blue-grey-lighten-4">
          АСКМ
        </span>
      </p>
      <p v-if="soursesTrains.weight">
        <span v-tooltip.top="'Общий вес(т)'" class="text-blue-grey-lighten-4"> Вес </span>
      </p>
      <p>
        <span v-tooltip.top="'Скорость состава(км/ч)'" class="text-blue-grey-lighten-4">
          Скорость
        </span>
      </p>
      <p>
        <span v-tooltip.top="'Направление состава'" class="text-blue-grey-lighten-4">
          Направление
        </span>
      </p>
    </div>
    <div class="trains_list">
      <v-train
        v-for="train in props.trains"
        :key="train.id"
        :train="train"
        :selected="modelValue"
        :soursesTrains="soursesTrains"
        @click="selectedTrain(train)"
        @download="$emit('downloadTrain', $event)"
        @web="$emit('webTrain', $event)"
      >
      </v-train>
    </div>
    {{ modelValue }}
  </div>
</template>
<script setup lang="ts">
import VTrain from "./v-train.vue";

interface Props {
  trains: {
    id: number;
    count: number;
    time: string;
    date: string;
    prefix: string;
    ASKMsent?: string;
    ASKMneed: number;
    number: string;
    index: number;
    weight: number;
    speed: number;
    direction: string;
    gateactive: boolean;
    hvisoractive: boolean;
    icoactive: boolean;
    hasAlarm: boolean;
  }[];
  modelValue: {};
}
const props = defineProps<Props>();
const emit = defineEmits(["update:modelValue", "downloadTrain", "webTrain"]);

let soursesTrains = ref({
  weight: false,
});

function selectedTrain(train) {
  emit("update:modelValue", train);
}
function checkSourses() {
  soursesTrains.weight = props.trains.some((train) => train.weight > 0);
}
checkSourses();
</script>
<style lang="scss" scoped>
.trains {
  display: flex;
  padding-top: 20px;
  flex-direction: column;

  &_list {
    display: flex;
    flex-direction: column;
  }

  &_title {
    display: flex;
    margin-right: 150px;
    justify-content: space-between;
    margin-left: 10px;
    margin-bottom: 1rem;

    & p {
      width: 100px;
    }
  }
}
</style>
