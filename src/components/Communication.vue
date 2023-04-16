<template>
  <Main class="main">
    <ChatBox class="ChatBox" ChatBox_username="陈时" ChatBox_content="我是傻鸟" ChatBox_praise="10"></ChatBox>
    <ChatBox class="ChatBox" ChatBox_username="陈时" ChatBox_content="我是傻鸟" ChatBox_praise="10"></ChatBox>
  </Main>
</template>

<script setup lang="ts">
import ChatBox from "./ChatBox.vue";
</script>

<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.ChatBox {
  margin-bottom: 1%;
 }
</style>
