<template>
    <div>
      <p>Procesando...</p>
      <!-- Aquí se muestra el componente dependiendo del estado -->
      <component :is="currentComponent" />
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import HomePage from './HomePage.vue';
  import LoginPage from './LoginPage.vue';
  
  export default {
    data() {
      return {
        currentComponent: 'HomePage', // Componente por defecto
      };
    },
    mounted() {
      this.handleRedirect();
    },
    methods: {
      async handleRedirect() {
        try {
          // Realizar la solicitud al backend para obtener el token
          const response = await axios.get('http://localhost:8080/login/oauth2/code/google', {
            withCredentials: true,  // Si es necesario enviar cookies para la sesión
          });
  
          const { access_token, name, email } = response.data;
  
          // Guardar los datos en localStorage
          localStorage.setItem('access_token', access_token);
          localStorage.setItem('user_name', name);
          localStorage.setItem('user_email', email);
  
          console.log('Access token:', access_token);
          console.log('User name:', name);
          console.log('User email:', email);
  
          // Cambiar al componente principal después de una redirección exitosa
          this.currentComponent = 'HomePage'; // O el nombre del componente que desees mostrar
        } catch (error) {
          console.error('Error fetching user data:', error);
          // Si hay error, cambiar al componente LoginPage
          this.currentComponent = 'LoginPage';
        }
      }
    }
  };
  </script>
  