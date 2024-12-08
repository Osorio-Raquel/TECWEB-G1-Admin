<template>
  <div>
    <!-- Renderiza HeaderPageStart o HeaderPage dependiendo del estado de inicio de sesión -->
    <component :is="currentComponent" />
  </div>
</template>

<script>
import HeaderPageStart from './components/HeaderPageStart.vue';
import HeaderPage from './components/HeaderPage.vue';

export default {
  name: 'App',
  components: {
    HeaderPageStart,
    HeaderPage,
  },
  data() {
    return {
      currentComponent: null, // Inicialmente nulo
    };
  },
  created() {
    // Verifica si el usuario ha iniciado sesión (puedes usar localStorage o sessionStorage)
    const userLoggedIn = sessionStorage.getItem('name'); // Ejemplo: checar sesión
    this.currentComponent = userLoggedIn ? 'HeaderPage' : 'HeaderPageStart';
  },
};
</script>

<style scoped>
/* Ajustes opcionales */
</style>
