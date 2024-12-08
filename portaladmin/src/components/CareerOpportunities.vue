<template>
  <div class="career-opportunities">
    <!-- Contenedor de la estructura izquierda y derecha -->
    <div class="left-side">
      <h2 class="animated-text">Oportunidades <br>Profesionales</h2>
    </div>
    <div class="right-side">
      <!-- Tarjetas de oportunidades -->
      <div class="cards-row">
        <div class="opportunity-card" v-for="(item, index) in opportunities.slice(0, 2)" :key="index">
          <div class="card">
            <div class="card-inner">
              <div class="card-front">
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>
              </div>
              <div class="card-back">
                <h3>{{ item.title }}</h3>
               
              </div>
            </div>
          </div>
        </div>
        <div class="opportunity-card" v-for="(item, index) in opportunities.slice(2, 4)" :key="index">
          <div class="card">
            <div class="card-inner">
              <div class="card-front">
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>
              </div>
              <div class="card-back">
                <h3>{{ item.title }}</h3>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CareerOpportunities',
  data() {
    return {
      opportunities: [
        { title: 'Gerente de Negocios', description: 'Lidera empresas hacia el éxito mediante estrategias efectivas.' },
        { title: 'Consultor Empresarial', description: 'Asesora organizaciones para optimizar procesos y maximizar resultados.' },
        { title: 'Emprendedor Innovador', description: 'Crea y dirige tu propio negocio en un entorno competitivo.' },
        { title: 'Especialista en Finanzas', description: 'Gestiona presupuestos y toma decisiones financieras clave.' },
      ],
      scrolled: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const cardsElement = this.$refs.cards;
      if (cardsElement && window.scrollY + window.innerHeight >= cardsElement.offsetTop) {
        this.scrolled = true;
      }
    },
  },
};
</script>

<style scoped>
/* Estilo para la estructura izquierda y derecha */
.career-opportunities {
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  background-color: #f4f9ff;
}

.left-side {
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 2rem; /* Aumentamos el tamaño de la fuente */
  animation: moveText 5s infinite linear; /* Animación de movimiento constante */
}

/* Animación de movimiento constante */
@keyframes moveText {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(50px); /* Movimiento hacia la derecha */
  }
  100% {
    transform: translateX(0);
  }
}


.right-side {
  width: 55%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

/* Animación de entrada para el texto */
.animated-text {
  opacity: 0;
  animation: fadeInText 2s forwards;
}

@keyframes fadeInText {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Tarjetas 2x2 (disposición de flex en el lado derecho) */
.cards-row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
}

.opportunity-card {
  width: 48%;
  margin: 0 auto;
  perspective: 1000px;
}

.card-inner {
  width: 100%;
  height: 250px;
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.card:hover .card-inner {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card-front {
  background: #ffffff;
  color: #333;
}

.card-back {
  background: #00296B;
  color: white;
  transform: rotateY(180deg);
  text-align: center;
}

h3 {
  font-size: medium;
  font-weight: bold;
  color: #333;
}

p {
  font-size: 20px;
  color: #555;
}

.card-front h3,
.card-back h3 {
  font-size: 40px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 1rem;
}

.card-back p {
  color: #fff;
}

/* Media query para pantallas pequeñas */
@media (max-width: 768px) {
  .career-opportunities {
    flex-direction: column; /* Apilar los elementos verticalmente */
    padding: 1rem;
  }

  .left-side, .right-side {
    width: 100%; /* Hacer que ambos ocupen el 100% del ancho */
    margin-bottom: 1rem; /* Añadir espacio entre los contenedores */
  }

  .right-side {
    order: 1; /* Colocar el lado izquierdo sobre el derecho */
  }

  /* Ajuste del tamaño de las tarjetas para pantallas pequeñas */
  .opportunity-card {
    width: 100%; /* Las tarjetas deben ocupar todo el ancho disponible */
    margin-bottom: 1rem; /* Añadir espacio entre las tarjetas */
  }

  .card {
    height: auto; /* Permitir que las tarjetas tengan un tamaño ajustado al contenido */
  }

  .card-inner {
    height: auto + 50px; /* Ajustar la altura automáticamente */
  }

  /* Ajustar tamaño de texto para pantallas pequeñas */
  .card-front h3, .card-back h3 {
    font-size: 20px; /* Reducir el tamaño de los encabezados */
  }

  .card-front p, .card-back p {
    font-size: 16px; /* Reducir el tamaño de los párrafos */
  }

  h3 {
    font-size: 24px; /* Ajustar el tamaño de los títulos */
  }

  /* Opcionalmente, ajustar el tamaño de la animación de texto */
  .animated-text {
    font-size: 1.5rem; /* Hacer el texto más pequeño en móviles */
  }
}


/* Estilo de las tarjetas con efecto flip */
@keyframes fadeInCards {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.right-side {
  opacity: 1;
  animation: fadeInCards 2s forwards;
}

/* Media query para pantallas pequeñas */
@media (max-width: 768px) {
  .career-opportunities {
    flex-direction: column; /* Apilar los elementos verticalmente */
    padding: 1rem;
  }

  .left-side, .right-side {
    width: 100%; /* Hacer que ambos ocupen el 100% del ancho */
    margin-bottom: 1rem; /* Añadir espacio entre los contenedores */
  }

  .right-side {
    order: 1; /* Colocar el lado izquierdo sobre el derecho */
  }
}
</style>
