<template>
  <div class="summary">
    <h1>About Me..<span>.</span></h1>
    <ContainerBlock badge="badge1" text="summary">
    <h5>
      I am Oleh Bratok.
      I have over 3 years of commercial experience as a Fullstack Developer, including roles at  
      <a href="https://impactium.dev" style="color: hsl(210, 100%, 66%);">Impactium</a>, 
      <a href="https://datacode.it/home" style="color: hsl(210, 100%, 66%);">DataCode srl</a>, 
      <a href="https://meway.it/en/" style="color: hsl(210, 100%, 66%);">MeWay</a> and various freelance projects.  
      During this time, I developed and delivered a range of web applications, such as online shops, AI-powered tools, and scalable APIs.  
      I’m passionate about clean, efficient code and continuously strive to learn, adapt, and contribute to high-performing teams.
    </h5>
    </ContainerBlock>
    <ContainerBlock badge="badge2" text="Additional Information">
      <h5>
        Fast-learning and adaptable Developer with a strong sense of initiative.  
        I thrive in dynamic environments, take ownership of tasks, and consistently help teams grow in both performance and collaboration.  
        Committed to continuous learning and bringing value to every project I contribute to.
      </h5>
    </ContainerBlock>
    <ContainerBlock badge="badge4" text="Education">
      <h5>
        I am a proud graduate of 
        <a href="https://www.fermifrascati.edu.it/" style="color: hsl(358, 100%, 69%);">I.T.T Enrico Fermi</a>, 
        where I specialized in Informatics and Cybersecurity. 
        My education provided me with a solid foundation in both areas, equipping me with the skills necessary to excel in the ever-evolving field of technology and information security.
      </h5>
    </ContainerBlock>
  </div>
</template>

<script>
import ContainerBlock from './component/container.vue'

  export default {
    name: 'SummaryPanel',
    components: {
      ContainerBlock
    }
  }
</script>

<style scoped>

  .summary {
    width: 40%;
    padding: 5rem 0;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    animation: toRight 1.5s ease forwards;
    gap: 2rem;
  }

  span {
    animation: opacity 4s ease infinite;
  }

  h5 {
    font-weight: 400;
    color: var(--color-002);
    text-wrap: balance;
    word-spacing: 0.3em;
  }

  @media all and ( max-width: 768px ) {
    .summary {
      width: 100%;
      align-items: center;
    }
  }

</style>