<template>
  <a class="train">
    <div
      class="status_error"
      v-tooltip.top="tootlipsText"
      :class="[props.train.hasAlarm ? 'bg-red' : 'bg-transparent']"
    ></div>
    <div class="train__inner">
      <p>
        <span v-tooltip.top="'Время прибытия состава '" class="text-blue-grey-lighten-1"
          >{{ props.train.time }}
        </span>
      </p>
      <p>
        <span v-tooltip.top="'Количество вагонов'" class="text-blue-grey-lighten-1"
          >{{ props.train.count }}
        </span>
      </p>
      <p>
        <span v-tooltip.top="'Номер состава'" class="text-blue-grey-lighten-1"
          >{{ props.train.number }}
        </span>
      </p>
      <p>
        <span v-tooltip.top="'Индекс состава'" class="text-blue-grey-lighten-1"
          >{{ props.train.index }}
        </span>
      </p>
      <p>
        <span v-tooltip.top="ASKMtitle" :class="ASKMclass">АСКМ </span>
      </p>
      <p v-if="props.soursesTrains.weight">
        <span v-tooltip.top="'Общий вес(т)'" class="text-blue-grey-lighten-1"
          >{{ props.train.weight }}
        </span>
      </p>
      <p>
        <span v-tooltip.top="'Скорость состава(км/ч)'" class="text-blue-grey-lighten-1"
          >{{ props.train.speed }}
        </span>
      </p>
      <p>
        <span v-tooltip.top="'Направление состава'" class="text-blue-grey-lighten-1"
          >{{ props.train.direction }}
        </span>
      </p>
    </div>

    <div class="buttons">
      <v-btn
        icon="mdi-tray-arrow-down"
        size="x-small"
        variant="text"
        color="blue-grey-lighten-4"
        v-tooltip.top="'Посмотреть веб версию'"
        @click.stop="showWebVersion(props.train)"
      >
      </v-btn
      ><v-btn
        size="x-small"
        variant="text"
        icon="mdi-monitor"
        color="blue-grey-lighten-4"
        v-tooltip.top="'Скачать архив'"
        @click.stop="downloadInfo(props.train)"
      >
      </v-btn>
    </div>
  </a>
</template>
<script setup lang="ts">
interface Props {
  train: {
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
  };
  soursesTrains: {
    weight: boolean;
  };
}
const props = defineProps<Props>();

//TODO downloadInfo
function downloadInfo(train) {
  console.log("downloadInfo(id)", train);
}
//TODO showWebVersion
function showWebVersion(train) {
  console.log("showWebVersion(train)", train);
}
let ASKMclass = ""; //класс аскм для отображения цвета. Варианты text-green-lighten-1,text-blue-darken-1,
let ASKMtitle = ""; //локальная переменная компонента, для текста в tootlips у строчки АСКМ

if (props.train.ASKMsent != null && props.train.ASKMneed == 0) {
  ASKMclass = "text-green-lighten-1";
  ASKMtitle = "Данные АСКМ отправлены:" + props.train.ASKMsent;
}
if (props.train.ASKMneed == 1) {
  ASKMclass = "text-blue-darken-1";
  ASKMtitle = "Ожидает обработки";
}
if (props.train.ASKMsent != null && props.train.ASKMneed == 1) {
  ASKMclass = "text-blue-grey-lighten-1 wink";
  ASKMtitle = "Данные аскм отправляются";
}
if (ASKMclass == undefined) {
  ASKMclass = "text-blue-grey-lighten-1";
  ASKMtitle = "Невозможно отправить данные";
}
let tootlipsText = "";
if (props.train.hasAlarm) {
  tootlipsText = "У состава обнаружены алерты";
}
</script>
<style>
.wink {
  animation: blink 1s infinite; /* Параметры анимации */
}

@keyframes blink {
  from {
    opacity: 0; /* Непрозрачный текст */
  }
  to {
    opacity: 1; /* Прозрачный текст */
  }
}
</style>
