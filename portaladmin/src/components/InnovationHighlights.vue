<template>
  <div class="innovation-highlights">
    <h2>Innovación en Administración de Empresas</h2>
    <div class="highlight" v-for="(item, index) in innovations" :key="index">
      <div class="highlight-card">
        <img :src="item.image" :alt="item.title" class="highlight-image" />
        <div class="highlight-text">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
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
        { title: 'Transformación Digital', description: 'Aprende a integrar tecnologías digitales en la gestión empresarial.', image: 'https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { title: 'Estrategias de Sostenibilidad', description: 'Desarrolla modelos de negocio que respeten el medio ambiente.', image: 'https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { title: 'Toma de Decisiones Basada en Datos', description: 'Utiliza el análisis de datos para mejorar la toma de decisiones.', image: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { title: 'Inteligencia artificial', description: 'Utiliza el análisis de datos para mejorar la toma de decisiones.', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      ],
    };
  },
};
</script>

<style scoped>
/* Contenedor principal */
.innovation-highlights {
  padding: 3rem;
  background: linear-gradient(45deg, #e5ecf5, #becbe7);
  border-radius: 15px;
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 3rem;
  justify-items: center;
  animation: fadeIn 1s ease-out;
  font-size: 30px;
  align-items: center;
}

/* Tarjetas individuales */
.highlight-card {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: zoomIn 0.5s ease-in-out;
}

/* Imagen dentro de la tarjeta */
.highlight-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
  transition: transform 0.5s ease;
  border-radius: 8px;
}

/* Texto dentro de la tarjeta */
.highlight-text {
  position: absolute;
  bottom: 15px;
  left: 15px;
  right: 15px;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 15px;
  border-radius: 8px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

/* Títulos y descripción dentro del texto */
.highlight-text h3 {
  font-size: 1.4rem;
  font-weight: bold;
  color: #ffe600;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);
}

.highlight-text p {
  font-size: 1.1rem;
  color: #e0f7fa;
}

/* Efectos de hover */
.highlight-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
}

.highlight-card:hover .highlight-image {
  transform: scale(1.05);
}

.highlight-card:hover .highlight-text {
  opacity: 1;
}

/* Animaciones */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes zoomIn {
  from {
    transform: scale(0.9);
  }
  to {
    transform: scale(1);
  }
}
</style>
