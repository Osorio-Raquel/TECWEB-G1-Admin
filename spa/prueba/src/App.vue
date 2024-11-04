<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="toggleMenu"></v-app-bar-nav-icon>

      <v-toolbar-title>Administración de Empresas</v-toolbar-title> <!-- Título completo aquí -->

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon @click="toggleMoreOptions">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab>Inicio</v-tab>
          <v-tab>Sobre la Carrera</v-tab>
          <v-tab>Oferta de Materias</v-tab>
          <v-tab>Recursos</v-tab>
          <v-tab>Foro</v-tab>
          <v-tab>Tu Mascota</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 1000px;"></v-container>
    </v-sheet>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      // Aquí puedes agregar más datos según sea necesario
    };
  },
  methods: {
    toggleMenu() {
      // Lógica para abrir/cerrar el menú (puedes personalizar esto)
      console.log("Menú de navegación clicado.");
      // Aquí puedes agregar lógica para abrir un menú si es necesario
    },
    toggleMoreOptions() {
      // Lógica para mostrar más opciones (puedes personalizar esto)
      console.log("Opciones adicionales clicadas.");
      // Aquí puedes agregar lógica para mostrar un menú adicional si es necesario
    },
  },
};
</script>

<style>
.v-menu__content {
  z-index: 1000; /* Asegúrate de que el menú se muestre por encima de otros elementos */
}
</style>
