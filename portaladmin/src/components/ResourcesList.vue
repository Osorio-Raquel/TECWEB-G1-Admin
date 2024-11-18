<template>
  <div class="library-container">
    <div class="header">
      <h1>Explora los Recursos Más Útiles para Administración de Empresas</h1>
    </div>

    <!-- Pestañas -->
    <div class="tabs">
      <button class="tab" @click="selectTab('all')" :class="{ active: selectedTab === 'all' }">Todo</button>
      <button class="tab" @click="selectTab('documentación')" :class="{ active: selectedTab === 'documentación' }">
        Documentación
      </button>
      <button class="tab" @click="selectTab('tutoriales')" :class="{ active: selectedTab === 'tutoriales' }">
        Tutoriales
      </button>
      <button class="tab" @click="selectTab('libros')" :class="{ active: selectedTab === 'libros' }">
        Libros
      </button>
      <button class="tab" @click="selectTab('herramientas')" :class="{ active: selectedTab === 'herramientas' }">
        Herramientas
      </button>
    </div>

    <!-- Grid de recursos -->
    <div class="library-grid">
      <div
        v-for="(resource, index) in filteredResources"
        :key="resource.id"
        class="library-card"
        :style="{ animationDelay: `${index * 0.2}s` }"
      >
        <div class="card-content">
          <h2>{{ resource.name }}</h2>
          <p>{{ resource.category }}</p>
          <a :href="resource.url" target="_blank" rel="noopener noreferrer">Descargar</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LibraryComponent',
  data() {
    return {
      selectedTab: 'all',
      resources: [
        {
          id: 1,
          name: 'Introducción a la Gestión Empresarial',
          url: 'https://www.example.com',
          category: 'Libros',
        },
        {
          id: 2,
          name: 'Planificación Estratégica: Guía Práctica',
          url: 'https://www.example.com',
          category: 'Libros',
        },
        {
          id: 3,
          name: 'Marketing para Empresas en Crecimiento',
          url: 'https://www.example.com',
          category: 'Libros',
        },
        {
          id: 4,
          name: 'Documentación de Vue.js',
          url: 'https://vuejs.org/v2/guide/',
          category: 'Documentación',
        },
        {
          id: 5,
          name: 'Trucos de CSS para Empresas',
          url: 'https://css-tricks.com/',
          category: 'Tutoriales',
        },
        {
          id: 6,
          name: 'Gestión Financiera para Emprendedores',
          url: 'https://www.example.com',
          category: 'Libros',
        },
        {
          id: 7,
          name: 'Cómo Crear una Marca Exitosa',
          url: 'https://www.example.com',
          category: 'Tutoriales',
        },
        {
          id: 8,
          name: 'Documentos de MDN sobre HTML y CSS',
          url: 'https://developer.mozilla.org/',
          category: 'Documentación',
        },
        {
          id: 9,
          name: 'Curso de Finanzas Corporativas',
          url: 'https://www.example.com',
          category: 'Tutoriales',
        },
        {
          id: 10,
          name: 'FreeCodeCamp en Español para Administradores',
          url: 'https://www.freecodecamp.org/espanol/',
          category: 'Tutoriales',
        },
        {
          id: 11,
          name: 'Aprende en W3Schools sobre Administración',
          url: 'https://www.w3schools.com/es/',
          category: 'Tutoriales',
        },
        {
          id: 12,
          name: 'Herramientas de Productividad Empresarial',
          url: 'https://www.example.com',
          category: 'Herramientas',
        },
      ],
    };
  },
  computed: {
    filteredResources() {
      if (this.selectedTab === 'all') {
        return this.resources;
      }
      return this.resources.filter((resource) => resource.category.toLowerCase() === this.selectedTab);
    },
  },
  methods: {
    selectTab(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>

<style scoped>
/* Contenedor principal */
.library-container {
  padding: 2rem;
  background: linear-gradient(to right, #e0f7fa, #ffffff);
  border-radius: 10px;
  text-align: center;
}

/* Encabezado */
.header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #01579b;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  letter-spacing: 0.5px;
  animation: fadeIn 1.2s ease-out;
}

/* Pestañas */
.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  gap: 1rem;
}

.tab {
  background-color: #b3e5fc;
  color: #01579b;
  font-weight: bold;
  padding: 0.7rem 1.5rem;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.tab.active {
  background-color: #01579b;
  color: #fff;
  transform: translateY(-2px);
}

.tab:hover {
  background-color: #0288d1;
  color: #fff;
}

/* Grid de recursos */
.library-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}

/* Tarjetas */
.library-card {
  width: 220px;
  height: 280px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: fadeInUp 0.8s ease both;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.library-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

/* Contenido de las tarjetas */
.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
}

.card-content h2 {
  font-size: 1.2rem;
  color: #01579b;
  margin: 0;
}

.card-content p {
  font-size: 0.9rem;
  color: #4f5b62;
}

.card-content a {
  background: #01579b;
  color: #ffffff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  transition: background 0.3s ease, transform 0.2s ease;
}

.card-content a:hover {
  background: #0288d1;
  transform: scale(1.1);
}

/* Animaciones */
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
