<template>
  <div class="introduction-banner">
    <h1>¡Bienvenidos a la Carrera de Administración de Empresas!</h1>
    <p>
      Descubre un mundo de oportunidades donde la innovación, el liderazgo y la
      estrategia empresarial se unen para transformar ideas en éxito.
    </p>
    <div class="buttons">
      <button @click="showContactForm">Contáctanos</button>
    </div>
    
    <div v-if="contactFormVisible" class="contact-form">
      <h2>Formulario de Contacto</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Nombre:</label>
          <input type="text" id="name" v-model="formData.name" required />
        </div>
        <div class="form-group">
          <label for="email">Correo Electrónico:</label>
          <input type="email" id="email" v-model="formData.email" required />
        </div>
        <div class="form-group">
          <label for="message">Mensaje:</label>
          <textarea id="message" v-model="formData.message" required></textarea>
        </div>
        <button type="submit">Enviar</button>
        <button type="button" @click="closeContactForm" class="close-button">Cerrar</button>
      </form>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
export default {
  name: 'IntroductionBanner',
  data() {
    return {
      contactFormVisible: false,
      formData: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    showContactForm() {
      this.contactFormVisible = true;
    },
    closeContactForm() {
      this.contactFormVisible = false;
    },
    handleSubmit() {
      // Muestra una alerta bonita con SweetAlert2
      Swal.fire({
        title: '¡Gracias por tu mensaje!',
        text: `Te contactaremos pronto, ${this.formData.name}.`,
        icon: 'success',
        confirmButtonText: '¡Genial!',
        background: '#f0f8ff', // Color de fondo
        customClass: {
          popup: 'animated bounceIn', // Animación de entrada
        },
      });
      
      // Resetea el formulario y cierra la ventana
      this.contactFormVisible = false;
      this.formData = { name: '', email: '', message: '' };
    },
  },
};
</script>

<style scoped>
.introduction-banner {
  text-align: center;
  padding: 3rem 1rem;
  background: linear-gradient(135deg, #105599, #00296b);
  color: white;
  border-radius: 12px;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.introduction-banner h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.introduction-banner p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}
.buttons button {
  padding: 15px 25px;
   border: unset;
   border-radius: 15px;
   color: #212121;
   z-index: 1;
   background: #ffc107;
   position: relative;
   font-weight: 1000;
   font-size: 17px;
   -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
   box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
   transition: all 250ms;
   overflow: hidden;
}
button::before {
   content: "";
   position: absolute;
   top: 0;
   left: 0;
   height: 100%;
   width: 0;
   border-radius: 15px;
   background-color: #0077b6;
   z-index: -1;
   -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
   box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
   transition: all 250ms
  }

  button:hover {
   color: #ffffff;
  }

  button:hover::before {
   width: 100%;
  }

.contact-form {
  margin-top: 2rem;
  background-color: white;
  color: #333;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.5s ease-out;
  width: fit-content;
  max-width: 100%; /* Para evitar que se desborde */
  margin-left: auto;
  margin-right: auto; /* Centra el formulario en la página */
}
.contact-form h2 {
  margin-bottom: 1rem;
}
.form-group {
  margin-bottom: 1rem;
}
.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
}
textarea {
  resize: vertical;
  height: 100px;
}
button[type='submit'] {
  padding: 15px 25px;
   border: unset;
   border-radius: 15px;
   color: #212121;
   z-index: 1;
   background: #ffc107;
   position: relative;
   font-weight: 1000;
   font-size: 17px;
   -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
   box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
   transition: all 250ms;
   overflow: hidden;
}
button[type='submit']:hover {
  background-color: #0077b6;
}
.close-button {
  padding: 15px 25px;
   border: unset;
   border-radius: 15px;
   color: #212121;
   z-index: 1;
   background: #ffc107;
   position: relative;
   font-weight: 1000;
   font-size: 17px;
   -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
   box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
   transition: all 250ms;
   overflow: hidden;
}
.close-button:hover {
  background-color: #0a3d79;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
/* Media Queries para dispositivos móviles */
@media (max-width: 768px) {
  .introduction-banner h1 {
    font-size: 1.6rem; /* Reducción aún más en pantallas pequeñas */
  }
  .introduction-banner p {
    font-size: 0.9rem;
  }
  .buttons button {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
  .contact-form {
    padding: 0.8rem;
  }
  .contact-form h2 {
    font-size: 1.2rem;
  }
  .form-group input,
  .form-group textarea {
    font-size: 0.8rem;
  }
  button[type='submit'],
  .close-button {
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .introduction-banner h1 {
    font-size: 1.4rem;
  }
  .introduction-banner p {
    font-size: 0.8rem;
  }
  .buttons button {
    padding: 0.4rem 0.8rem;
    font-size: 0.7rem;
  }
  .contact-form {
    padding: 0.7rem;
  }
  .form-group input,
  .form-group textarea {
    font-size: 0.7rem;
  }
  button[type='submit'],
  .close-button {
    font-size: 0.7rem;
  }
}
</style>