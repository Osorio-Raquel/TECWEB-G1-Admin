<template>
  <div>
    <HomePageBanner />
    <IntroductionBanner />
    <CareerOpportunities />
    <InnovationHighlights />
    <StudentsOp /> <!-- Aquí se incluye el carrusel de opiniones -->
  </div>
</template>

<script>
import HomePageBanner from './HomePageBaner.vue';
import IntroductionBanner from './IntroductionBanner.vue';
import CareerOpportunities from './CareerOpportunities.vue';
import InnovationHighlights from './InnovationHighlights.vue';
import StudentsOp from './StudentsOp.vue'; // Importamos el componente StudentsOp

export default {
  name: 'HomePage',
  components: {
    HomePageBanner,
    IntroductionBanner,
    CareerOpportunities,
    InnovationHighlights,
    StudentsOp, // Registramos el componente StudentsOp
  },
};
</script>

<style scoped>
/* Aquí pueden ir estilos generales para la página de inicio si es necesario */
</style>
