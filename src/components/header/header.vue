<template>
  <header>
    <router-link to="/">
      <div class="left-header">
        <h3><font-awesome-icon icon="code" /></h3>
        <h3>Oleh Bratok</h3>
      </div>
    </router-link>
    <div class="right-header">
      <router-link to="/about">
        <h5>About</h5>
      </router-link>
      <router-link to="/projects">
        <h5>Projects</h5>
      </router-link>
      <h5 @click="toggleDropPanel" style="cursor: pointer;">
        Contact
        <DropPanel v-if="showDropPanel"/>
      </h5>
    </div>
  </header>
</template>

<script>
import DropPanel from './dropPanel.vue';

export default {
  name: 'HeaderPanel',
  components: {
    DropPanel
  },
  data() {
    return {
      showDropPanel: false
    }
  },
  methods: {
    toggleDropPanel() {
      this.showDropPanel = !this.showDropPanel;
    }
  }
}
</script>

<style scoped>
  header {
    position: sticky;
    left: 0;
    top: 0;
    width: 100%;
    padding: 1.5rem 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 30%;
    font-optical-sizing: var(--text-font-optical);
    font-family: var(--text-font-family); 
    font-weight: var(--text-font-weight);
    font-style: var(--text-font-weight);
    backdrop-filter: blur(6px);
    background-color: rgba(15, 15, 15, 0.5);
    z-index: 1000;
  }

  .left-header, .right-header {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 1rem;
    
  }

  h5 {
    position: relative;
    transition: 0.3s ease;
  }
  h5::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0%;
    height: 1px;
  }

  h5:hover::after {
    background-color: var(--color-000);
    width: 100%;
  }

  @media all and ( max-width: 768px ) {
    header {
      gap: 5%;
    }
  }
</style>