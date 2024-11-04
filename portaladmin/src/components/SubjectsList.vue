<template>
  <v-card>
    <!-- Título de la sección -->
    <v-card-title class="headline text-primary animated fadeInDown">Oferta de Materias</v-card-title>

    <!-- Introducción animada -->
    <v-card-text class="animated fadeIn text-center my-4">
      <p>
        Nuestra carrera ofrece una variedad de materias diseñadas para preparar a los estudiantes en todas las áreas esenciales de la administración de empresas.
      </p>
      <p>
        Explora cada materia para conocer los conocimientos y habilidades que adquirirás en cada una de ellas.
      </p>
    </v-card-text>

    <!-- Tarjetas de Materias -->
    <v-container class="animated fadeInUp mt-5">
      <v-row>
        <v-col v-for="(subject, index) in subjects" :key="index" cols="12" md="4" class="text-center">
          <v-card class="subject-card hoverable">
            <v-card-title class="text-primary">{{ subject.name }}</v-card-title>
            <v-card-subtitle>{{ subject.incentive }}</v-card-subtitle>
            <v-card-text>
              {{ subject.description }}
            </v-card-text>
            <v-expand-transition>
              <div v-if="subject.showMore">
                <v-img :src="subject.image" height="150px" class="mb-3 rounded-lg"></v-img>
                <p>{{ subject.longDescription }}</p>
              </div>
            </v-expand-transition>
            <v-card-actions>
              <v-btn color="cyan" @click="toggleShowMore(index)">
                {{ subject.showMore ? 'Mostrar Menos' : 'Mostrar Más' }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Beneficios y llamado a la acción -->
    <v-container class="animated fadeInUp my-5 text-center">
      <h3 class="text-primary headline">Beneficios de Cada Materia</h3>
      <p>Cada materia está diseñada para desarrollar competencias esenciales y aportar una ventaja competitiva en el mercado laboral.</p>
      <v-row>
        <v-col v-for="(benefit, index) in benefits" :key="index" cols="12" md="4" class="text-center">
          <v-icon color="cyan" large>{{ benefit.icon }}</v-icon>
          <h4 class="mt-2">{{ benefit.title }}</h4>
          <p>{{ benefit.description }}</p>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'SubjectsList',
  data() {
    return {
      subjects: [
        {
          name: 'Introducción a la Administración',
          description: 'Explora los fundamentos de la administración y las prácticas clave en el ámbito empresarial.',
          longDescription: 'Esta materia cubre temas esenciales de administración, incluyendo liderazgo, planificación, y estrategias efectivas para gestionar organizaciones.',
          incentive: 'Fundamento esencial para toda la carrera.',
          image: 'https://via.placeholder.com/400x200?text=Introduccion+Administracion',
          showMore: false,
        },
        {
          name: 'Marketing y Ventas',
          description: 'Aprende técnicas de marketing y ventas para maximizar el impacto en el mercado.',
          longDescription: 'Conoce cómo desarrollar estrategias de marketing exitosas y técnicas de ventas que resalten el valor de productos y servicios en mercados competitivos.',
          incentive: 'Desarrolla habilidades de comunicación efectiva.',
          image: 'https://via.placeholder.com/400x200?text=Marketing+Ventas',
          showMore: false,
        },
        {
          name: 'Finanzas Empresariales',
          description: 'Adquiere conocimientos en gestión financiera y toma de decisiones económicas.',
          longDescription: 'Este curso proporciona conocimientos sobre contabilidad, análisis financiero, y toma de decisiones económicas para optimizar los recursos de una empresa.',
          incentive: 'Clave para gestionar los recursos de manera eficiente.',
          image: 'https://via.placeholder.com/400x200?text=Finanzas+Empresariales',
          showMore: false,
        },
        {
          name: 'Recursos Humanos',
          description: 'Comprende la gestión de personal y el desarrollo de talento dentro de una organización.',
          longDescription: 'Aprende a gestionar talento, desarrollar políticas de recursos humanos y promover un ambiente de trabajo positivo y productivo.',
          incentive: 'Fundamental para liderar equipos exitosos.',
          image: 'https://via.placeholder.com/400x200?text=Recursos+Humanos',
          showMore: false,
        },
        {
          name: 'Estrategia Empresarial',
          description: 'Desarrolla la capacidad de diseñar y ejecutar estrategias competitivas en el mercado.',
          longDescription: 'Este curso enseña cómo evaluar el entorno empresarial y desarrollar estrategias competitivas para posicionar a una empresa en el mercado.',
          incentive: 'Impulsa habilidades de pensamiento estratégico.',
          image: 'https://via.placeholder.com/400x200?text=Estrategia+Empresarial',
          showMore: false,
        },
        {
          name: 'Ética y Responsabilidad Social',
          description: 'Explora los principios éticos y la responsabilidad social en el entorno empresarial.',
          longDescription: 'Comprende los principios éticos aplicados al mundo empresarial y la importancia de la responsabilidad social en el desarrollo sostenible.',
          incentive: 'Fomenta una visión empresarial ética y responsable.',
          image: 'https://via.placeholder.com/400x200?text=Etica+Responsabilidad',
          showMore: false,
        },
      ],
      benefits: [
        {
          icon: 'mdi-book-open-page-variant',
          title: 'Conocimientos Prácticos',
          description: 'Las materias incluyen estudios de caso y ejemplos reales para aplicar lo aprendido.',
        },
        {
          icon: 'mdi-account-tie',
          title: 'Desarrollo Profesional',
          description: 'Cada curso está enfocado en preparar a los estudiantes para puestos de liderazgo.',
        },
        {
          icon: 'mdi-briefcase',
          title: 'Preparación para el Mercado',
          description: 'Las materias están diseñadas para satisfacer las demandas del mercado laboral actual.',
        },
      ],
    };
  },
  methods: {
    toggleShowMore(index) {
      this.subjects[index].showMore = !this.subjects[index].showMore;
    },
  },
};
</script>

<style scoped>
.subject-card {
  min-height: 250px;
  transition: transform 0.3s ease;
}
.subject-card:hover {
  transform: scale(1.05);
}
.highlight-card {
  transition: transform 0.3s ease-in-out;
}
.highlight-card:hover {
  transform: scale(1.03);
}
.animated {
  animation-duration: 1s;
}
</style>
