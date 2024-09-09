<template>
  <button
    :style="{ 
      '--hover-color': hoverColor, 
      '--text-color': textColor, 
      '--bg-color': bgColor,
      '--hover-bg-color': hoverBgColor
    }"
  >
    <span class="circle1"></span>
    <span class="circle2"></span>
    <span class="circle3"></span>
    <span class="circle4"></span>
    <span class="circle5"></span>
    <span class="text">
      <div class="t">{{ text }}</div>
      <div v-if="showIcon" class="t">
        <font-awesome-icon icon="arrow-right" />
      </div>
    </span>
  </button>
</template>

<script>
export default {
  name: 'UiButton',
  props: {
    text: {
      type: String,
      required: true,
      default: 'View More',
    },
    bgColor: {
      type: String,
      default: 'transparent',
    },
    textColor: {
      type: String,
      default: '#FFFFFF',
    },
    hoverColor: {
      type: String,
      default: 'var(--color-002)',
    },
    hoverBgColor: {
      type: String,
      default: 'hsl(214, 59%, 15%)',
    },
    showIcon: {
      type: Boolean,
      default: true,
    }
  }
};
</script>

<style scoped>
button {
  padding: 0.5rem;
  background-color: var(--bg-color);
  color: var(--text-color);
  border: none;
  border-radius: 0.6rem;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  transition: 0.6s ease;
}

button:hover {
  color: var(--hover-color);
  transition: 0.3s ease;
}

span.circle1,
span.circle2,
span.circle3,
span.circle4,
span.circle5 {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 30px;
  width: 30px;
  background-color: var(--hover-bg-color);
  border-radius: 50%;
  transition: 0.6s ease;
}

.text {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 8px;
}

.t {
  font-weight: 500;
  font-size: clamp(12px, 2vw, 16px);
}

button span:nth-child(6) {
  position: relative;
}

button span:nth-child(1) {
  transform: translate(-3.3em, -4em);
}

button span:nth-child(2) {
  transform: translate(-6em, 1.3em);
}

button span:nth-child(3) {
  transform: translate(-0.2em, 1.8em);
}

button span:nth-child(4) {
  transform: translate(3.5em, 1.4em);
}

button span:nth-child(5) {
  transform: translate(3.5em, -3.8em);
}

button:hover span:not(:nth-child(6)) {
  transform: translate(-50%, -50%) scale(4);
  transition: 1.5s ease;
}
</style>
