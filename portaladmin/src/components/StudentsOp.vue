<template>
  <div class="opinions-section">
    <h2 class="section-title">CONTAMOS CON UNA GRAN COMUNIDAD</h2>
    <div class="opinions-wrapper">
      <div class="opinions-row top-row">
        <div class="opinion-card" v-for="(opinion, index) in repeatedOpinions" :key="index">
          <div class="icon">
            <img :src="opinion.icon" alt="Opinion Icon" />
          </div>
          <p class="opinion-text">{{ opinion.text }}</p>
        </div>
      </div>
      <div class="opinions-row bottom-row">
        <div class="opinion-card" v-for="(opinion, index) in repeatedOpinions" :key="index">
          <div class="icon">
            <img :src="opinion.icon" alt="Opinion Icon" />
          </div>
          <p class="opinion-text">{{ opinion.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StudentsOp',
  data() {
    return {
      opinions: [
        { icon: 'https://via.placeholder.com/50', text: 'Esta carrera me ha permitido desarrollarme como profesional.' },
        { icon: 'https://via.placeholder.com/50', text: 'El enfoque práctico es ideal para mi crecimiento.' },
        { icon: 'https://via.placeholder.com/50', text: 'Los proyectos colaborativos me han ayudado a mejorar mis habilidades.' },
        { icon: 'https://via.placeholder.com/50', text: 'La comunidad estudiantil es muy activa y siempre dispuesta a ayudar.' },
        { icon: 'https://via.placeholder.com/50', text: 'Los profesores son expertos y brindan apoyo constante.' },
        { icon: 'https://via.placeholder.com/50', text: 'Me encanta cómo la carrera fomenta la innovación y creatividad.' },
      ]
    };
  },
  computed: {
    repeatedOpinions() {
      return [...this.opinions, ...this.opinions];
    }
  }
};
</script>

<style scoped>
.opinions-section {
  padding: 40px;
  text-align: center;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 30px;
  color: #333;
  font-weight: bold;
}

.opinions-wrapper {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.opinions-row {
  display: flex;
  justify-content: space-evenly;
}

.top-row {
  animation: scrollTopRow 15s linear infinite;
  margin-bottom: 60px; /* Aumenté la separación entre filas */
}

.bottom-row {
  animation: scrollBottomRow 15s linear infinite;
}

.opinion-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 30px; /* Mayor separación entre tarjetas */
  padding: 25px;
  border: 1px solid #ddd;
  border-radius: 12px;
  background-color: #f9f9f9;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  max-width: 350px; /* Aumenté el ancho máximo de las tarjetas */
  height: 300px; /* Aumenté la altura de las tarjetas */
}

.icon img {
  width: 70px; /* Iconos más grandes */
  height: 70px; /* Iconos más grandes */
  border-radius: 50%;
  margin-bottom: 20px; /* Separación mayor entre icono y texto */
}

.opinion-text {
  font-size: 1.2rem; /* Aumenté el tamaño de la fuente */
  font-weight: 500;
  color: #555;
  text-align: center;
}

/* Animación de desplazamiento hacia la izquierda para la fila superior */
@keyframes scrollTopRow {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

/* Animación de desplazamiento hacia la derecha para la fila inferior */
@keyframes scrollBottomRow {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
