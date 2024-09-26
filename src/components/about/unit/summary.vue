<template>
  <div class="summary">
    <h1>About Me..<span>.</span></h1>
    <ContainerBlock badge="badge1" text="summary">
      <h5>
        I am Oleh Bratok, born in 2005.
        I have one year of commercial experience working at <a href="https://datacode.it/home" style="color: hsl(210, 100%, 66%);">DataCode srl</a>. 
        In addition to my professional role, I have also developed several personal projects. These include:
        Belance, Soul Swap.
      </h5>
    </ContainerBlock>
    <ContainerBlock badge="badge2" text="Additional Information">
      <h5>
        Dedicated to ongoing learning and professional growth, I thrive in dynamic environments and excel at tackling complex challenges.
      </h5>
    </ContainerBlock>
    <ContainerBlock badge="badge4" text="Education">
      <h5>
        I am a proud graduate of
        <a href="https://www.fermifrascati.edu.it/" style="color: hsl(358, 100%, 69%);">I.T.T Enrico Fermi</a> 
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
    word-spacing: 0.6em;
  }

  @media all and ( max-width: 768px ) {
    .summary {
      width: 100%;
      align-items: center;
    }
  }

</style>