<template>
  <div class="skills">
    <h1>Skills & Technologies</h1>
    <div class="container">
      <UiBlock :badge="`badge1`" text="Frontend">
        <UiBadge :styleBadge="`badge`" skill="React" />
        <UiBadge :styleBadge="`badge`" skill="Next.js" />
        <UiBadge :styleBadge="`badge`" skill="Vue" />
        <UiBadge :styleBadge="`badge`" skill="Nuxt.js" />
        <UiBadge :styleBadge="`badge`" skill="TypeScript" />
        <UiBadge :styleBadge="`badge`" skill="JavaScript" />
        <UiBadge :styleBadge="`badge`" skill="HTML" />
        <UiBadge :styleBadge="`badge`" skill="CSS" />
        <UiBadge :styleBadge="`badge`" skill="Scss" />
        <UiBadge :styleBadge="`badge`" skill="Less" />
      </UiBlock>
      <UiBlock :badge="`badge2`" text="Backend">
        <UiBadge :styleBadge="`badge`" skill="Node.js" />
        <UiBadge :styleBadge="`badge`" skill="Express" />
        <UiBadge :styleBadge="`badge`" skill="PHP" />
        <UiBadge :styleBadge="`badge`" skill="Json" />
      </UiBlock>
      <UiBlock :badge="`badge3`" text="Databases">
        <UiBadge :styleBadge="`badge`" skill="MongoDB" />
        <UiBadge :styleBadge="`badge`" skill="MySQL" />
        <UiBadge :styleBadge="`badge`" skill="PostgreSQL" />
      </UiBlock>
      <UiBlock :badge="`badge4`" text="Tools">
        <UiBadge :styleBadge="`badge`" skill="Git" />
        <UiBadge :styleBadge="`badge`" skill="GitHub" />
        <UiBadge :styleBadge="`badge`" skill="REST API" />
      </UiBlock>
    </div>
  </div>
</template>

<script>
import UiBlock from './component/block.vue';
import UiBadge from '@/ui/badge.vue'
  export default {
    name: 'SkillsBlock',
    components: {
      UiBlock,
      UiBadge,
    }
  }
</script>

<style scoped>
  .skills {
    width: 80%;
    padding: 5rem 0;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
  }

  .container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }

</style>