<template>
    <div class="login-page">
      <div class="background">
        <div class="particle" v-for="n in 50" :key="n"></div>
      </div>
      <div class="login-container">
        <h1 class="animated-title">Bienvenido</h1>
        <p>Accede con tu cuenta de Google para continuar</p>
        <button class="google-login" @click="loginWithGoogle">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google Logo" />
          Iniciar sesión con Google
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import Login from "@/services/login";

  export default {
    name: "LoginPage",
    methods: {
      loginWithGoogle() {
        Login.loginWithGoogle(); 
        Login.handleLoginResponse();
      },
    },
  };
</script>

  
  <style scoped>
  .login-page {
    position: relative;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: white;
    color: white;
    font-family: 'Arial', sans-serif;
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    overflow: hidden;
  }
  
  .particle {
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #90e0ef;
    border-radius: 50%;
    animation: float 10s ease-in-out infinite;
    opacity: 0.6;
  }

  .particle:nth-child(even) {
    animation-duration: 12s;
  }
  .particle:nth-child(odd) {
    animation-duration: 8s;
  }
  .particle {
    top: calc(100% * var(--top, 0));
    left: calc(100% * var(--left, 0));
    --top: random(0, 1);
    --left: random(0, 1);
  }
  
  @keyframes float {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-120vh);
    }
  }

  .login-container {
    position: relative;
    z-index: 2;
    background: #023e8a;
    border-radius: 20px;
    padding: 40px;
    text-align: center;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
    animation: fadeIn 2s ease-in-out;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animated-title {
    font-size: 32px;
    font-family: Arial, Helvetica, sans-serif;
    background: linear-gradient(45deg, #48cae4, white);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: titleAnimation 3s infinite alternate;
  }
  
  @keyframes titleAnimation {
    0% {
      letter-spacing: 1px;
    }
    100% {
      letter-spacing: 5px;
    }
  }

  .google-login {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: linear-gradient(45deg, #48cae4, #023e8a);
    border: none;
    border-radius: 30px;
    padding: 15px 25px;
    font-size: 18px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }
  
  .google-login img {
    width: 25px;
    height: 25px;
  }

  .google-login:hover {
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  }
  </style>
  