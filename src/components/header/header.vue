<template>
  <header>
    <div class="left-header">
      <h3><font-awesome-icon icon="code" /></h3>
      <h3>Oleh Bratok</h3>
    </div>
    <div class="right-header">
      <h5>About</h5>
      <h5>Projects</h5>
      <h5>Contact</h5>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'HeaderPanel'
  }
</script>

<style scoped>
  header {
    position: sticky;
    left: 0;
    top: 0;
    width: 100%;
    height: 10vh;
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