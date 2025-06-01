<template>
  <div class="work">
    <h1>Work Experience</h1>
    <div class="container">
      <ExperienceData 
        :data="`June 2023 - May 2024`"
        :position="`Frontend Developer at DataCode srl`"
        :text="`Designed and maintained high-performance web applications using React.js and Node.js. Focused on optimizing UI responsiveness and load time. Leveraged TypeScript to build modular and reliable code. Collaborated with cross-functional teams, contributed to architectural decisions, and actively mentored junior developers. Played a key role in improving frontend workflows and ensuring browser compatibility.`"
      />
      
      <ExperienceData
        :data="`2022 - 2025`"
        :position="`Freelance Full-Stack Developer`"
        :text="`Delivered full-cycle web solutions for various clients using React.js, Vue.js, Nuxt.js, TypeScript, PHP, and MongoDB. Designed scalable architectures and developed responsive, maintainable interfaces. Took full ownership of projects, working closely with clients to understand their needs, deploy stable applications, and provide long-term support. Known for adaptability and fast integration into new domains.`"
      />
      
      <ExperienceData
        :data="`March 2024 - August 2024`"
        :position="`Full-Stack Developer at Impactium`"
        :text="`Led UI development efforts, creating elegant, responsive interfaces aligned with UX best practices. Built reusable components to accelerate development and simplify maintenance. Enhanced project stability through consistent use of TypeScript. Contributed to improved team productivity through proactive communication and attention to detail.`"
      />
      
      <ExperienceData
        :data="`December 2024 - April 2025`"
        :position="`Full-Stack Developer at MeWay`"
        :text="`Delivered multiple projects as a full stack developer, focusing on Python, TypeScript, Node.js, and microservices architecture. Built and integrated APIs (ChatGPT, ElevenLabs, Google, Hugging Face), improved database performance, and implemented task queues with Bull.js. Gained hands-on experience with FFmpeg for media processing. Demonstrated strong adaptability, consistently solving complex challenges and contributing to overall team growth and success.`"
      />
    </div>
  </div>
</template>

<script>
import ExperienceData from './../../unit/component/experience.vue';

  export default {
    name: 'WorkExperiene',
    components: {
      ExperienceData
    }
  }
</script>

<style scoped>
  .work {
    width: 80%;
    padding: 5rem 0;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
}

  h1 {
    width: 100%;
    text-align: center;
  }

.container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  align-items: start;
  gap: 8rem;
}

@media all and ( max-width: 1024px ) {
    .container {
      gap: 4rem;
    }
  }

  @media all and ( max-width: 1024px ) {
    .container {
      grid-template-columns: repeat(1, 1fr);
      gap: 4rem;
    }
  }

</style>
