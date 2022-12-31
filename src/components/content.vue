<template #content>
    <nut-tabs v-model="tab1value" @click="changeTab">
      <nut-tabpane title="首页"> </nut-tabpane>
      <nut-tabpane title="查询"> </nut-tabpane>
      <nut-tabpane title="交流"> </nut-tabpane>
      <nut-tabpane title="我的"> </nut-tabpane>
    </nut-tabs>
  </template>

  <script lang="ts" setup>
    import { ref } from 'vue';
    
    const tab1value = ref(0);
    function back() {
        alert('Click Back');
    }

    function changeTab(tab:any):void {
        tab1value.value = tab.paneKey as number;
    }
  
</script>