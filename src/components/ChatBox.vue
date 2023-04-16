<template>
  <div class="Main">
    <div class="head">
      <nut-avatar style="margin-top: 3%" size="small">
        <img src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
      </nut-avatar>
      <h3 class="username">{{props.ChatBox_username}}</h3>
    </div>
    <div class="content">
      <nut-textarea readonly v-model="props.ChatBox_content"/>
    </div>
    <div class="footer">
<!--      <nut-icon class="SFollow" name="star" size="large"></nut-icon>-->
      <nut-icon class="message" name="message" size="large" style="margin-top: 1%"></nut-icon>
      <div class="fabulous">
        <nut-icon name="fabulous" size="large" olor="#FF4A4F" style="margin-top: 1%"></nut-icon>
        {{props.ChatBox_praise}}
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  ChatBox_username:{
    type:String,
    default:"无"
  },
  ChatBox_content:{
    type:String,
    default:"无"
  },
  ChatBox_praise: {
    type:Number,
    default:0
  }
});
</script>

<style scoped lang="scss">
@mixin setFlexPos($pos) {
  justify-content: $pos;
  margin-left: auto;
  margin-top: 1%;
  &:hover {
    cursor: pointer;
  }
}
.Main {
  width: 75vh;
  height: 18vw;
  background-color: lightslategrey;
  border-radius: 2%;
}
.content {
  width: 96%;
  border-radius: 4%;
  height: 60%;
  margin: 0 auto;
  background-color: white;
}
.footer {
  display: flex;
}
.SFollow {
  @include setFlexPos(flex-start);
}
.message {
  @include setFlexPos(center);
}
.fabulous {
  @include setFlexPos(flex-end);
}
.head {
  margin-left: 4%;
  display: flex;
}
.username {
  margin-left: 1%;
}
</style>
