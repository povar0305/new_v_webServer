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
      <vTrain
        v-for="train in props.trains"
        :key="train.id"
        :train="train"
        :soursesTrains="soursesTrains"
        @click="selectedTrain(train)"
      ></vTrain>
    </div>
  </div>
</template>
<script setup lang="ts">
import vTrain from "./v-train.vue";

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
    index: string;
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
const emit = defineEmits(["update:modelValue"]);

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
<style lang="scss">
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
    & p {
      width: 100px;
    }
  }
}

.train {
  margin-bottom: 10px;
  padding: 5px 10px;
  align-items: center;
  flex-direction: row;
  position: relative;
  display: flex;
  height: 40px;
  justify-content: space-between;
  &:hover {
    box-shadow: 0px 0px 20px -5px rgba(255, 255, 255, 0.31);
    cursor: pointer;
  }
}
.train .status_error {
  width: 3px;
  height: 40px;
  left: -3px;
  position: absolute;
  top: 0;
}

.train__inner {
  width: calc(100% - 140px);
  display: flex;
  justify-content: space-between;
  & > * {
    width: 100px;
  }
}
</style>
