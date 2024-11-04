<template>
  <v-app>
    <!-- Barra de navegación superior -->
    <v-app-bar app dark color="primary">
      <v-toolbar-title>Carrera de Administración de Empresas</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tabs v-model="tab" align-with-title color="cyan">
        <v-tab @click="goToHome">INICIO</v-tab>
        <v-tab @click="goToAbout">SOBRE LA CARRERA</v-tab>
        <v-tab @click="goToSubjects">OFERTA DE MATERIAS</v-tab>
        <v-tab @click="goToResources">RECURSOS</v-tab>
        <v-tab @click="goToForum">FORO</v-tab>
        <v-tab @click="goToTumascora">TUMASCORA</v-tab>
      </v-tabs>
    </v-app-bar>

    <v-container>
      <v-row>
        <v-col cols="12">
          <v-divider></v-divider>
          <v-tabs-items v-model="tab">
            <v-tab-item>
              <v-card>
                <v-card-title class="headline text-primary">Inicio</v-card-title>
                <v-card-text>
                  <p class="animated fadeIn">Bienvenido a la Carrera de Administración de Empresas.</p>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card>
                <v-card-title class="headline text-primary">Sobre la Carrera</v-card-title>
                <v-card-text>
                  <v-carousel hide-delimiter-background>
                    <v-carousel-item v-for="(image, index) in carouselImages" :key="index">
                      <v-img :src="image.src" :alt="image.alt"></v-img>
                    </v-carousel-item>
                  </v-carousel>

                  <!-- Reloj -->
                  <v-card class="my-5" color="cyan" dark>
                    <v-card-title class="headline">Reloj Actual</v-card-title>
                    <v-card-text>
                      <v-timer :value="time" format="HH:mm:ss" />
                    </v-card-text>
                  </v-card>

                  <!-- Información sobre la carrera -->
                  <v-card class="mx-auto my-5" max-width="800">
                    <v-card-title class="headline text-primary">Sobre la Carrera</v-card-title>
                    <v-card-text>
                      <p class="animated slideInLeft">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                      <v-divider></v-divider>
                      <v-card class="mx-2 my-2" v-for="(info, index) in infoCards" :key="index" flat>
                        <v-card-title>{{ info.title }}</v-card-title>
                        <v-card-text>{{ info.content }}</v-card-text>
                        <v-card-actions>
                          <v-btn @click="info.show = !info.show">{{ info.show ? 'Ocultar' : 'Mostrar' }}</v-btn>
                        </v-card-actions>
                        <v-expand-transition>
                          <v-card-text v-if="info.show">
                            {{ info.details }}
                          </v-card-text>
                        </v-expand-transition>
                      </v-card>
                      <v-divider></v-divider>
                      <v-img
                        src="https://via.placeholder.com/600x300?text=Imagen+de+Administracion"
                        class="my-4 animated fadeIn"
                        max-height="300"
                        contain
                      ></v-img>
                      <p class="animated bounceIn">
                        Quisque volutpat condimentum vel, eu hendrerit nunc. Proin nec sapien eget erat sodales convallis. Aenean sed magna sed nisl laoreet euismod.
                      </p>
                    </v-card-text>
                  </v-card>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card>
                <v-card-title class="headline text-primary">Oferta de Materias</v-card-title>
                <v-card-text>
                  <p class="animated fadeIn">Aquí se mostrarán las materias disponibles en la carrera.</p>
                  <!-- Agrega contenido sobre la oferta de materias aquí -->
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card>
                <v-card-title class="headline text-primary">Recursos</v-card-title>
                <v-card-text>
                  <p class="animated fadeIn">Recursos útiles para los estudiantes de Administración.</p>
                  <!-- Agrega contenido sobre recursos aquí -->
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card>
                <v-card-title class="headline text-primary">Foro</v-card-title>
                <v-card-text>
                  <p class="animated fadeIn">Espacio para discusión y preguntas.</p>
                  <!-- Agrega contenido del foro aquí -->
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card>
                <v-card-title class="headline text-primary">Tumascora</v-card-title>
                <v-card-text>
                  <p class="animated fadeIn">Información sobre Tumascora.</p>
                  <!-- Agrega contenido de Tumascora aquí -->
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
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
export default {
  data() {
    return {
      tab: 0, // Variable para el manejo de tabs
      time: new Date().toLocaleTimeString(), // Reloj
      carouselImages: [
        { src: 'https://via.placeholder.com/800x300?text=Carrera+Administracion+1', alt: 'Imagen 1' },
        { src: 'https://via.placeholder.com/800x300?text=Carrera+Administracion+2', alt: 'Imagen 2' },
        { src: 'https://via.placeholder.com/800x300?text=Carrera+Administracion+3', alt: 'Imagen 3' },
      ],
      infoCards: [
        {
          title: 'Información General',
          content: 'Descripción general de la carrera.',
          details: 'Detalles adicionales sobre la carrera y sus requisitos.',
          show: false,
        },
        {
          title: 'Salidas Profesionales',
          content: 'Posibilidades de trabajo tras graduarse.',
          details: 'Las salidas incluyen: administración, recursos humanos, finanzas, etc.',
          show: false,
        },
        {
          title: 'Requisitos de Ingreso',
          content: 'Requisitos para ser admitido en la carrera.',
          details: 'Requiere un diploma de secundaria y una entrevista.',
          show: false,
        },
      ],
      contactDialog: false,
      contactName: '',
      contactEmail: '',
      contactMessage: '',
    };
  },
  methods: {
    goToHome() {
      this.tab = 0; // Cambiar a la pestaña de Inicio
    },
    goToAbout() {
      this.tab = 1; // Cambiar a la pestaña de Sobre la Carrera
    },
    goToSubjects() {
      this.tab = 2; // Cambiar a la pestaña de Oferta de Materias
    },
    goToResources() {
      this.tab = 3; // Cambiar a la pestaña de Recursos
    },
    goToForum() {
      this.tab = 4; // Cambiar a la pestaña de Foro
    },
    goToTumascora() {
      this.tab = 5; // Cambiar a la pestaña de Tumascora
    },
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
  mounted() {
    // Actualiza el reloj cada segundo
    setInterval(() => {
      this.time = new Date().toLocaleTimeString();
    }, 1000);
  },
};
</script>

<style scoped>
.animated {
  animation-duration: 1s;
}
</style>
