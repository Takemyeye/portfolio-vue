<template>
  <div class="work">
    <h1>Work Experience</h1>
    <div class="container">
      <ExperienceData 
        :data="`From 02.2022 to 09.2022`"
        :position="`Frontend Developer at Impactium`"
        :text="`Developed and maintained high-performance web applications for a startup building a tournament management platform for popular esports titles like CS:GO, Dota 2, and League of Legends. Enhanced frontend productivity by optimizing component architecture and streamlining workflows. Implemented advanced image and media loading strategies, reducing load times by up to 40% and improving the overall gaming event experience for users. Leveraged TypeScript to ensure scalable, maintainable codebases.`"
      />
      <ExperienceData 
        :data="`From 09.2022 to 01.2024`"
        :position="`Full-Stack Developer at DataCode srl`"
        :text="`Designed and maintained high-performance web applications using React.js and Node.js. Improved frontend productivity by streamlining component architecture and workflows. Optimized image and media loading strategies, reducing load times by up to 40% and enhancing overall user experience. Leveraged TypeScript to build scalable and maintainable code. Contributed to system architecture and mentored junior developers while ensuring full cross-browser compatibility.`"
      />
      <ExperienceData
        :data="`From 01.2024 to 12.2024`"
        :position="`Full-Stack Developer at MeWay`"
        :text="`Delivered multiple projects as a full stack developer, focusing on Python, TypeScript, Node.js, and microservices architecture. Built and integrated APIs (ChatGPT, ElevenLabs, Google, Hugging Face), improved database performance, and implemented task queues with Bull.js. Gained hands-on experience with FFmpeg for media processing. Demonstrated strong adaptability, consistently solving complex challenges and contributing to overall team growth and success.`"
      />
      <ExperienceData
        :data="`From 01.2025 to 12.2025`"
        :position="`Frontend Developer at Mentat`"
        :text="`Worked as a Frontend Developer on the Gulp web UI — a React and TypeScript application. Developed and maintained UI components using Shadcn/UI, implemented user authentication screens, session management, and operation workflows. Focused on creating responsive, modular, and high-performance interfaces, integrating with backend APIs, and improving overall usability and developer experience.`"
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
