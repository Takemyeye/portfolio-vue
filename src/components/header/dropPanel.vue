<template>
  <div class="drop">
    <a href="">
      <div class="contact">
        <h5><font-awesome-icon icon="envelope" /></h5>
        <h5>olehbratok@gmail.com</h5>
      </div>
    </a>
    <a href="#">
      <div class="contact">
        <h5><font-awesome-icon icon="phone" /></h5>
        <h5>+39 348 902 6911</h5>
      </div>
    </a>
    <a href="https://t.me/takemyeye">
      <div class="contact">
        <h5><font-awesome-icon icon="fa-brands fa-telegram" /></h5>
        <h5>t.me/takemyeye</h5>
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'DropPanel'
  }
</script>

<style scoped>
.drop {
  position: absolute;
  top: 110%;
  right: 0%;
  padding: 4px 8px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.13);
  background-color: var(--color-001);
  animation: toTop 0.6s ease forwards;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
}

.contact {
  width: 100%;
  padding: 4px 2px;
  background-color: transparent;
  transition: 0.3s ease;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;
  gap: 8px;
}

h5 {
  font-size: clamp(10px, 2vw, 12px);
}

a {
  width: 100%;
  text-decoration: none;
}

.contact:hover {
  background-color: hsl(214, 59%, 15%);
}

.contact:hover h5 {
  color: hsl(210, 100%, 66%);
}
</style>