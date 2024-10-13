<template>
  <div class="featured">
    <h1>Featured Projects</h1>
    <div class="project-container">
      <ProjectUnit 
        :link="`projects`"
        :img="`https://firebasestorage.googleapis.com/v0/b/portfolio-vue-d6eb1.appspot.com/o/download.png?alt=media&token=ef06da97-15eb-42c8-8e06-ee3b836c983e`"
        text="Soul Swap" 
        description="A full-stack web app using Vue, Vuex, and Express.js for a high-performance online store, offering a curated selection of unique artworks tailored to individual tastes."
      />
      <ProjectUnit 
        :link="`projects`"
        :img="`https://firebasestorage.googleapis.com/v0/b/portfolio-vue-d6eb1.appspot.com/o/belance.png?alt=media&token=4448f8e7-e2fa-415d-9664-52ad8fd70118`"
        text="Belance" 
        description="A web app built with React, Scss, and Redux for client communication and website creation, featuring a modern design and a template gallery for inspiration."
      />
      <ProjectUnit 
        :link="`projects`"
        :img="`https://firebasestorage.googleapis.com/v0/b/portfolio-vue-d6eb1.appspot.com/o/Impactium.jpg?alt=media&token=f31c8328-4db5-40b0-93eb-88bfbf0c9b59`"
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