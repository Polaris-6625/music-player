<template>
  <div class="main">
    <h2>
      安卓音乐播放器
    </h2>
    <div>
      这是一款完全免费的音乐播放器
    </div>
    <main>
      <div>
        <h3>音乐列表</h3>
        <p v-for="it in menuList" @click="sendIdTo(it.name)">
          {{it.id}}-{{it.name}}----{{it.author}}
        </p>
      </div>
      <audio controls ref="audioRef">
        <source id="source" :src='urlSend' type="audio/mpeg">
      </audio>
    </main>
  </div>
</template>

<style scoped>
  .main {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
</style>

<script setup lang="ts">
  import { ref , reactive ,  getCurrentInstance , onBeforeMount , ComponentInternalInstance , Ref } from "vue";
  import useCurrentInstance from './useCurrentInstance';
  let { proxy } = useCurrentInstance();
  interface MenuList {
    id?:number;
    name?:string | undefined;
    author?:string
  }
  let menuList:Ref<MenuList[]> = ref([{}]);
  
  onBeforeMount(() => {
    //调用方法
    proxy.$http
      .get("http://localhost:8083/musicList")
      .then(function(res):void {
        console.log(res.data);
        menuList.value = res.data;
        console.log(menuList);
      })
      .catch(function(error) {
        console.log(error);
      });
  });
  let urlSend:Ref<string> = ref("");
  let audioRef = ref(null)
  function sendIdTo(n:string|undefined):void {
    console.log(n);
    urlSend.value = "";
    urlSend.value = urlSend.value + "http://localhost:8083/music?musicName=" + n;
    console.log(urlSend.value);
    (audioRef.value as any).load();
    (audioRef.value as any).play();
  }
  
</script>