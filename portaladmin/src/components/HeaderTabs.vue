<template>
  <div class="header-tabs-container">
    <!-- Navegación de pestañas -->
    <div class="tabs-nav">
      <!-- Mostrar pestañas en pantalla grande -->
      <div v-if="!isDropdown" class="tabs-list">
        <button
          v-for="(tab, index) in visibleTabs"
          :key="index"
          :class="['tab-button', { active: activeTab === index }]"
          @click="selectTab(index)"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- Menú desplegable en pantallas pequeñas -->
      <div v-else>
        <select v-model="activeTab" @change="selectTab(activeTab)" class="dropdown">
          <option v-for="(tab, index) in visibleTabs" :key="index" :value="index">
            {{ tab.label }}
          </option>
        </select>
      </div>
    </div>

    <!-- Contenido del componente según la pestaña activa -->
    <div class="tab-content">
      <component :is="tabs[activeTab].component"></component>
    </div>
  </div>
  <router-link
  v-for="(tab, index) in visibleTabs"
  :key="index"
  :to="tab.route"
  :class="['tab-button', { active: activeTab === index }]"
  @click="selectTab(index)"
>
  {{ tab.label }}
</router-link>

</template>

<script>
import HomePage from './HomePage.vue';
import AboutCarrer from './AboutCarrer.vue';
import SubjectsList from './SubjectsList.vue';


export default {
  name: "HeaderTabs",
  components: {
    HomePage,
    AboutCarrer,
    SubjectsList,
  },
  props: {
    tabs: {
      type: Array,
      required: true,
      default: () => [
        { label: "Inicio", route: "/" },  // Las rutas deben coincidir con las definidas en Vue Router
        { label: "Sobre la carrera", route: "/about" },
        { label: "Oferta de Materias", route: "/subjects" },
        // Aquí registra las demás pestañas
      ],
    },
  },
  data() {
    return {
      activeTab: 0, // Índice de la pestaña activa
      isDropdown: false, // Estado para saber si mostrar el menú desplegable
    };
  },
  computed: {
    visibleTabs() {
      const maxVisibleTabs = 4; // Ajusta cuántas pestañas caben
      return this.tabs.slice(0, maxVisibleTabs);
    },
  },
  methods: {
    selectTab(index) {
      this.activeTab = index; // Cambia la pestaña activa
    },
    checkScreenSize() {
      this.isDropdown = window.innerWidth < 768; // Activa el menú desplegable si la pantalla es pequeña
    },
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize); // Revisa el tamaño de pantalla al redimensionar
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkScreenSize);
  },
};
</script>

<style scoped>
.header-tabs-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  margin: auto;
  font-family: Arial, sans-serif;
  position: relative;
  z-index: 10;
}

.tabs-nav {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap; /* Permite que las pestañas se envuelvan */
}

.tabs-list {
  display: flex;
  justify-content: flex-start;
  overflow-x: auto; /* Permite que las pestañas se deslicen si no caben */
}

.tab-button {
  padding: 15px 20px;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  white-space: nowrap; /* Evita que el texto se divida */
}

.tab-button:hover {
  box-shadow: inset 0px 0px 25px #1479EA;
  border-radius: 12px;
}

.tab-button.active {
  background-color: #00509D;
  color: white;
  font-weight: bold;
  border-radius: 12px;
}

.dropdown {
  color: white;
  padding: 10px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  cursor: pointer;
  background-color: #00509D;
}
</style>
