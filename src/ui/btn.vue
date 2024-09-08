<template>
  <button>
      <span class="circle1"></span>
      <span class="circle2"></span>
      <span class="circle3"></span>
      <span class="circle4"></span>
      <span class="circle5"></span>
      <span class="text">
        <div class="t">View More</div>
        <div class="t"><font-awesome-icon icon="arrow-right" /></div>
      </span>
  </button>
</template>

<script>
  export default {
    name: 'UiButton'
  }
</script>

<style scoped>
button {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  padding: 0.5rem;
  background-color: transparent;
  color: var(--color-002);
  border: none;
  border-radius: .6rem;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  transition: .6s ease;
}
button:hover {
  color: hsl(210, 100%, 66%);
}

button span:not(:nth-child(6)) {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 30px;
  width: 30px;
  background-color: hsl(214, 59%, 15%);
  border-radius: 50%;
  transition: .6s ease;
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
  transform: translate(-.2em, 1.8em);
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
