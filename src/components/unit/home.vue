<template> 
  <main>
    <HeaderPanel/>
    <TopBar/>
  </main>
</template>

<script>
import HeaderPanel from '@/components/header/header.vue';
import TopBar from './topBar.vue'
  export default {
    name: 'HomePage',
    components: {
      HeaderPanel,
      TopBar,
    },
  }
</script>

<style scoped>
  main {
    font-family: var(--text-font-family); 
    font-optical-sizing: var(--text-font-optical);
    font-weight: var(--text-font-weight);
    font-style: var(--text-font-weight);
    width: 100%;
    min-height: 100vh;
    background-color: var(--color-001);
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
  }
</style>