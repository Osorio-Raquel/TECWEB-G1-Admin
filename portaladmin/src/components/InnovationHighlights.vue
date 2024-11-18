<template>
    <div class="innovation-highlights">
      <h2>Innovación en Administración de Empresas</h2>
      <div class="highlight" v-for="(item, index) in innovations" :key="index">
        <img :src="item.image" :alt="item.title" class="highlight-image" />
        <div class="highlight-text">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'InnovationHighlights',
    data() {
      return {
        innovations: [
          { title: 'Transformación Digital', description: 'Aprende a integrar tecnologías digitales en la gestión empresarial.', image: '/images/digital-transformation.jpg' },
          { title: 'Estrategias de Sostenibilidad', description: 'Desarrolla modelos de negocio que respeten el medio ambiente.', image: '/images/sustainability.jpg' },
          { title: 'Toma de Decisiones Basada en Datos', description: 'Utiliza el análisis de datos para mejorar la toma de decisiones.', image: '/images/data-driven.jpg' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .innovation-highlights {
    padding: 2rem;
    background-color: #e9f5f2;
    border-radius: 12px;
  }
  .highlight {
    display: flex;
    margin-bottom: 1.5rem;
  }
  .highlight-image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-right: 1rem;
    object-fit: cover;
  }
  .highlight-text {
    max-width: 600px;
  }
  </style>
  