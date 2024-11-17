<template>
  <HomePageBanner /> <!-- Asegúrate de que este componente exista y se importe correctamente -->
  <p>JSDGHUFIBADSUIBGSIUDBG</p>
<br>
<p>RGFE</p>
<p>JSDGHUFIBADSUIBGSIUDBG</p>
<br>
<p>RGFE</p>
<p>JSDGHUFIBADSUIBGSIUDBG</p>
<br>
<p>RGFE</p>
<p>JSDGHUFIBADSUIBGSIUDBG</p>
<br>
<p>RGFE</p>
<p>JSDGHUFIBADSUIBGSIUDBG</p>
<br>
<p>RGFE</p>
<p>JSDGHUFIBADSUIBGSIUDBG</p>
<br>
<p>RGFE</p>
<p>JSDGHUFIBADSUIBGSIUDBG</p>
<br>
<p>RGFE</p>

</template>

<script>
import HomePageBanner from './HomePageBaner.vue'; // Importa el componente si no lo has hecho aún

export default {
  name: 'HeaderPage', // El nombre de tu componente
  components: {
    HomePageBanner,
  },
};
</script>

<style scoped>
/* Asegura que HeaderPage se quede fijo en la parte superior */
.HeaderPage {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000; /* Asegura que el encabezado esté por encima de otros elementos */
  background-color: white; /* Fondo blanco para el encabezado, puedes cambiarlo si lo prefieres */
  width: 100%;
  padding: 10px 0; /* Agrega algo de relleno si es necesario */
}

/* Asegúrate de darle un margen superior al contenido para que no quede oculto detrás del header fijo */
.HomePageBanner {
  margin-top: 80px; /* Ajusta este valor según el tamaño de tu Header */
}
</style>
