<template>
  <div :class="styleBadge">
    <h5>{{ skill }}</h5>
  </div>
</template>

<script> 
  export default {
    name: 'UiBadge',
    props: {
      styleBadge: {
        type: String,
        default: '',
    },
      skill: {
        type: String,
        required: true,
        default: ''
      }
    }
  }
</script>

<style scoped>
  .badge, .badge1, .badge2, .badge3, .badge4 {
    padding: 2px 6px;
    border-radius: 12px;
    text-align: center;
  }

  .badge:hover {
    opacity: 0.8;
  }

  .badge {
    background-color: var(--color-000);
  }


  h5 {
    font-size: small;
    color: var(--color-black);
  }

  .badge1 {
    background-color: hsl(214, 59%, 15%);
  }

  .badge1 h5 {
    color: hsl(210, 100%, 66%);
  }

  .badge2 {
    background-color: hsl(281, 38%, 16%);
  }

  .badge2 h5 {
    color: hsl(275, 80%, 71%);
  }

  .badge3 {
    background-color: hsl(135, 70%, 16%);
  }

  .badge3 h5 {
    color: hsl(174, 90%, 41%);
  }

  .badge4 {
    background-color: hsl(357, 46%, 16%);
    cursor: pointer;
  }

  .badge4 h5 {
    color: hsl(358, 100%, 69%);
  }
</style>
