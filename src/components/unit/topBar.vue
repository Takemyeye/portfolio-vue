<template>
  <div class="topBar">
    <div class="left-panel">
      <div class="experience">
        <h5>Over 2 years of experience</h5>
      </div>
      <h1>Oleh Bratok</h1>
      <h3>Full Stack Developer</h3>
    </div>
    <div class="right-panel">
      <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-vue-d6eb1.appspot.com/o/abstract.png?alt=media&token=17e4f270-d1e8-4ce5-8d83-f7e95029b960" alt="">
      <UiButton 
        text="Download CV" 
        :hoverColor="`hsl(210, 100%, 66%)`" 
        :hoverBgColor="`hsl(214, 59%, 15%)`" 
        :showIcon="false"
        @click="downloadCV"
      />
    </div>
  </div>
</template>

<script>
import UiButton from '@/ui/btn.vue'

export default {
  name: 'TopBar',
  components: {
    UiButton
  },
  methods: {
    downloadCV() {
      const cvUrl = 'cv/Oleh_Bratok.pdf';
      
      const link = document.createElement('a');
      link.href = cvUrl;
      link.download = 'Oleh_Bratok_CV.pdf';
      link.click();
    }
  }
}
</script>

<style scoped>

  .topBar {
    width: 80%;
    padding: 5rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }

  .left-panel, .right-panel {
    width: 40%;
    height: 100%;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }

  .left-panel {
    animation: toRight 1.5s ease forwards;
  }

  .right-panel {
    align-items: center;
    animation: toLeft 1.5s ease forwards;
  }

  .experience {
    padding: 4px 8px;
    border-radius: 8px;
    background-color: rgba(128, 128, 128, 0.473);
  }
  h3, h5{
    font-weight: 400;
    color: var(--color-002);
  }
  h1 {
    font-size: clamp(26px, 3vw, 50px);
  }
  img {
    width: 100%;
    height: 400px;
    object-fit: contain;
  }

  h1 {
    animation: shadow 3s ease infinite;
  }

  @keyframes shadow {
    0% {
      text-shadow: 0px 0px 50px hsl(210, 100%, 66%);
    }
    25% {
      text-shadow: 0px 0px 50px hsl(275, 80%, 71%);
    }
    50% {
      text-shadow: 0px 0px 50px hsl(174, 90%, 41%);
    }
    75% {
      text-shadow: 0px 0px 50px hsl(358, 100%, 69%);
    }
    100% {
      text-shadow: 0px 0px 50px hsl(210, 100%, 66%);
    }
  }

  @media all and (max-width: 768px ) {
    .topBar {
      align-items: start;
      flex-direction: column;
      gap: 2rem;
    }

    .left-panel {
      width: 100%;
    }

    .right-panel {
      width: 100%;
      object-fit: contain;
      animation: toTop 1.5s ease forwards;
    }
  }
</style>