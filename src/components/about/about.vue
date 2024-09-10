<template>
  <main>
    <HeaderPanel/>
    <div class="container">
      <SummaryPanel/>
      <PersonalAttributes/>
    </div>
    <WorkExperiene/>
  </main>
</template>

<script>
import PersonalAttributes from './unit/personal.vue';
import WorkExperiene from './unit/workExperiene.vue';
import HeaderPanel from '../header/header.vue';
import SummaryPanel from './unit/summary.vue';

  export default {
    name: 'AboutPage',
    components: {
      PersonalAttributes,
      WorkExperiene,
      SummaryPanel,
      HeaderPanel,
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
  .container {
    width: 80%;
    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-direction: row;
  }
</style>