<template>
  <v-app>
    <!-- Barra de navegación superior -->
    <v-app-bar app dark color="primary">
      <v-toolbar-title>Carrera de Administración de Empresas</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tabs v-model="tab" align-with-title color="cyan">
        <v-tab @click="currentComponent = 'HomePage'">INICIO</v-tab>
        <v-tab @click="currentComponent = 'AboutCarrer'">SOBRE LA CARRERA</v-tab>
        <v-tab @click="currentComponent = 'SubjectsList'">OFERTA DE MATERIAS</v-tab>
        <v-tab @click="currentComponent = 'ResourcesList'">RECURSOS</v-tab>
        <v-tab @click="currentComponent = 'ForumChat'">FORO</v-tab>
        <v-tab @click="currentComponent = 'TuMascoraVir'">TUMASCORA</v-tab>
      </v-tabs>
    </v-app-bar>

    <!-- Contenido dinámico de la pestaña -->
    <v-container>
      <component :is="currentComponent"></component>
    </v-container>

    <!-- Pie de página de contacto -->
    <v-footer app color="primary">
      <v-container>
        <v-row>
          <v-col>
            <span class="white--text">© 2024 Carrera de Administración de Empresas. Todos los derechos reservados.</span>
          </v-col>
          <v-col class="text-right">
            <v-btn icon @click="openContactDialog">
              <v-icon>mdi-email</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>

    <!-- Diálogo de contacto -->
    <v-dialog v-model="contactDialog" max-width="500">
      <v-card>
        <v-card-title>
          <span class="headline">Contacto</span>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field label="Nombre" v-model="contactName"></v-text-field>
            <v-text-field label="Correo" v-model="contactEmail"></v-text-field>
            <v-textarea label="Mensaje" v-model="contactMessage"></v-textarea>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="sendContact">Enviar</v-btn>
          <v-btn @click="closeContactDialog">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import HomePage from './components/HomePage.vue';
import AboutCarrer from './components/AboutCarrer.vue';
import SubjectsList from './components/SubjectsList.vue';
import ResourcesList from './components/ResourcesList.vue';
import ForumChat from './components/ForumChat.vue';
import TuMascoraVir from './components/TuMascoraVir.vue';

export default {
  components: {
    HomePage,
    AboutCarrer,
    SubjectsList,
    ResourcesList,
    ForumChat,
    TuMascoraVir,
  },
  data() {
    return {
      tab: 0, // Control de pestañas
      currentComponent: 'HomePage', // Componente inicial actualizado
      contactDialog: false,
      contactName: '',
      contactEmail: '',
      contactMessage: '',
    };
  },
  methods: {
    openContactDialog() {
      this.contactDialog = true;
    },
    closeContactDialog() {
      this.contactDialog = false;
    },
    sendContact() {
      // Lógica para enviar el mensaje de contacto
      this.closeContactDialog();
      this.$notify({
        title: 'Mensaje Enviado',
        message: 'Tu mensaje ha sido enviado correctamente.',
        type: 'success',
      });
    },
  },
};
</script>

<style scoped>
/* Estilos personalizados */
</style>
