<template>
  <div class="featured">
    <h1>Featured Projects</h1>
    <div class="project-container">
      <div class="project">
        <img src="" alt="">
        <div class="text">
          <h3>Project 1</h3>
          <h5>A web application built with React and Next.js, featuring a modern and responsive design.</h5>
          <UiButton/>
        </div>
      </div>
      <div class="project">
        <img src="" alt="">
        <div class="text">
          <h3>Project 1</h3>
          <h5>A web application built with React and Next.js, featuring a modern and responsive design.</h5>
          <UiButton/>
        </div>
      </div>
      <div class="project">
        <img src="" alt="">
        <div class="text">
          <h3>Project 1</h3>
          <h5>A web application built with React and Next.js, featuring a modern and responsive design.</h5>
          <UiButton/>
        </div>
      </div>
    </div>
  </div>
</template>

<script> 
import UiButton from '@/ui/btn.vue'

  export default {
    name: 'FeaturedBlock',
    components: {
      UiButton,
    }
  }
</script>

<style scoped>
  .featured {
    width: 80%;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    padding: 5rem 0;
    gap: 1rem;
  }
  .project-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
  }
  .project, .text {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }
</style>