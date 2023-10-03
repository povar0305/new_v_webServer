<template>
  <div class="logo">
    <p>Train Control</p>
    <span> 127.0.01</span>
  </div>
</template>
<style lang="scss" scoped>
.logo {
  display: flex;
  color: white;
  align-items: flex-end;
  flex-direction: column;
  width: 100%;
  white-space: nowrap;
  & p {
    font-size: 1.75rem;
    margin-bottom: 0;
    margin-top: 0;
  }
  & span{
    font-size: small;
  }
}
</style>
