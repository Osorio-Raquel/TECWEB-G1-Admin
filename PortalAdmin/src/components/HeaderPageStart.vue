<template>
    <div>
      <!-- Barra de navegación -->
      <div class="header-page">
        <!-- Fondo con animación de capa -->
        <span class="header-bg">
          <span class="header-bg-layers">
            <span class="header-bg-layer header-bg-layer-1 -Blue1"></span>
            <span class="header-bg-layer header-bg-layer-2 -Yellow"></span>
            <span class="header-bg-layer header-bg-layer-3 -Blue2"></span>
          </span>
        </span>

        <div class="header-cat-container">
        <HeaderCat />
      </div>
  
        <!-- Título principal -->
        <span class="header-inner">
        <span class="header-inner-static">Administración de Empresas</span>
      </span>
  
        <!-- Botones del menú -->
        <div class="button-nav">
          <button
            class="nav-button"
            :class="{ active: currentComponent === 'HomePage' }"
            @click="changeComponent('HomePage')"
          >
            Inicio
          </button>
          <button
            class="nav-button"
            :class="{ active: currentComponent === 'AboutCarrer' }"
            @click="changeComponent('AboutCarrer')"
          >
            Sobre la carrera
          </button>
        </div>
  
        <!-- Botón de Login -->
        <button class="login-button" @click="goToLogin">
          <i class="fas fa-user-circle"></i>
          Login
        </button>
      </div>
  
      <!-- Contenido principal -->
      <div class="main-container">
        <div class="content">
          <!-- Carga dinámica del componente -->
          <component :is="currentComponent" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import HomePage from './HomePage.vue';
  import AboutCarrer from './AboutCarrer.vue';
  import LoginPage from './LoginPage.vue';
  import HeaderCat from './HeaderCat.vue';
  
  export default {
    name: 'HeaderPageStart',
    components: {
      HomePage,
      AboutCarrer,
      LoginPage,
      HeaderCat,
    },
    data() {
      return {
        currentComponent: 'HomePage', // Componente inicial
      };
    },
    methods: {
      changeComponent(componentName) {
        this.currentComponent = componentName; // Cambia el componente mostrado
      },
      goToLogin() {
        this.currentComponent = 'LoginPage'; // Navega al componente de inicio de sesión
      },
    },
  };
  </script>
  
  <style scoped>
  /* Reutiliza los estilos del componente original */
  .header-page {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #00296B;
    padding: 1rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    width: 100%;
    height: 110px;
  }
  
  .header-inner {
    color: white;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 36px;
    text-align: center;
  }
  
  .button-nav {
    display: flex;
    gap: 15px;
  }
  
  .nav-button {
    padding: 15px 20px;
    background-color: transparent;
    border: none;
    color: white;
    font-size: 17px;
    cursor: pointer;
    border-radius: 12px;
  }
  
  .nav-button.active {
    background-color: #00509D;
    color: white;
    font-weight: bold;
  }
  
  .login-button {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    background-color: #00509D;
    border: none;
    color: white;
    font-size: 16px;
    cursor: pointer;
    border-radius: 12px;
  }
  </style>
  