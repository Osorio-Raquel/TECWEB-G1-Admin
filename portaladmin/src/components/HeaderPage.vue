<template>
  <head><link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
  </head>
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
      <!-- Contenedor de HeaderCat con un cuadrado pequeño -->
      <div class="header-cat-container">
        <HeaderCat />
      </div>

      <!-- Títulos y barra de navegación -->
      <span class="header-inner">
        <span class="header-inner-static">Administración de Empresas</span>
        <span class="header-inner-hover">Administración de Empresas</span>
      </span>

      <!-- Botones para cambiar la sección -->
      <div class="button-nav" :class="{ 'menu-open': menuOpen }">
        <button
          v-for="(section, index) in sections"
          :key="index"
          class="nav-button"
          :class="{ active: currentComponent === section.component }"
          @click="changeComponent(section.component)"
        >
          {{ section.label }}
        </button>
      </div>

      

            <!-- Botón de Login -->
            <button class="login-button" @click="goToLogin">
        <i class="fas fa-user-circle"></i>
        {{ userName ? userName : 'Login' }}
      </button>

      <!-- Icono de menú (para pantallas pequeñas) -->
      <button class="menu-toggle" @click="toggleMenu">☰</button>
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
import HeaderCat from './HeaderCat.vue';
import HomePage from './HomePage.vue';
import AboutCarrer from './AboutCarrer.vue';
import SubjectsList from './SubjectsList.vue';
import ResourcesList from './ResourcesList.vue';
import Forum from './ForumChat.vue';
import TuMascota from './TuMascota.vue';
import MedalsStu from './MedalsStu.vue';
import LoginPage from './LoginPage.vue';
import loginService from "@/services/login";
import Swal from 'sweetalert2';

export default {
  name: "HeaderPage",
  components: {
    HeaderCat,
    HomePage,
    AboutCarrer,
    SubjectsList,
    ResourcesList,
    Forum,
    TuMascota,
    MedalsStu,
    LoginPage,
  },
  data() {
    return {
      currentComponent: "HomePage", // Componente inicial
      sections: [
        { label: "Inicio", component: "HomePage" },
        { label: "Sobre la carrera", component: "AboutCarrer" },
        { label: "Oferta de Materias", component: "SubjectsList" },
        { label: "Recursos", component: "ResourcesList" },
        { label: "Foro", component: "Forum" },
        { label: "Tu Mascota", component: "TuMascota" },
        { label: "Medallero", component: "MedalsStu" },
      ],
      menuOpen: false, // Estado del menú (abierto o cerrado)
      userName: sessionStorage.getItem('name'), // Obtiene el nombre del usuario del localStorage
    };
  },
  methods: {
    changeComponent(componentName) {
      this.currentComponent = componentName; // Cambia el componente mostrado
      this.menuOpen = false; // Cierra el menú después de seleccionar un componente
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen; // Cambia el estado del menú
    },
    goToLogin() {
      let userName = sessionStorage.getItem('name');
      if (!userName) {
        this.currentComponent = "LoginPage"; // Navega al componente LoginPage
      } else {
        // Si ya está logueado, cerrar sesión
        loginService.logout(); // Llama al servicio de logout
        this.userName = null; // Actualiza la variable userName
        sessionStorage.removeItem('name'); // Limpia la sessionStorage
        this.currentComponent = "HomePage"; // Vuelve al componente principal
        Swal.fire({
          title: 'Sesión cerrada',
          text: 'Has cerrado sesión exitosamente.',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          location.reload(); // Refresca la página para asegurarse de que el estado se actualiza
        });
      }
    },
  },
};
</script>

<style scoped>
/* Barra de navegación principal */

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
  transition: background-color 0.3s ease, transform 0.3s ease;
}

/* Efecto de animación de fondo cuando el cursor se acerca */
.header-page:hover {
  background: linear-gradient(45deg, #00296B, #1479ea, #00296B);
  background-size: 300% 300%;
  animation: gradientAnimation 3s ease infinite;
}

/* Animación para el fondo */
@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
/* Estilos generales para los textos */
.header-inner,
.header-inner-hover,
.header-inner-static {
  pointer-events: none;
  display: block;
  color: white;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  text-align: center;
  font-size: 28 px;
  position: relative;  /* Se asegura de que los elementos se apilen */
  top: 0;
  left: 0;
}


.header-inner {
  position: relative;
}

.header-inner-hover {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transform: translateY(70%);
}

/* Contenedor de los botones del menú */
.button-nav {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  display: flex;
  gap: 15px;
}

/* Estilo para los botones del menú */
.nav-button {
  padding: 15px 20px;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 15px;
  cursor: pointer;
  transition: background-color 0.3s;
  white-space: nowrap; /* Evita que el texto se divida */
  border-radius: 10px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.nav-button.active {
  background-color: #00509D;
  color: white;
  font-weight: bold;
  border-radius: 12px;
}

.nav-button:hover {
  box-shadow: inset 0px 0px 25px #1479EA;
  border-radius: 12px;
}

/* Estilo para el icono del menú */
.menu-toggle {
  display: none;
  font-size: 30px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

/* Estilos cuando el menú está abierto */
.menu-open {
  display: block;
  border-radius: 12px;
}

.main-container {
  width: 100.4%;
  margin-top: 110px; /* Añadimos margen superior para dejar espacio */
}

/* Estilo para el botón de login */
.login-button {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: #00509D;
  border: 1px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  border-radius: 12px;
  transition: background-color 0.3s, box-shadow 0.3s;
}

.login-button i {
  margin-right: 19px;
  font-size: 18px; /* Ajusta el tamaño del ícono */
}

.login-button:hover {
  background-color: #1479EA;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}


/* Media Queries */
@media (max-width: 1068px) {
  .button-nav {
    display: none; /* Ocultar los botones en pantallas pequeñas */
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 80px;
    left: 0;
    background-color: #00509d;
    z-index: 100;
  }

  .button-nav.menu-open {
    display: flex; /* Mostrar el menú cuando está abierto */
  }

  .menu-toggle {
    display: block; /* Mostrar el icono del menú */
  }
}
</style>
