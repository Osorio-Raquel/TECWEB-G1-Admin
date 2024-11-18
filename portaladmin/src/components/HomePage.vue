<template>
  <HomePageBanner /> <!-- Asegúrate de que este componente exista y se importe correctamente -->

</template>

<script>
import HomePageBanner from './HomePageBaner.vue'; // Importa el componente si no lo has hecho aún

export default {
  name: 'HomePage', // El nombre de tu componente
  components: {
    HomePageBanner,
  },
};
</script>

<style scoped>

/* Asegúrate de darle un margen superior al contenido para que no quede oculto detrás del header fijo */
.HomePageBanner {
  margin-top: 80px; /* Ajusta este valor según el tamaño de tu Header */
}
</style>
