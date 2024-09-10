<template>
  <div class="container">
    <UiBadge :skill="text" :styleBadge="badge"/>
    <slot></slot>
  </div>
</template>

<script>
import UiBadge from '@/ui/badge.vue'

  export default {
    name: 'ContainerBlock',
    components: {
      UiBadge
    },
    props: {
      badge: {
        type: String,
        default: 'badge1'
      },
      text: {
        type: String,
        default: 'badge1'
      }
    }
  }
</script>

<style scoped>
.container {
  width: 75%;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
}
</style>
