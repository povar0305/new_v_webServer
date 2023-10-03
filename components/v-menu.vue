<template>
  <header>
    <nav>
      <ul>
        <li><NuxtLink to="/" :class="{active:route.name==''}">Главная</NuxtLink></li>
        <li><NuxtLink to="/viewing" :class="{active:route.name=='viewing'}">Просмотр</NuxtLink></li>
        <li><NuxtLink to="/archive" :class="{active:route.name=='archive'}">Архив</NuxtLink></li>
        <li><NuxtLink to="/settings" :class="{active:route.name=='settings'}">Настройки</NuxtLink></li>
        <li><vLogo></vLogo></li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import vLogo from "./v-logo.vue";
const route = useRoute()

</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  & li {
    margin-right: 10px;
    & a {
      color: rgba(255, 255, 255, 0.5);
      text-decoration: none;
      &:hover {
        color: white;
      }
      &.active{
        border-bottom: 1px solid white;
        color: white;
      }
    }
  }
}
</style>
