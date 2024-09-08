<template>
  <div class="topBar">
    <div class="left-panel">
        <div class="experience">
          <h5>1 year of experience</h5>
        </div>
        <h1>Oleh Bratok</h1>
        <h3>Full Stack Developer</h3>
      </div>
    <div class="right-panel">
      <img src="" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TopBar'
  }
</script>

<style scoped>

  .topBar {
    width: 80%;
    height: 40vh;
    padding: 5rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .left-panel, .right-panel {
    width: 40%;
    height: 100%;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }

  .experience {
    padding: 4px 8px;
    border-radius: 8px;
    background-color: rgba(128, 128, 128, 0.473);
  }
  h3, h5{
    font-weight: 400;
    color: var(--color-002);
  }
  h1 {
    font-size: clamp(26px, 3vw, 50px);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
</style>