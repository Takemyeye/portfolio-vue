<template>
  <div class="project">
    <img :src="img" alt="">
    <div class="text">
      <h3>{{ text }}</h3>
      <h5>{{ description }}</h5>
      <UiButton text="View More" :hoverColor="`hsl(358, 100%, 69%)`" :hoverBgColor="`hsl(357, 46%, 16%)`" />
    </div>
  </div>
</template>

<script> 
import UiButton from '@/ui/btn.vue'

  export default {
    name: 'ProjectUnit',
    components: {
      UiButton,
    },
    props: {
     img: {
      type: Object,
      Required: true
     },
      text: {
        type: String,
        Required: true
      },
      description: {
        type: String,
        Required: true
      }
    }
  }
</script>

<style scoped>
  .project, .text {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  }

  .project {
    padding: 1rem;
    border-radius: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.13);
  }

  img {
    width: 100%;
    object-fit: contain;
    border-radius: 8px;
  }
</style>