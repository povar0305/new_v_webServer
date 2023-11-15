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
      color: rgba(255, 255, 255, 0.5);
      text-decoration: none;

      &:hover {
        color: white;
      }

      &.router-link-active {
        border-bottom: 1px solid white;
        color: white;
      }
    }
  }
}
</style>
