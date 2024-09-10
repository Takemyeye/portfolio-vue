<template>
  <main>
    <HeaderPanel/>
    <ProjectBlock/>
    <FooterPanel/>
  </main>
</template>

<script>
import HeaderPanel from '@/components/header/header.vue';
import FooterPanel from '@/components/footer/footer.vue';
import ProjectBlock from './unit/projectBlock.vue';

  export default {
    name: 'ProjectPage',
    components: {
      HeaderPanel,
      ProjectBlock,
      FooterPanel
    }
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
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
  }
</style>
