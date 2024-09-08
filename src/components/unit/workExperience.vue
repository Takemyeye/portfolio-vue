<template>
  <div class="work">
    <h1>Work Experience</h1>
    <ExperienceData
      :data="`2023 - Present`"
      :position="`Freelance Full Stack Developer`"
      :text="`DWorked on various client projects, building web applications and APIs using a range of technologies, including Vue, Nuxt.js, PHP, and MySQL.`"
    />
    <ExperienceData
      :data="`December 2023 - May 2024`"
      :position="`Full Stack Developer at DataCode srl`"
      :text="`Developed and maintained complex web applications using React, Next.js, Node.js, and MongoDB. Collaborated with cross-functional teams to deliver high-quality software solutions.`"
    />
    <ExperienceData
      :data="`2022 - 2023`"
      :position="`Frontend Developer (HTML/CSS)`"
      :text="`Worked as a Frontend Developer for 6 months, creating responsive and cross-browser compatible websites. Focused on HTML5, CSS3, and JavaScript to implement design mockups, ensuring high-quality user interfaces and optimal performance.`"
    />
  </div>
</template>

<script>
import ExperienceData from './component/experience.vue'

  export default {
    name: 'WorkExperience',
    components: {
      ExperienceData,
    }
  }
</script>

<style scoped>
    .work {
      width: 80%;
      display: flex;
      align-items: start;
      justify-content: center;
      flex-direction: column;
      padding: 5rem 0;
      gap: 2rem;
    }
</style>