<template>
  <div class="work">
    <h1>Work Experience</h1>
    <ExperienceData
      style="animation: none;"
      :data="`From 02.2022 to 09.2022`"
      :position="`Full-Stack at Impactium`"
      :text="`Built high-performance landing pages and SPA using modern stacks Refactored legacy codebases to improve scalability Adapted and extended existing solutions to meet new business needs`"
    />
    <ExperienceData 
      style="animation: none;"
      :data="`From 01.2025 to 12.2025`"
      :position="`Frontend at Mentat`"
      :text="`Worked as a Frontend Developer on the Gulp web UI — a React and TypeScript application. Developed and maintained UI components using Shadcn/UI, implemented user authentication screens, session management, and operation workflows. Focused on creating responsive, modular, and high-performance interfaces, integrating with backend APIs, and improving overall usability and developer experience.`"
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
