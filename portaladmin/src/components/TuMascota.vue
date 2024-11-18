<template>
  <div class="mascota-container">
    <!-- Contenedor con iframe para mostrar el HTML -->
    <div class="browser-window">
      <div class="browser-header">
        <span class="dot red"></span>
        <span class="dot yellow"></span>
        <span class="dot green"></span>
      </div>
      <iframe src="/husk.html" frameborder="0" class="browser-iframe"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TuMascota',
};
</script>

<style scoped>
.mascota-container {
  text-align: center;
  margin-top: 2rem;
}

h1 {
  text-align: center;
  margin-bottom: 1rem;
}

.browser-window {
  width: 80%;
  margin: 0 auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.browser-header {
  background-color: #f1f1f1;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 2px solid #ccc;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 6px;
  display: inline-block;
}

.red {
  background-color: #012E40;
}

.yellow {
  background-color: #024959;
}

.green {
  background-color: #026773;
}

.browser-iframe {
  width: 100%;
  height: 80vh;
  border: none;
}
</style>
