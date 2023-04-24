<template>
    <div class="main">
      <h2>
        免费音乐播放器
      </h2>
      <div>
        这是一款完全免费的音乐播放器
      </div>
      <main>
        <div>
          <h3>音乐列表</h3>
          <p class="songTitle" v-for="it in menuList" @click="sendIdTo(it.name)">
            {{it.id}}-{{it.name}}----{{it.author}}
          </p>
        </div>
        <div class="page_index">
          <nut-pagination  v-model="currentPage2" :total-items="125" :show-page-size="3"  @change="changePaging"  force-ellipses/>
        </div>
        <nut-audio
        :url="urlSend"
        :muted="data.muted"
        :autoplay="data.autoplay"
        :loop="true"
        type="progress"
        preload="true"
        @forward="forward"
        @fastBack="fastBack"
        @play="changeStatus"
        @ended="ended"
        @changeProgress="changeProgress"
      >
        <div class="nut-audio-operate-group">
          <nut-audio-operate type="back"><nut-icon name="play-double-back" size="35"></nut-icon></nut-audio-operate>
          <nut-audio-operate type="play"
            ><nut-icon :name="!playing ? 'play-start' : 'play-stop'" size="35"></nut-icon
          ></nut-audio-operate>
          <nut-audio-operate type="forward"><nut-icon name="play-double-forward" size="35"></nut-icon></nut-audio-operate>
        </div>
      </nut-audio>
      </main>
      <nut-animate type='twinkle' :loop='true'>
        <nut-button type='primary'>点击列表中的歌曲名字开始播放</nut-button>
      </nut-animate>
    </div>
  </template>

  <style scoped lang="scss">
    .main {
      display: flex;
      justify-content: center;
      flex-direction: column;
      height: 100%;
      width: 100%;
      text-align: center;
    }
    .songTitle:hover {
      cursor: pointer;
    }
    .page_index {
      text-align: center;
      display: flex;
      justify-content: center;
    }
    * {
      font-family: cursive;
    }
  </style>

  <script setup lang="ts">
    import { ref , reactive ,  getCurrentInstance , onBeforeMount , ComponentInternalInstance , Ref } from "vue";
    import useCurrentInstance from '../useCurrentInstance';
    let { proxy } = useCurrentInstance();
    const data = reactive({
        muted: false,
        autoplay: false
      });
    let currentPage2 = ref(1);
    interface MenuList {
      id:number | null;
      name:string | undefined;
      author:string
    }
    let menuList:Ref<MenuList[]> = ref([{
        id:null,
        name:'',
        author:''
    }]);
    let playOrnot = ref(false);
    //
    function alertTitle():void{
        alert("点击列表中的歌曲名字开始播放");
    }
    let bURL = "http://127.0.0.1:8083";
    let realURL = "http://polaris.lyyfsq.club:8083";
    function pageChange(value: number):void {
      console.log(value);
    }
    const playing = ref(false);

    const fastBack = () => {
        console.log('倒退');
  };

      const forward = (progress:any) => {
        console.log('快进', '当前时间' + progress);
      };

      const changeStatus = (status:any) => {
        console.log('当前播放状态', status);
        playing.value = status;
        data.autoplay = false;
      };

      const ended = () => {
        console.log('播放结束');
      };

      const changeProgress = (val:any) => {
        console.log('改变进度条', val);
      };
    //
    function changePaging(value:number):void {
      // proxy.defaults.withCredentials = true;
      let val_flag = value.toString();
      let param = new URLSearchParams();
      param.append("val_flag",val_flag);
      //调用方法
      proxy.$http
        .post(realURL+"/getPaging",param)
        .then(function(res:any):void {
          console.log(res.data);
          menuList.value = res.data;
          console.log(menuList);
        })
        .catch(function(error:any) {
          console.log(error);
        });
    }
    onBeforeMount(() => {
      // proxy.defaults.withCredentials = true;
      let param = new URLSearchParams();
      param.append("val_flag","1");
      //调用方法
      proxy.$http
        .post(realURL+"/getPaging",param)
        .then(function(res:any):void {
          console.log(res.data);
          menuList.value = res.data;
          console.log(menuList);
        })
        .catch(function(error:any) {
          console.log(error);
        });
    });
    let urlSend:Ref<string> = ref("");
    let audioRef = ref(null)
    function sendIdTo(n:string|undefined):void {
      data.autoplay = false;
      console.log(n);
      urlSend.value = "";
      urlSend.value = urlSend.value + realURL + "/music?musicName=" + n;
      console.log(urlSend.value);
      // (audioRef.value as any).load();
      // (audioRef.value as any).play();
      changeStatus(true);
      changeStatus(false);
      changeStatus(true);
      data.autoplay = true;
    }

  </script>
