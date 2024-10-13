<template>
  <main>
    <h1>My Projects</h1>
    <div class="containerProject">
      <ProjectUnit 
        :showAroow="false"
        :btn="`Go to Website`"
        :link="`https://ss-vue.vercel.app/`"
        :img="`https://firebasestorage.googleapis.com/v0/b/portfolio-vue-d6eb1.appspot.com/o/download.png?alt=media&token=ef06da97-15eb-42c8-8e06-ee3b836c983e`"
        text="Soul Swap" 
        description="A full-stack web app using Vue, Vuex, and Express.js for a high-performance online store, offering a curated selection of unique artworks tailored to individual tastes."
      />
      <ProjectUnit 
        :showAroow="false"
        :btn="`Go to Website`"
        :link="`https://belance.netlify.app/`"
        :img="`https://firebasestorage.googleapis.com/v0/b/portfolio-vue-d6eb1.appspot.com/o/belance.png?alt=media&token=4448f8e7-e2fa-415d-9664-52ad8fd70118`"
        text="Belance" 
        description="A web app built with React, Scss, and Redux for client communication and website creation, featuring a modern design and a template gallery for inspiration."
      />
      <ProjectUnit 
        :showAroow="false"
        :btn="`Go to Website`"
        :link="`https://impactium.fun/`"
        :img="`https://firebasestorage.googleapis.com/v0/b/portfolio-vue-d6eb1.appspot.com/o/Impactium.jpg?alt=media&token=f31c8328-4db5-40b0-93eb-88bfbf0c9b59`"
        text="Impactium" 
        description="A web app built using Next.js, PostgreSQL, and Prisma. The company organizes Dota 2 tournaments, offering a platform for teams and players to compete in challenging events."
      />
      <ProjectUnit 
        :showAroow="false"
        :btn="`Go to Website`"
        :link="`https://belance-compress.netlify.app/`"
        :img="`https://firebasestorage.googleapis.com/v0/b/portfolio-vue-d6eb1.appspot.com/o/compress.png?alt=media&token=9fd41a69-8e58-4b4a-a97a-8eb74a574ecc`"
        text="Belance-Compress" 
        description="A web app designed by Belance for compressing photos and videos. It allows users to easily reduce file sizes without losing quality, optimizing media for faster sharing and storage."
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
  padding: 2rem 0;
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
