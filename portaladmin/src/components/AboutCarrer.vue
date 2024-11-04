<template>
  <v-card>
    <!-- Título de la sección -->
    <v-card-title class="headline text-primary animated fadeInDown">Sobre la Carrera de Administración de Empresas</v-card-title>

    <!-- Introducción animada -->
    <v-card-text class="animated fadeIn text-center my-4">
      <p>
        La carrera de Administración de Empresas te preparará para enfrentar los desafíos del mundo empresarial,
        desarrollando habilidades en liderazgo, finanzas, gestión, y la capacidad para innovar en un mercado competitivo.
      </p>
      <p>
        Nuestros egresados han tenido un impacto significativo en empresas de todos los tamaños, destacándose por su ética, 
        responsabilidad, y habilidad para liderar equipos de alto rendimiento.
      </p>
    </v-card-text>

    <!-- Sección de Historia con animaciones -->
    <v-container class="animated fadeInUp mt-5">
      <v-row>
        <v-col cols="12" md="6" class="text-center">
          <v-img src="https://via.placeholder.com/400x300?text=Historia" contain class="rounded-lg animated zoomIn"></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <h3 class="text-primary">Nuestra Historia</h3>
          <p>
            Desde sus inicios, nuestra carrera ha formado líderes que impactan positivamente en sus organizaciones 
            y comunidades. Con más de 20 años de experiencia, hemos evolucionado para ofrecer una educación que 
            responde a las necesidades del mundo moderno.
          </p>
          <p>
            Nos enorgullecemos de nuestros programas innovadores y de un claustro académico compuesto por expertos en 
            diversas áreas de la administración, finanzas, y recursos humanos.
          </p>
        </v-col>
      </v-row>
    </v-container>

    <!-- Misión y Visión con animación de entrada gradual -->
    <v-container class="animated fadeInLeft mt-5">
      <v-row>
        <v-col cols="12" md="6">
          <h3 class="text-primary">Nuestra Misión</h3>
          <p>
            Formar profesionales competentes y comprometidos, capaces de liderar e innovar en el campo de la 
            administración de empresas, contribuyendo al desarrollo económico y social de nuestra sociedad.
          </p>
          <p>
            Creemos en el poder de la educación para transformar vidas y fomentar el desarrollo sostenible de nuestras comunidades.
          </p>
        </v-col>
        <v-col cols="12" md="6">
          <h3 class="text-primary">Nuestra Visión</h3>
          <p>
            Ser un programa académico de excelencia, reconocido a nivel nacional e internacional por su calidad 
            y por el impacto de sus egresados en el ámbito empresarial y comunitario.
          </p>
          <p>
            Nos proyectamos como un referente en la educación empresarial, con un enfoque en la ética, la responsabilidad y la innovación.
          </p>
        </v-col>
      </v-row>
    </v-container>

    <!-- Valores con Iconos y efecto de escala al pasar el cursor -->
    <v-container class="animated fadeInRight mt-5">
      <v-row>
        <v-col cols="12" class="text-center">
          <h3 class="text-primary headline">Nuestros Valores</h3>
          <p>Los valores que guían nuestra carrera y el desarrollo profesional de nuestros estudiantes.</p>
        </v-col>
        <v-col v-for="(value, index) in values" :key="index" cols="12" md="4" class="text-center animated zoomIn">
          <v-icon color="cyan" large class="value-icon">{{ value.icon }}</v-icon>
          <h4 class="mt-2">{{ value.title }}</h4>
          <p>{{ value.description }}</p>
        </v-col>
      </v-row>
    </v-container>

    <!-- Video de Presentación -->
    <v-container class="text-center my-5 animated fadeInUp">
      <h3 class="text-primary headline">Conoce Más Sobre Nosotros</h3>
      <p>Descubre en este video todo lo que nuestra carrera tiene para ofrecer.</p>
      <youtube video-id="ZUYWFpPhA3g"></youtube>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'AboutCarrer',
  data() {
    return {
      values: [
        {
          icon: 'mdi-lightbulb-on-outline',
          title: 'Innovación',
          description: 'Fomentamos la creatividad y el pensamiento innovador en nuestros estudiantes, preparándolos para adaptarse y sobresalir en un entorno empresarial dinámico.',
        },
        {
          icon: 'mdi-account-group',
          title: 'Trabajo en Equipo',
          description: 'Creemos en el valor de la colaboración y el trabajo conjunto para alcanzar metas, inspirando a nuestros estudiantes a trabajar eficazmente en equipo.',
        },
        {
          icon: 'mdi-scale-balance',
          title: 'Ética y Responsabilidad',
          description: 'Formamos profesionales con principios éticos sólidos y responsabilidad social, listos para tomar decisiones con integridad y compromiso.',
        },
      ],
    };
  },
};
</script>

<style scoped>
.animated {
  animation-duration: 1s;
}
.value-icon {
  transition: transform 0.3s;
}
.value-icon:hover {
  transform: scale(1.2);
}
</style>
