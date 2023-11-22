<template>
  <header>
    <nav>
      <ul>
        <li v-for="item in props.routerName" :key="item.text">
          <nuxt-link v-tooltip="item.desc" :to="'/' + item.linkTo"
            >{{ item.text }}
          </nuxt-link>
        </li>
        <li>
          <v-logo />
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import VLogo from "./v-logo.vue";

const route = useRoute();

interface Props {
  routerName: {
    linkTo: string;
    text: string;
    desc: string;
  }[];
}
const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & li {
    margin-right: 15px;
    & a {
      color: $color-grey-1;
      text-decoration: none;
      &:hover {
        color: $color-white;
      }
      &.router-link-active {
        border-bottom: 1px solid $color-white;
        color: $color-white;
      }
    }
  }
}
</style>
