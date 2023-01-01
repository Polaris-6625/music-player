<template>
    <div class="Main">
        <h1>查询页面</h1>
        <nut-searchbar v-model="searchValue" background="linear-gradient(to right, #9866F0, #EB4D50)" input-background="#fff"> 
            <template v-slot:rightout>
                <nut-button plain  type="primary" @click="searchList(searchValue)">
                    搜索
                </nut-button>
              </template>
        </nut-searchbar>
        <div>
            <p v-for=" i in music" @click="sendIdTo(i.name)">{{i.id}}--{{i.name}}----{{i.author}}</p>
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
        <!-- <Progress></Progress> -->
    </div>    
</template>
<script lang="ts" setup>
    import { ref , toRefs, reactive , Ref } from 'vue';
    import useCurrentInstance from '../useCurrentInstance';
    import  Progress  from './Progress.vue';
    let { proxy } = useCurrentInstance();
    let searchValue:Ref<string> = ref("");
    let bURL = "http://127.0.0.1:8084";
    let realURL = "http://polaris.lyyfsq.club:8084";
    let bUR_2 = "http://127.0.0.1:8083";
    let realURL_2 = "http://polaris.lyyfsq.club:8083";
    interface Music {
        id:number | null;
        name:string;
        author:string;
    }
    let music:Ref<Music[]> = ref([{
        id:null,
        name:'',
        author:''
    }]); 
    const data = reactive({
        muted: false,
        autoplay: false
      });
    function searchList(flag:string):void{
        let param = new URLSearchParams();
        param.append("flag",flag);
        proxy.$http.post(realURL+"/searchMusic",param)
        .then((resp)=>{
            music.value = resp.data;
        })
        .catch(function(error:any) {
          console.log(error);
        });
    }

    // 
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
    
    let urlSend:Ref<string> = ref("");
    let audioRef = ref(null)
    function sendIdTo(n:string|undefined):void {
      data.autoplay = false;
      console.log(n);
      urlSend.value = "";
      urlSend.value = urlSend.value + realURL_2 + "/music?musicName=" + n;
      console.log(urlSend.value);
      // (audioRef.value as any).load();
      // (audioRef.value as any).play();
      changeStatus(true);
      changeStatus(false);
      changeStatus(true);
      data.autoplay = true;
    }
</script>
  
<style scoped>
    .Main {
        text-align: center;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
</style>