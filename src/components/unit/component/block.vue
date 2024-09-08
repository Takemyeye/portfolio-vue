<template>
  <div class="block">
    <UiBadge style="font-size: medium;" :styleBadge="badge" :skill="text"/>
    <div class="wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import UiBadge from '@/ui/badge.vue'

  export default {

    name: 'UiBlock',
    components: {
      UiBadge,
    },
    props: {
      text: {
        type: String,
        required: true
      },
      badge: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>
  
  .block {
    width: 20%;
    min-height: 160px;
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;
    gap: 1rem;
  }
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
</style>