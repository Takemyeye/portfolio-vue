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
  font-size: clamp(18px, 2vw, 40px);
  color: var(--color-000);
  font-weight: 500;
}

h2 {
  font-size: clamp(16px, 2vw, 22px);
  color: var(--color-002);
}

h5 {
  font-size: clamp(10px, 2vw, 14px);
  font-weight: 500;
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
  --color-001: rgb(24, 24, 24);
  --color-002: rgb(173, 173, 173);
  --color-003: rgba(24, 24, 24, 0.795);
  --color-black: black;
}
</style>
