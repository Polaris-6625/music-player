<template>
  <nut-cell :title="root.value" desc="用户账号">
    <template v-slot:icon>
<!--      <img-->
<!--          style="width:50px;height: 50px;"-->
<!--          src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"-->
<!--      />-->
      <nut-avatar>{{ username.value }}</nut-avatar>
    </template>realURL
  </nut-cell>
  <nut-cell class="hover" title="我的点赞" desc="前往我的点赞记录" @click="changeRouter('/MyInf/MyPraise')">
    <template v-slot:icon>
      <img
          style="width:20px;height: 20px;"
          src="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"
      />
    </template>
  </nut-cell>
  <nut-cell title="历史消息" desc="前往我的历史" @click="changeRouter('/MyInf/MyHistory')">
    <template v-slot:icon>
      <img
          style="width:20px;height: 20px;"
          src="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"
      />
    </template>
  </nut-cell>
  <nut-cell title="歌曲上传" desc="前往上传中心" @click="changeRouter('/MyInf/MusicPush')">
    <template v-slot:icon>
      <img
          style="width:20px;height: 20px;"
          src="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"
      />
    </template>
  </nut-cell>
  <nut-cell title="我的认证" desc="前往上传者认证中心" @click="changeRouter('/MyInf/Certification')">
    <template v-slot:icon>
      <img
          style="width:20px;height: 20px;"
          src="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"
      />
    </template>
  </nut-cell>
</template>

<style scoped lang="scss">
.hover:hover {
  cursor: pointer;
}
</style>

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
import { useRouter } from 'vue-router';
import useCurrentInstance from "../useCurrentInstance";
import {onBeforeMount, ref} from "vue";
import {useStore} from "../state/store";
let { proxy } = useCurrentInstance();
const router = useRouter();
let Infs = ref([]);
let root = ref("null");
let username = ref("null");
let store = useStore();
function changeRouter(path:any):void {
  router.push(path);
}
onBeforeMount(()=>{
  root.value = store.root;
  username.value = store.username;
})
</script>
