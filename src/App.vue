<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>

* {
 margin: 0;
 padding: 0;
}

 a {
  color: inherit;
  text-decoration: none;
  width: auto;
  height: auto;
}

html,body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  scroll-behavior: smooth;
  background-color: var(--color-001);
}

::-webkit-scrollbar {
  width: 16px;
}
::-webkit-scrollbar-track {
  background: black;
}
::-webkit-scrollbar-thumb {
  background-color: rgb(20, 20, 20);
  box-shadow: 0 -100vh 0 100vh var(--color-black), 0 0 15px 5px var(--color-000);
}

h1 {
  font-size: clamp(20px, 2vw, 40px);
  color: var(--color-000);
  font-weight: 500;
}

h2 {
  font-size: clamp(16px, 2vw, 22px);
  color: var(--color-002);
}

h5 {
  font-size: clamp(10px, 2vw, 14px);
  font-weight: 100;
  color: var(--color-000);
}

h4 {
  font-weight: 500;
  font-size: clamp(12px, 2vw, 16px);
  color: var(--color-002);
}

h3 {
  position: relative;
  font-size: clamp(12px, 2vw, 18px);
  color: var(--color-000);
  font-weight: 500;
}

 :root {
  --text-font-family: "Sora", sans-serif;
  --text-font-optical: auto;
  --text-font-weight: weight;
  --text-font-style: normal;
  --color-000: rgb(255, 255, 255);
  --color-001: rgb(15, 15, 15);
  --color-002: rgb(214, 214, 214);
  --color-black: black;
}

::selection {
  background: transparent;
}

@keyframes apper {
  from {
    opacity: 0;
    scale: 0.5;
  }
  40% {
    opacity: 0;
  }
  to {
    opacity: 1;
    scale: 1;
  }
}

@keyframes opacity {
  0% {
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  30% {
    opacity: 0;
  }
  45% {
    opacity: 1;
  }
  60% {
    opacity: 0;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes toTop {
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes toRight {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes toLeft {
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
