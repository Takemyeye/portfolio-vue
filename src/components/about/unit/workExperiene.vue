<template>
  <div class="work">
    <h1>Work Experience</h1>
    <div class="container">
      <ExperienceData 
        :data="`December 2023 - May 2024`"
        :position="`Frontend Developer at DataCode srl`"
        :text="`Designed and maintained dynamic web applications utilizing React.js and Node.js. Focused on enhancing user interfaces for optimal performance, including fast load times and responsiveness. Applied TypeScript and other development best practices to ensure robust, maintainable code. Worked closely with a diverse team to address technical challenges and integrate new features. Additionally, ensuring compatibility across different browsers. Actively participated in code reviews and provided guidance to junior team members, promoting a collaborative and developmental work environment.`"
      />
      <ExperienceData
        :data="`2023 - 2025`"
        :position="`Freelance Full Stack Developer`"
        :text="`Worked on diverse client projects as a freelance full stack developer. I build and maintain web applications and APIs, utilizing a variety of technologies such as Js, Ts, Rect, Html Vue, Nuxt.js, PHP, and MongoDb. My responsibilities include designing scalable architecture, implementing responsive interfaces, and ensuring optimal performance across different platforms. I also collaborate with clients to understand their requirements, deliver tailored solutions, and provide ongoing support to ensure the successful deployment and operation of their applications.`"
      />
      <ExperienceData
        :data="`March 2024 - August 2024`"
        :position="`Frontend Developer at Impactium`"
        :text="`Spearheaded the development of responsive and visually appealing user interfaces, adhering to the highest UX/UI standards. Created reusable components and modules, which streamlined the development workflow and facilitated easier maintenance. Improved code architecture by incorporating TypeScript, leading to fewer errors and enhanced application stability. Additionally, collaborated closely with cross-functional teams to ensure seamless integration of frontend and backend features.`"
        />
        <ExperienceData
          :data="`December 2024 - Aprile 2025`"
          :position="`Full Stack Developer at MeWay`"
          :text="`Worked on web and mobile development, gaining experience in building scalable solutions. 
          Improved TypeScript skills, mastered TypeORM, and expanded backend expertise with Python and Flask. 
          Developed APIs, optimized databases, and worked with FFmpeg for audio processing and radio tower integration. 
          Became a key team member by solving complex tasks efficiently and adapting well to both clients and colleagues.`"
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
