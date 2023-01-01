<template>
    <nut-navbar
      @on-click-back="back"
      @on-click-title="title"
      @on-click-right="rightClick"
      desc="编辑"
    >
    <template #content>
      <nut-tabs v-model="tab1value" @click="changeTab">
        <nut-tabpane title="首页"></nut-tabpane>
        <nut-tabpane title="查询"> </nut-tabpane>
        <nut-tabpane title="交流"> </nut-tabpane>
        <nut-tabpane title="我的"> </nut-tabpane>
      </nut-tabs>
    </template>
  
      <template #right>
        <nut-icon class="right" name="more-x"></nut-icon>
      </template>
    </nut-navbar>
    <router-view></router-view>
</template>

<!-- <style scoped>
    .title {
        font-size: 24px;
    }
</style> -->
  
<script lang="ts">
  import { ref, onBeforeMount } from 'vue';
  import Content from './content.vue';
  import { useRouter, useRoute } from 'vue-router'
  export default {
    components:{
      Content
    },
    setup() {
      const tab1value = ref(0);
      const router = useRouter();
      const route = useRoute();
      router.push("/index");
      console.log("1");
      const methods = {
        back() {
          alert('Click Back');
        },
        title() {
          alert('Click Title');
        },
        rightClick() {
          alert('Click Right');
        },
        changeTab(tab: any) {
          tab1value.value = tab.paneKey as number;
          console.log(tab1value.value);
          if(tab1value.value == 0) {
              router.push("/index");
          }
          else if(tab1value.value == 1) {
            router.push("/search");
          }
          else if(tab1value.value == 2) {
            router.push("/communicate");
          }
          else {
            router.push("/My");
          }
        },
      };
  
      return {
        tab1value,
        ...methods
      };
    }
  }
</script>
  