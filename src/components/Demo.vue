<template>
  <div>
    This is Demo page
  </div>
</template>

<script setup lang="ts">
import {useUserStore} from "../state/demo";

const demo = useUserStore();
demo.changePermissions(18);
demo.changeToken("xxx");
console.log(demo.$state.age);
console.log(demo.$state.name);
</script>

<style scoped>

</style>
