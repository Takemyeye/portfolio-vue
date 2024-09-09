<template>
  <div class="featured">
    <h1>Featured Projects</h1>
    <div class="project-container">
      <ProjectUnit 
        :img="`img/soulSwap.png`"
        text="Soul Swap" 
        description="A full-stack web app using Vue, Vuex, and Express.js for a high-performance online store, offering a curated selection of unique artworks tailored to individual tastes."
      />
      <ProjectUnit 
        :img="`img/belance.png`"
        text="Belance" 
        description="A web app built with React, Scss, and Redux for client communication and website creation, featuring a modern design and a template gallery for inspiration."
      />
      <ProjectUnit 
        :img="`img/impactium.jpg`"
        text="Impactium" 
        description="A web app built using Next.js, PostgreSQL, and Prisma. The company organizes Dota 2 tournaments, offering a platform for teams and players to compete in challenging events."
      />
    </div>
  </div>
</template>

<script> 
import ProjectUnit from './component/project.vue'

  export default {
    name: 'FeaturedBlock',
    components: {
      ProjectUnit
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
  
  @media all and (max-width: 768px) {
    .project-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media all and (max-width: 570px) {
    .project-container {
      grid-template-columns: repeat(1, 1fr);
    }
  }
</style>