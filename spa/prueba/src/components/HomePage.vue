<template>
  <v-card>
    <!-- Título de la página de inicio -->
    <v-card-title class="headline text-primary">Inicio</v-card-title>
    
    <!-- Texto de bienvenida animado -->
    <v-card-text class="text-center animated fadeIn">
      <p class="welcome-message">
        Bienvenido a la Carrera de Administración de Empresas. Explora las oportunidades y recursos que tenemos para ti.
      </p>
    </v-card-text>

    <!-- Carrusel de Imágenes -->
    <v-carousel cycle hide-delimiter-background height="400px" class="animated slideInLeft">
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-img :src="slide.src" :alt="slide.alt" contain>
          <div class="overlay">
            <h2 class="white--text">{{ slide.title }}</h2>
            <p class="white--text">{{ slide.description }}</p>
          </div>
        </v-img>
      </v-carousel-item>
    </v-carousel>

    <!-- Sección de características con imágenes y animaciones -->
    <v-container class="mt-5 animated fadeInUp">
      <v-row>
        <v-col
          v-for="(feature, index) in features"
          :key="index"
          class="animated bounceIn"
          cols="12"
          md="4"
        >
          <v-card class="feature-card">
            <v-img :src="feature.image" height="150px" contain></v-img>
            <v-card-title class="text-center">{{ feature.title }}</v-card-title>
            <v-card-text>{{ feature.description }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Mensaje destacado con animación -->
    <v-card class="highlight-card cyan darken-2 white--text text-center py-5 mt-5 animated fadeInUp">
      <v-card-title class="headline">¡Forma Parte de Nuestra Comunidad!</v-card-title>
      <v-card-text>
        Únete a cientos de estudiantes que ya están explorando nuevas oportunidades en administración y negocios.
      </v-card-text>
      <v-btn color="white" class="mx-auto mt-3" outlined>Únete Ahora</v-btn>
    </v-card>

    <!-- Sección de Testimonios con animación -->
    <v-container class="mt-5 animated zoomIn">
      <v-row>
        <v-col cols="12" class="text-center">
          <h2 class="text-primary headline">Testimonios</h2>
          <p>Lo que nuestros estudiantes tienen que decir sobre la carrera de Administración de Empresas</p>
        </v-col>
        <v-col v-for="(testimonial, index) in testimonials" :key="index" cols="12" md="4" class="animated fadeIn">
          <v-card class="testimonial-card">
            <v-img :src="testimonial.image" height="100px" class="testimonial-image" contain></v-img>
            <v-card-title class="text-center">{{ testimonial.name }}</v-card-title>
            <v-card-text>{{ testimonial.text }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      slides: [
        {
          src: 'https://via.placeholder.com/800x400?text=Bienvenido',
          alt: 'Bienvenido',
          title: '¡Bienvenido!',
          description: 'Inicia tu viaje en Administración de Empresas.',
        },
        {
          src: 'https://via.placeholder.com/800x400?text=Explora+oportunidades',
          alt: 'Oportunidades',
          title: 'Explora Oportunidades',
          description: 'Descubre las diversas áreas en las que puedes especializarte.',
        },
        {
          src: 'https://via.placeholder.com/800x400?text=Unete+a+la+comunidad',
          alt: 'Comunidad',
          title: 'Únete a la Comunidad',
          description: 'Colabora y aprende con otros estudiantes.',
        },
      ],
      features: [
        {
          title: 'Planes de Estudio Innovadores',
          description: 'Programas actualizados que se adaptan a las necesidades del mercado laboral actual.',
          image: 'https://via.placeholder.com/150?text=Estudios',
        },
        {
          title: 'Mentoría Personalizada',
          description: 'Acceso a asesores experimentados para guiar tu desarrollo profesional.',
          image: 'https://via.placeholder.com/150?text=Mentoría',
        },
        {
          title: 'Recursos en Línea',
          description: 'Biblioteca digital y materiales de aprendizaje en línea para mejorar tu experiencia.',
          image: 'https://via.placeholder.com/150?text=Recursos',
        },
      ],
      testimonials: [
        {
          name: 'Carlos Pérez',
          text: 'La carrera de Administración me ha dado las herramientas que necesitaba para crecer profesionalmente.',
          image: 'https://via.placeholder.com/100?text=Carlos',
        },
        {
          name: 'Ana López',
          text: 'Los recursos y mentoría personalizada hicieron toda la diferencia en mi desarrollo.',
          image: 'https://via.placeholder.com/100?text=Ana',
        },
        {
          name: 'Miguel Fernández',
          text: 'Gracias a la carrera, pude desarrollar habilidades que ahora uso en mi trabajo diario.',
          image: 'https://via.placeholder.com/100?text=Miguel',
        },
      ],
    };
  },
};
</script>

<style scoped>
.overlay {
  position: absolute;
  bottom: 20px;
  left: 20px;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 10px;
  border-radius: 5px;
}
.feature-card {
  min-height: 250px;
  transition: transform 0.3s ease;
}
.feature-card:hover {
  transform: scale(1.05);
}
.highlight-card {
  transition: transform 0.3s ease-in-out;
}
.highlight-card:hover {
  transform: scale(1.03);
}
.testimonial-card {
  min-height: 200px;
  padding: 20px;
}
.testimonial-image {
  border-radius: 50%;
  margin: auto;
}
.animated {
  animation-duration: 1s;
}
</style>
