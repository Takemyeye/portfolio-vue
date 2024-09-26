<template>
  <main>
    <h1>My Projects</h1>
    <div class="containerProject">
      <ProjectUnit 
        :showAroow="false"
        :btn="`Go to Website`"
        :link="`https://soulswap.netlify.app/`"
        :img="`img/soulSwap.png`"
        text="Soul Swap" 
        description="A full-stack web app using Vue, Vuex, and Express.js for a high-performance online store, offering a curated selection of unique artworks tailored to individual tastes."
      />
      <ProjectUnit 
        :showAroow="false"
        :btn="`Go to Website`"
        :link="`https://belance.netlify.app/`"
        :img="`img/belance.png`"
        text="Belance" 
        description="A web app built with React, Scss, and Redux for client communication and website creation, featuring a modern design and a template gallery for inspiration."
      />
      <ProjectUnit 
        :showAroow="false"
        :btn="`Go to Website`"
        :link="`https://impactium.fun/`"
        :img="`img/impactium.jpg`"
        text="Impactium" 
        description="A web app built using Next.js, PostgreSQL, and Prisma. The company organizes Dota 2 tournaments, offering a platform for teams and players to compete in challenging events."
      />
    </div>
  </main>
</template>

<script>
import ProjectUnit from '@/components/unit/component/project.vue';

  export default {
    name: 'ProjectsBlock',
    components: {
      ProjectUnit
    }
  }
</script>

<style scoped>
  main {
    width: 80%;
    min-height: 90vh;
    padding-bottom: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
}

.containerProject {
  width: 80%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 1rem;
}

@media all and ( max-width: 1024px) {
  .containerProject {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media all and ( max-width: 600px) {
  .containerProject {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
