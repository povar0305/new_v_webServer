<template>
  <div class="datepicked">
    <VueDatePicker
      :model-value="props.date"
      locale="ru"
      auto-apply
      hide-offset-dates
      :enable-time-picker="false"
      text-input
      :highlight="highlightedDates"
      @update:model-value="selected"
      :format="format"
    ></VueDatePicker>
  </div>
</template>

<script setup lang="ts">
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import addDays from "date-fns/addDays";
const emit = defineEmits(["update:date"]);
import { ref } from "vue";
interface Props {
  date: Date;
}

const props = defineProps<Props>();

const highlightedDates = ref([
  addDays(new Date("2023.10.05"), 0),
  addDays(new Date("2023.10.10"), 0),
  addDays(new Date("2023.10.03"), 0),
]);

const format = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
};

function selected(e) {
  emit("update:date", e);
}
</script>
<style scoped lang="scss">
.datepicked {
  width: auto;
  margin-right: 10px;
}

.dp__theme_light {
  --dp-background-color: transparent !important;
  --dp-text-color: hsla(0, 0%, 100%, 0.5);
  &:hover {
    --dp-text-color: hsla(0, 0%, 100%, 1);
    --dp-background-color: hsla(0, 0%, 100%, 0.2) !important;
    --dp-icon-color: white;
  }
}
</style>
