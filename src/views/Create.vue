<template>
  <div class="round">
    <nut-icon name="edit" size="large" olor="#FF4A4F" style="margin-top: 1%"></nut-icon>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@import "../theme-chalk/Create.scss";
@media screen and (min-width: 1000px) {
  .round {
    position: fixed;
    right: 20%;
    bottom: 6%;
    width: 5vw;
    height: 5vw;
    border-radius: 50%;
    background-color: deepskyblue;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
