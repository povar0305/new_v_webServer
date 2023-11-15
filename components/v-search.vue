<template>
  <div class="search_wrapper">
    <v-btn class="search" color="blue-grey-lighten-4" icon="mdi:mdi-magnify" variant="plain" size="small"
      @click="$emit('searchTrain')">
    </v-btn>
    <input class="search_input" @input="$emit('update:modelValue', $event.target.value)" :value="props.modelValue"
      v-on:keyup.enter="$emit('searchTrain')" />
    <v-btn class="close" color="blue-grey-lighten-4" icon="mdi:mdi-close" variant="plain" size="small"
      @click="$emit('update:modelValue', '')">
    </v-btn>
  </div>
</template>
<script setup lng="ts">
const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue", "searchTrain"]);
</script>
<style lang="scss" scoped>
.search_wrapper {
  position: relative;
  flex: 1;

  & .v-btn--icon {
    position: absolute;

    &.close {
      right: 0;
    }
  }

  .search_input {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 6px 30px;
    color: hsla(0, 0%, 100%, 0.5);
    width: 100%;

    &:focus {
      outline: none;
      background-color: hsla(0, 0%, 100%, 0.2);
      color: white;
    }

    &:hover {
      background-color: hsla(0, 0%, 100%, 0.2);
      color: white;

      & svg {
        fill: white;
      }
    }
  }
}
</style>
