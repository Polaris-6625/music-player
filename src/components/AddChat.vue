<template>
  <div class="main">
    <nut-textarea class="inputArea" v-model="value" />
  </div>
  <div class="footer" style="margin-top: 1%">
    <nut-button plain type="danger" @click="changeRouterTo">返回</nut-button>
    <nut-button type="primary" @click="commit">发布</nut-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from "../state/store";
import router from "../router";

export default defineComponent({
  beforeRouteEnter(to, from, next) {
    // 需要处理的逻辑
    const store = useStore();
    if (store.token === "") {
      alert("请先登录");
      router.push("/Login");
    }
    else {
      next();
    }
  }
});
</script>

<script setup lang="ts">
// @ts-nocheck
import {ref} from "vue";
import {useStore} from "../state/store";
import useCurrentInstance from "../useCurrentInstance";
import {useRouter} from "vue-router";
let store = useStore();
const router = useRouter();
let value = ref("");
let { proxy } = useCurrentInstance();
function commit():void {
  let params = new URLSearchParams();
  let token = store.token;
  params.append("content",value.value);
  // params.append("writer",)
  params.append("token",store.token);
  params.append("writer",store.root);
  proxy.$http.post("http://polaris,lyyfsq.club:8086/addDaily",params).then((resp)=>{
    if (resp.data === "success") {
      alert("发布成功!");
    }
    else {
      alert("发布失败，出现异常");
    }
  })
}
function changeRouterTo() {
  console.log("change");
  router.push("/communicate");
}
</script>

<style scoped lang="scss">
.main , .footer {
  display: flex;
  justify-content: center;
}
.inputArea {
  width: 70%;
  text-align: center;
  height: 40vh;
  box-shadow: 10px 10px 5px #888888;
}
</style>
