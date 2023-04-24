<template>
  <div class="main" id="customScroll" @scroll="ScrollFun">
    <div v-for="(i,index) in ChatBoxs">
      <ChatBox class="ChatBox" :ChatBox_username="i.writer" :ChatBox_content="i.content" :ChatBox_praise="i.count"></ChatBox>
    </div>
    <Create @click="changeTab('/AddChat')"></Create>
  </div>
  <div class="page_index">
    <nut-pagination  v-model="currentPage2" :total-items="125" :show-page-size="3"  @change="changePaging"  force-ellipses/>
  </div>
</template>

<script setup lang="ts">
// @ts-nocheck
import ChatBox from "../components/ChatBox.vue";
import useCurrentInstance from "../useCurrentInstance";
import {onBeforeMount, ref} from "vue";
import Create from "./Create.vue";
import { useRouter, useRoute } from 'vue-router';
let { proxy } = useCurrentInstance();
let currentPage2 = ref(1);
let bURL = "http://127.0.0.1:8086";
let realURL = "http://polaris.lyyfsq.club:8086";
let bUR_2 = "http://127.0.0.1:8083";
let realURL_2 = "http://polaris.lyyfsq.club:8083";
let ChatBox_username = ref("");
let ChatBox_content = ref("");
let ChatBox_praise = ref(0);
const customHasMore = ref(true);
let ChatBoxs = ref([]);
let flag = 2;
onBeforeMount(()=>{
  let param = new URLSearchParams();
  param.append("val_flag","1");
  proxy.$http.post(realURL+"/daily",param).then((resp)=>{
    ChatBoxs.value = resp.data;
    console.log(ChatBoxs)
  })
})
function changePaging() {
  let param = new URLSearchParams();
  param.append("val_flag",String(flag));
  proxy.$http.post(realURL+"/daily",param).then((resp)=>{
    ChatBoxs.value = resp.data;
    console.log(ChatBoxs)
  });
  flag++;
}
function ScrollFun(element:any) {
  // console.log(element.scrollHeight-element.scrollTop)
  // console.log(element.clientHeight);
  // if (element.scrollHeight-element.scrollTop === element.clientHeight) {
  //   console.log("滚了")
  // }
}
const router = useRouter();
function changeTab(target:string):void {
  router.push("/Communication"+target);
}
</script>

<style scoped lang="scss">
@import "../theme-chalk/Communication.scss";
@media screen and (min-width: 1000px) {
  .page_index {
    text-align: center;
    display: flex;
    justify-content: center;
  }
  .main {
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    //overflow: scroll;
    overflow-x: hidden;
  }
  .ChatBox {
    margin-bottom: 1%;
  }
}
</style>
