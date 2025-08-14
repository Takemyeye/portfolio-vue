<template>
  <div class="work">
    <h1>Work Experience</h1>
    <ExperienceData
      style="animation: none;"
      :data="`From 03.2022 to 09.2022`"
      :position="`Full-Stack at Impactium`"
      :text="`Built high-performance landing pages and SPA using modern stacks Refactored legacy codebases to improve scalability Adapted and extended existing solutions to meet new business needs`"
    />
    <ExperienceData 
      style="animation: none;"
      :data="`From 05.2024 to 05.2025`"
      :position="`Full-Stack at MeWay`"
      :text="`Developed and maintained complex web applications using React, Next.js, Node.js, and MongoDB. Collaborated with cross-functional teams to deliver high-quality software solutions.`"
    />
    <router-link to="/about">
      <UiButton 
        text="View More" 
        :hoverColor="`hsl(275, 80%, 71%)`" 
        :hoverBgColor="`hsl(281, 38%, 16%)`" 
      />
    </router-link>
  </div>
</template>

<script>
import ExperienceData from './component/experience.vue';
import UiButton from '@/ui/btn.vue';

export default {
  name: 'WorkExperience',
  components: {
    ExperienceData,
    UiButton
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
