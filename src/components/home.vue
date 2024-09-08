<template> 
  <main>
    <HeaderPanel/>
  </main>
</template>

<script>
import HeaderPanel from './header/header.vue';

  export default {
    name: 'HomePage',
    components: {
      HeaderPanel
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