<template> 
  <div class="experience">
    <h5>{{ data }}</h5>
    <h3>{{ position }}</h3>
    <h5 :style="h4">{{ text }}</h5>
  </div>
</template>

<script>
  export default {
    name: 'ExperienceData',
    props: {
      data: {
        type: String,
        required: true,
        default: ''
      },
      position: {
        type: String,
        required: true,
        default: ''
      },
      text: {
        type: String,
        required: true,
        default: ''
      },
      h4: {
        type: String,
        required: false,
      }
    }
  }
</script>

<style scoped>
  .experience {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    animation: apper linear;
    animation-timeline: view();
    animation-range: entry 0% cover 25%;
    gap: 8px;
  }
  h5, h4 {
    font-weight: 300;
    color: var(--color-002);
  }
  h3 {
    font-weight: 600;
  }
</style>