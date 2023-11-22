<template>
  <div class="search_wrapper">
    <v-btn class="search" icon="mdi:mdi-magnify" variant="plain" size="small"
      @click="$emit('searchTrain')">
    </v-btn>
    <input class="search_input" @input="$emit('update:modelValue', $event.target.value)" :value="props.modelValue"
      v-on:keyup.enter="$emit('searchTrain')" />
    <v-btn class="close"  icon="mdi:mdi-close" variant="plain" size="small"
      @click="$emit('update:modelValue', '')">
    </v-btn>
  </div>
</template>
<script setup lang="ts">
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
    border: 1px solid $color-grey-1;
    border-radius: 4px;
    padding: 6px 30px;
    color: $color-grey-1;
    width: 100%;

    &:focus {
      outline: none;
      background-color: $color-grey-5;
      color: white;
    }

    &:hover {
      background-color: $color-grey-5;
      color: $color-white;
    }
  }
}
</style>
