<template>
  <v-card>
    <!-- Título de la sección -->
    <v-card-title class="headline text-primary">Recursos para Estudiantes de Administración</v-card-title>

    <!-- Introducción -->
    <v-card-text class="text-center my-4">
      <p>
        Aquí encontrarás una selección de recursos útiles que pueden ayudarte a lo largo de tu carrera.
      </p>
      <p>
        Explora libros, artículos, estudios de caso y herramientas digitales para profundizar en temas clave de administración.
      </p>
    </v-card-text>

    <!-- Biblioteca de Recursos -->
    <v-container class="mt-5">
      <v-row>
        <v-col v-for="(resource, index) in resources" :key="index" cols="12" md="4">
          <v-card class="resource-card hoverable">
            <v-img :src="resource.image" height="150px" class="mb-3 rounded-lg"></v-img>
            <v-card-title class="text-primary">{{ resource.title }}</v-card-title>
            <v-card-subtitle>{{ resource.category }}</v-card-subtitle>
            <v-card-text>
              {{ resource.description }}
            </v-card-text>
            <v-expand-transition>
              <div v-if="resource.showMore">
                <p>{{ resource.longDescription }}</p>
              </div>
            </v-expand-transition>
            <v-card-actions>
              <v-btn color="cyan" @click="toggleShowMore(index)">
                {{ resource.showMore ? 'Mostrar Menos' : 'Leer Más' }}
              </v-btn>
              <v-btn color="primary" :href="resource.link" target="_blank">
                Descargar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'ResourcesList',
  data() {
    return {
      resources: [
        {
          title: 'Introducción a la Administración',
          category: 'Libro',
          description: 'Este libro ofrece una visión general de los principios de administración y gestión de empresas.',
          longDescription: 'Incluye temas fundamentales como liderazgo, planificación, control, y organización. Ideal para quienes inician su formación en administración.',
          image: 'https://via.placeholder.com/400x200?text=Introduccion+Administracion',
          link: 'https://example.com/intro-admin.pdf',
          showMore: false,
        },
        {
          title: 'Marketing Digital en la Era Moderna',
          category: 'Artículo',
          description: 'Un artículo que explora el impacto del marketing digital en las empresas modernas.',
          longDescription: 'Este artículo analiza estrategias digitales, la presencia en redes sociales, y cómo adaptarse a un mercado en constante cambio.',
          image: 'https://via.placeholder.com/400x200?text=Marketing+Digital',
          link: 'https://example.com/marketing-digital.pdf',
          showMore: false,
        },
        {
          title: 'Caso de Estudio: Estrategias de Liderazgo',
          category: 'Estudio de Caso',
          description: 'Un caso de estudio sobre liderazgo eficaz en organizaciones exitosas.',
          longDescription: 'Analiza cómo las estrategias de liderazgo pueden influir en el éxito organizacional y cómo aplicarlas en entornos corporativos.',
          image: 'https://via.placeholder.com/400x200?text=Estudio+Liderazgo',
          link: 'https://example.com/liderazgo-caso.pdf',
          showMore: false,
        },
        {
          title: 'Guía de Finanzas para No Financieros',
          category: 'Guía',
          description: 'Una guía introductoria para entender los conceptos básicos de finanzas en empresas.',
          longDescription: 'Esta guía facilita la comprensión de temas financieros, como contabilidad básica, presupuestos, y análisis financiero.',
          image: 'https://via.placeholder.com/400x200?text=Guia+Finanzas',
          link: 'https://example.com/guia-finanzas.pdf',
          showMore: false,
        },
        {
          title: 'Responsabilidad Social Corporativa',
          category: 'Investigación',
          description: 'Investigación sobre la importancia de la responsabilidad social en las empresas.',
          longDescription: 'Explora los principios de responsabilidad social y su impacto en la reputación y sostenibilidad de las organizaciones.',
          image: 'https://via.placeholder.com/400x200?text=Responsabilidad+Social',
          link: 'https://example.com/rsc-investigacion.pdf',
          showMore: false,
        },
        {
          title: 'Herramientas Digitales para la Productividad',
          category: 'Herramienta',
          description: 'Lista de herramientas digitales recomendadas para aumentar la productividad.',
          longDescription: 'Incluye software y aplicaciones para la gestión de proyectos, organización de tareas, y trabajo colaborativo.',
          image: 'https://via.placeholder.com/400x200?text=Herramientas+Productividad',
          link: 'https://example.com/herramientas-productividad.pdf',
          showMore: false,
        },
      ],
    };
  },
  methods: {
    toggleShowMore(index) {
      this.resources[index].showMore = !this.resources[index].showMore;
    },
  },
};
</script>

<style scoped>
.resource-card {
  min-height: 250px;
  transition: transform 0.3s ease;
}
.resource-card:hover {
  transform: scale(1.05);
}
.animated {
  animation-duration: 1s;
}
</style>
