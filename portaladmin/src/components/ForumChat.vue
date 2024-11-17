<template>
    <HeaderPage />
    <h1>forum</h1>
</template>

<script>
import HeaderPage from './HeaderPage.vue';


export default {
  name: 'HomePage',
  components: {
    HeaderPage
  }
}
</script>

<style scoped>
.HeaderPage {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: white;
  width: 100%;
}

</style>