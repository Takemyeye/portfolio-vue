<template>
  <div class="personal">
    <h1>Personal Attributes..<span>.</span></h1>
    <ContainerBlock badge="badge1" text="Personal Projects">
      <h5>
        <a href="https://belance.netlify.app/" style="color: hsl(210, 100%, 66%);">Belance:</a> 
        This is a platform I developed where users can order a custom website tailored to their specific needs. 
        The service includes options for personalized design and team selection, making it a flexible solution for various website requirements.
      </h5>
      <h5>
        <a href="#" style="color: hsl(210, 100%, 66%);">Soul Swap:</a>
        This project is an online store dedicated to manga and anime characters. 
        It features an intuitive interface and user-friendly experience, designed to cater to fans and collectors alike.
      </h5>
    </ContainerBlock>
    <ContainerBlock badge="badge3" text="Languages">
      <div class="text">       
        Ukrainian: 
        <UiBadge styleBadge="badge" skill="native"/>
      </div>
      <div class="text">       
        Russian: 
        <UiBadge styleBadge="badge" skill="native"/>
      </div>
      <div class="text">       
        Italian:  
        <UiBadge styleBadge="badge" skill="high level"/>
      </div>
      <div class="text">       
        English: 
        <UiBadge styleBadge="badge" skill="intermediate"/>
      </div>
    </ContainerBlock>
  </div>
</template>

<script>
import ContainerBlock from './component/container.vue';
import UiBadge from '@/ui/badge.vue';

  export default {
    name: 'PersonalAttributes',
    components: {
      ContainerBlock,
      UiBadge
    }
  }
</script>

<style scoped>
  .personal {
    width: 40%;
    padding: 5rem 0;
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;
    gap: 2rem;
  }

  span {
    animation: opacity 4s ease infinite;
  }

  h5, .text {
    font-weight: 400;
    color: var(--color-002);
    text-wrap: balance;
    word-spacing: 0.6em;
  }

  .text {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }
</style>