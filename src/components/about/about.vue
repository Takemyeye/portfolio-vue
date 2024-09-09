<template>
  <main>
    <HeaderPanel/>
  </main>
</template>

<script>
import HeaderPanel from '../header/header.vue'

  export default {
    name: 'AboutPage',
    components: {
      HeaderPanel,
    }
  }
</script>

<style scoped>
  main {
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
  }
</style>