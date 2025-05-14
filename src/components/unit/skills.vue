<template>
  <div class="skills">
    <h1>Skills & Technologies</h1>
    <div class="container">
      <UiBlock :badge="`badge1`" text="Frontend">
        <UiBadge :styleBadge="`badge`" skill="React" />
        <UiBadge :styleBadge="`badge`" skill="Next.js" />
        <UiBadge :styleBadge="`badge`" skill="Vue" />
        <UiBadge :styleBadge="`badge`" skill="Redux" />
        <UiBadge :styleBadge="`badge`" skill="Vuex" />
        <UiBadge :styleBadge="`badge`" skill="TypeScript" />
        <UiBadge :styleBadge="`badge`" skill="JavaScript" />
        <UiBadge :styleBadge="`badge`" skill="Flutter" />
        <UiBadge :styleBadge="`badge`" skill="Dart" />
        <UiBadge :styleBadge="`badge`" skill="HTML" />
        <UiBadge :styleBadge="`badge`" skill="CSS" />
        <UiBadge :styleBadge="`badge`" skill="SCSS" />
        <UiBadge :styleBadge="`badge`" skill="Tailwind" />
      </UiBlock>
      
      <UiBlock :badge="`badge2`" text="Backend">
        <UiBadge :styleBadge="`badge`" skill="Microservice" />
        <UiBadge :styleBadge="`badge`" skill="Queue" />
        <UiBadge :styleBadge="`badge`" skill="TypeScript" />
        <UiBadge :styleBadge="`badge`" skill="Node.js" />
        <UiBadge :styleBadge="`badge`" skill="Express" />
        <UiBadge :styleBadge="`badge`" skill="Bull.js" />
        <UiBadge :styleBadge="`badge`" skill="Python" />
        <UiBadge :styleBadge="`badge`" skill="Flask" />
        <UiBadge :styleBadge="`badge`" skill="PHP" />
      </UiBlock>

      <UiBlock :badge="`badge3`" text="Databases">
        <UiBadge :styleBadge="`badge`" skill="PostgreSQL" />
        <UiBadge :styleBadge="`badge`" skill="MySQL" />
        <UiBadge :styleBadge="`badge`" skill="MongoDB" />
        <UiBadge :styleBadge="`badge`" skill="SQLite" />
        <UiBadge :styleBadge="`badge`" skill="CockroachDB" />
        <UiBadge :styleBadge="`badge`" skill="Prisma" />
        <UiBadge :styleBadge="`badge`" skill="TypeORM" />
        <UiBadge :styleBadge="`badge`" skill="Redis" />
      </UiBlock>

      <UiBlock :badge="`badge4`" text="Tools">
        <UiBadge :styleBadge="`badge`" skill="Git" />
        <UiBadge :styleBadge="`badge`" skill="Bitbucket" />
        <UiBadge :styleBadge="`badge`" skill="GitHub" />
        <UiBadge :styleBadge="`badge`" skill="VSCode" />
        <UiBadge :styleBadge="`badge`" skill="Postman" />
        <UiBadge :styleBadge="`badge`" skill="Emulator" />
        <UiBadge :styleBadge="`badge`" skill="Docker" />
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
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    gap: 1rem;
  }

  @media all and (max-width: 768px) {
    .container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

</style>