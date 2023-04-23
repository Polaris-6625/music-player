<!--<template>-->
<!--  <ul class="infiniteUl" id="customScroll">-->
<!--    <nut-infiniteloading-->
<!--        load-txt="loading"-->
<!--        load-more-txt="没有啦～"-->
<!--        container-id="customScroll"-->
<!--        :use-window="false"-->
<!--        :has-more="customHasMore"-->
<!--        @load-more="customLoadMore"-->
<!--    >-->
<!--      <li class="infiniteLi" v-for="(item, index) in customList" :key="index">{{ item }}</li>-->
<!--    </nut-infiniteloading>-->
<!--  </ul>-->
<!--</template>-->

<!--<script lang="ts">-->
<!--import { ref,reactive,onMounted,toRefs} from 'vue';-->
<!--export default {-->
<!--  setup(props) {-->
<!--    const customHasMore = ref(true);-->
<!--    const data = reactive({-->
<!--      customList: ['']-->
<!--    });-->
<!--    const customLoadMore = done => {-->
<!--      setTimeout(() => {-->
<!--        const curLen = data.customList.length;-->
<!--        for (let i = curLen; i < curLen + 10; i++) {-->
<!--          data.customList.push(`${i}`);-->
<!--        }-->
<!--        if (data.customList.length > 30) customHasMore.value = false;-->
<!--        done()-->
<!--      }, 500);-->
<!--    };-->
<!--    const init = () => {-->
<!--      for (let i = 0; i < 10; i++) {-->
<!--        data.customList.push(`${i}`);-->
<!--      }-->
<!--    }-->
<!--    onMounted(() => {-->
<!--      init()-->
<!--    });-->
<!--    return { customHasMore, customLoadMore,...toRefs(data) };-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style>-->
<!--.infiniteUl {-->
<!--  height: 300px;-->
<!--  width: 100%;-->
<!--  padding: 0;-->
<!--  margin: 0;-->
<!--  overflow-y: auto;-->
<!--  overflow-x: hidden;-->
<!--  background:#eee-->
<!--}-->
<!--.infiniteLi {-->
<!--  margin-top: 10px;-->
<!--  font-size: 14px;-->
<!--  color: rgba(100, 100, 100, 1);-->
<!--  text-align: center;-->
<!--}-->
<!--</style>-->
<template>
  This is Demo page about Tests
</template>
<script setup lang="ts">

</script>
