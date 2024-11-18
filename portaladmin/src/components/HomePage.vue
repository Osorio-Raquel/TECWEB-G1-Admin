<template>
  <div>
    <HomePageBanner />
    <IntroductionBanner />
    <CareerOpportunities />
    <InnovationHighlights />
  </div>
</template>

<script>
import HomePageBanner from './HomePageBaner.vue';
import IntroductionBanner from './IntroductionBanner.vue';
import CareerOpportunities from './CareerOpportunities.vue';
import InnovationHighlights from './InnovationHighlights.vue';

export default {
  name: 'HomePage',
  components: {
    HomePageBanner,
    IntroductionBanner,
    CareerOpportunities,
    InnovationHighlights,
  },
};
</script>
