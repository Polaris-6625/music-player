<template>
    <nut-navbar
      @on-click-back="back"
      @on-click-title="title"
      @on-click-right="rightClick"
      desc="编辑"
    >
    <template #content>
      <nut-tabs v-model="tab1value" @click="changeTab">
        <nut-tabpane title="首页"> </nut-tabpane>
        <nut-tabpane title="查询"> </nut-tabpane>
        <nut-tabpane title="交流"> </nut-tabpane>
        <nut-tabpane title="我的"> </nut-tabpane>
      </nut-tabs>
    </template>
  
      <template #right>
        <nut-icon class="right" name="more-x"></nut-icon>
      </template>
    </nut-navbar>
</template>

<!-- <style scoped>
    .title {
        font-size: 24px;
    }
</style> -->
  
<script lang="ts">
  import { ref } from 'vue';
  import Content from './content.vue'
  export default {
    components:{
      Content
    },
    setup() {
      const tab1value = ref(0);
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
        },
      };
  
      return {
        tab1value,
        ...methods
      };
    }
  }
</script>
  