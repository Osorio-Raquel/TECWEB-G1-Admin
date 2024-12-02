<template>
    <div class="forum">
      <h1>Foro estudiantil</h1>
      
      <!-- Section selection buttons -->
      <div class="section-buttons">
        <button
          v-for="(section, index) in forumSections"
          :key="index"
          @click="activeSectionIndex = index"
          :class="{ active: activeSectionIndex === index }"
        >
          {{ section.name }}
        </button>
      </div>
  
      <!-- Posts section -->
      <div v-if="forumSections.length > 0">
        <div class="posts-section">
          <h2>{{ forumSections[activeSectionIndex].name }}</h2>
  
          <!-- Post form -->
          <div class="post-form">
  <textarea v-model="newPost.text" placeholder="Escribe tu publicación..." rows="3"></textarea>
 
  
  <button @click="submitPost(forumSections[activeSectionIndex])">Publicar</button>
</div>
  
          <!-- Posts list -->
          <div v-for="(post, postIndex) in forumSections[activeSectionIndex].posts" :key="postIndex" class="post">
            <div class="post-header">
              <h3>{{ post.user }} - {{ post.date }}</h3>
            </div>
            <p v-if="post.showMore">{{ post.text }}</p>
            <p v-else>{{ post.text.substring(0, 100) }}...</p>
            <button @click="toggleShowMore(postIndex, forumSections[activeSectionIndex])">
              {{ post.showMore ? 'Mostrar menos' : 'Mostrar más' }}
            </button>
            
            <img v-if="post.image" :src="post.image" alt="Post Image" class="post-image" />
            
            <!-- Comments section -->
            <div class="comments">
              <div v-for="(comment, commentIndex) in post.comments" :key="commentIndex" class="comment">
                <p><strong>{{ comment.user }}:</strong> {{ comment.text }}</p>
                <button @click="toggleReply(forumSections[activeSectionIndex], postIndex, commentIndex)">
                  {{ comment.showReply ? 'Ocultar respuestas' : 'Responder' }}
                </button>
                <div v-if="comment.showReply" class="replies">
                  <div v-for="(reply, replyIndex) in comment.replies" :key="replyIndex" class="reply">
                    <p><strong>{{ reply.user }}:</strong> {{ reply.text }}</p>
                  </div>
                  <textarea v-model="newReply.text" placeholder="Escribe una respuesta..."></textarea>
                  <button @click="submitReply(forumSections[activeSectionIndex], postIndex, commentIndex)">Publicar respuesta</button>
                </div>
              </div>
  
              <!-- New comment form -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>

import forumService from "@/services/forum";
import commentsService from "@/services/comment";
import usersService from "@/services/user";

  export default {
    name: 'ForumChat',
    data() {
      return {
        activeSectionIndex: 0, // Index of the active section
        newPost: {
          text: '',
          image: null,
        },
        newComment: {
          text: '',
        },
        newReply: {
          text: '',
        },
        forumSections: [
          {
            name: '',
            tema: '',
            posts: [],
          },
        ],
      };
    },
    mounted() {
    this.fetchForums(); // Llamada automática al cargar el componente
    },
    methods: {

      async fetchForums() {
  try {
    const forums = await forumService.getAllForums(); // Obtener los foros
    console.log(forums);
    // Obtener los comentarios para cada foro y actualizar los foros con sus comentarios
    this.forumSections = await Promise.all(forums.map(async (forum) => {
      const forumComments = await commentsService.fetchCommentsByForumId(forum.idForo); // Obtener los comentarios para el foro actual

      const formattedComments = await Promise.all(forumComments.map(async (comment) => {
        const userName = await this.buscarUsuario(comment.idUsuario); // Espera al nombre del usuario

        return {
          user: userName, // Nombre del usuario obtenido
          date: this.formatDate(comment.fechaHora), // Suponiendo que 'date' es la fecha del comentario
          text: comment.texto, // Suponiendo que 'text' es el contenido del comentario
        };
      }));

      return {
        name: forum.nombre,
        tema: forum.tema,
        posts: formattedComments, // Asignamos los comentarios a 'posts'
      };
    }));

    console.log("Foros y comentarios obtenidos:", this.forumSections); // Imprimir los foros con los comentarios
  } catch (error) {
    console.error("Error al obtener los foros y comentarios:", error);
  }
},

 formatDate(dateString) {
  const date = new Date(dateString); // Convertir el string a un objeto Date

  const day = String(date.getDate()).padStart(2, '0'); // Obtener el día, asegurándose de que tenga dos dígitos
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Obtener el mes (el mes comienza desde 0, por eso se le suma 1)
  const year = date.getFullYear(); // Obtener el año

  const hours = String(date.getHours()).padStart(2, '0'); // Obtener las horas
  const minutes = String(date.getMinutes()).padStart(2, '0'); // Obtener los minutos
  const seconds = String(date.getSeconds()).padStart(2, '0'); // Obtener los segundos

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`; // Retornar la fecha formateada
},


 async buscarUsuario(idusu){
  try {
    const usu = await usersService.fetchUsers();  // Obtén los usuarios desde el servicio
    // Busca el usuario que tenga el mismo ID que idusu
    const usuarioEncontrado = usu.find(user => user.idUsuario === idusu); // Asegúrate de que 'id' es el campo correcto

    if (usuarioEncontrado) {
      console.log("Nombre del usuario encontrado:", usuarioEncontrado.nombreGoogle);
      return usuarioEncontrado.nombreGoogle;  // Retorna el nombre del usuario
    } 
  } catch (error) {
    console.error("Error al buscar el usuario:", error);
    return null;  // En caso de error
  }
},
    

        submitPost(section) {
  if (this.newPost.text) {
    section.posts.unshift({ // Use `unshift` to add the new post at the beginning of the array
      user: sessionStorage.getItem('name'),
      date: new Date().toISOString().split('T')[0],
      text: this.newPost.text,
      image: this.newPost.image,
      likes: 0,
      comments: [],
      showMore: false,
    });
    this.newPost.text = '';
    this.newPost.image = null;
  }

      },
      handleImageUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.newPost.image = e.target.result;
      this.newPost.imageName = file.name; // Almacena el nombre del archivo
    };
    reader.readAsDataURL(file);
  }
},

      likePost(section, postIndex) {
        section.posts[postIndex].likes++;
      },
      toggleShowMore(postIndex, section) {
        section.posts[postIndex].showMore = !section.posts[postIndex].showMore;
      },
      submitComment(section, postIndex) {
        if (this.newComment.text) {
          section.posts[postIndex].comments.push({
            user: 'Nuevo Comentario',
            text: this.newComment.text,
            likes: 0,
            showReply: false,
            replies: [],
          });
          this.newComment.text = '';
        }
      },
      likeComment(section, postIndex, commentIndex) {
        section.posts[postIndex].comments[commentIndex].likes++;
      },
      toggleReply(section, postIndex, commentIndex) {
        section.posts[postIndex].comments[commentIndex].showReply =
          !section.posts[postIndex].comments[commentIndex].showReply;
      },
      submitReply(section, postIndex, commentIndex) {
        if (this.newReply.text) {
          section.posts[postIndex].comments[commentIndex].replies.push({
            user: 'Nuevo Respuesta',
            text: this.newReply.text,
          });
          this.newReply.text = '';
          section.posts[postIndex].comments[commentIndex].showReply = false;
        }
      },

      
    },
  };
  </script>
  
  <style scoped>
/* Estilo general para el contenedor principal del foro */
.forum {
  padding: 50px;
  max-width: 1000px;
  margin: auto;
  background: linear-gradient(135deg, #03045e, #0096C7); /* Degradado suave entre dos tonos azules */
  background-size: 200% 200%; /* Ajusta el tamaño del degradado para que cubra mejor */
  border-radius: 20px; /* Esquinas redondeadas */
  position: relative;
  overflow: hidden; /* Asegura que el fondo no sobresalga fuera del contenedor */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Sombra más suave para resaltar la caja */
  animation: background-animation 8s ease infinite; /* Animación suave del fondo */
  background-attachment: fixed; /* Hace que el fondo se quede fijo mientras se desplaza la página */

  
  
  border-image-slice: 1;
}

@keyframes background-animation {
  0% {
    background-position: 0% 50%; /* Comienza en la posición inicial */
  }
  25% {
    background-position: 25% 50%; /* Mueve el fondo un poco */
  }
  50% {
    background-position: 50% 50%; /* Se mueve al centro */
  }
  75% {
    background-position: 75% 50%; /* Se mueve un poco más */
  }
  100% {
    background-position: 0% 50%; /* Regresa a la posición inicial */
  }
}





/* Encabezado */
h1 {
  text-align: center;
  font-family: 'Arial', sans-serif;
  font-size: 2.5rem;
  color: white;
  margin-bottom: 20px;
}
h2 {
  text-align: left;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 2.5rem;
  color: black;
  margin-bottom: 20px;
}

/* Sección de botones de navegación */
.section-buttons {
  text-align: center;
  margin-bottom: 20px;
}

.section-buttons button {
  padding-left: 33px;
  padding-right: 33px;
  padding-bottom: 16px;
  padding-top: 16px;
  border-radius: 12px; /* Esquinas más redondeadas */
  background: linear-gradient(135deg, #023E8A, #03045E); /* Degradado suave entre tonos azules */
  border: none;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 16px;
  color: #fff; /* Texto blanco para mayor contraste */
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.4s ease;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1); /* Sombra suave */
  position: relative;
}

.section-buttons button.active {
  transform: scale(0.98); /* Efecto de compresión al hacer clic */
  box-shadow: 7px 5px 56px -10px rgba(202, 240, 248, 0.5); /* Sombra intensa en estado activo */
}

.section-buttons button:hover {
  background: linear-gradient(135deg, #0077B6, #023E8A); /* Invertir el degradado al pasar el ratón */
  box-shadow: 0px 8px 25px rgba(72, 202, 228, 0.5); /* Sombra más fuerte al pasar el ratón */
  transform: translateY(-3px); /* Elevar el botón un poco al pasar el ratón */
}

.section-buttons button:active {
  background: linear-gradient(135deg, #00b4d8, #0077b6); /* Colores más intensos cuando se hace clic */
  box-shadow: none;
  transform: scale(0.95); /* Escala más pequeña al hacer clic */
}


/* Sección de posts */
.posts-section {
  margin-top: 20px;
  background-color: white;
  padding: 40px;
  border-radius: 12px;
}

/* Formulario para añadir un nuevo post */
.post-form {
  margin-bottom: 20px;
}

textarea {
  width: 100%;
  padding: 16px;
  border: 2px solid #3768d3; /* Un borde azul brillante y moderno */
  border-radius: 12px; /* Bordes más redondeados para un toque más suave */
  font-size: 1.1rem;
  margin-bottom: 15px;
  background-color: #ffffff; /* Fondo suave azul claro para una sensación fresca */
  color: #333; /* Texto oscuro para buen contraste */
  font-family: 'Poppins', sans-serif; /* Fuente moderna y estilizada */
  transition: all 0.3s ease-in-out; /* Transición para animación suave */
  resize: none; /* No permite el cambio de tamaño */
  box-shadow: 0 4px 15px rgba(10, 69, 146, 0.2); /* Sombra suave con un toque de color */
}

textarea:focus {
  border-color: #112f83; /* Azul más brillante cuando se enfoca */
  background-color: #ffffff; /* Fondo blanco al enfocar para resaltar */
  box-shadow: 0 0 12px rgba(76, 137, 187, 0.4); /* Resalta más con una sombra más fuerte */
  outline: none; /* Elimina el borde por defecto */
}

textarea:hover {
  background-color: #b3d1eb; /* Fondo azul aún más claro al pasar el ratón */
  box-shadow: 0 4px 20px rgba(77, 140, 233, 0.1); /* Sombra más intensa al pasar el ratón */
}

textarea::placeholder {
  color: #00796b; /* Un color verde azulado fresco para el placeholder */
  opacity: 0.8; /* Un poco de transparencia para un efecto más moderno */
  font-style: italic; /* Estilo cursivo para el texto del placeholder */
  font-weight: 400; /* Asegura que el placeholder se vea ligero */
}

/* Estilo del botón de cargar archivo personalizado */
input[type="file"] {
  display: none; /* Oculta el botón de carga de archivo predeterminado */
}

.custom-file-button {
  display: inline-block;
  padding: 12px 30px;
  background: linear-gradient(135deg, #023E8A, #03045E); /* Degradado entre dos tonos de azul */
  color: white;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.4s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); /* Sombra suave */
}

.custom-file-button:hover {
  background: linear-gradient(135deg, #0077B6, #023E8A); /* Cambia el color al pasar el ratón */
  transform: translateY(-3px); /* Eleva el botón ligeramente */
  box-shadow: 0 8px 25px rgba(72, 202, 228, 0.5); /* Sombra más fuerte */
}

.custom-file-button:active {
  background: linear-gradient(135deg, #00b4d8, #0077b6); /* Colores más intensos cuando se hace clic */
  transform: scale(0.98); /* Efecto de compresión */
}

/* Mostrar el nombre del archivo seleccionado */
.file-name {
  display: inline-block;
  margin-left: 10px;
  color: #333;
  font-size: 14px;
  font-family: 'Arial', sans-serif;
}


button {
    display: inline-block;
  padding: 12px 30px;
  background: linear-gradient(135deg, #023E8A, #03045E); /* Degradado entre dos tonos de azul */
  color: white;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.4s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); /* Sombra suave */
}

button:hover {
    background: linear-gradient(135deg, #0077B6, #023E8A); /* Cambia el color al pasar el ratón */
  transform: translateY(-3px); /* Eleva el botón ligeramente */
  box-shadow: 0 8px 25px rgba(72, 202, 228, 0.5); /* Sombra más fuerte */
}

/* Estilo de cada post */
.post {
  border-bottom: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #cee6f0;
  border-color: #0077B6;
  border-radius: 12px;
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  background-color: white ;
padding: 20px;
border-radius: 8px;
}

.post-header .author {
  font-weight: bold;
}

.post-header .timestamp {
  font-size: 0.9rem;
  color: #888;
}

.post-content {
  font-size: 1rem;
  color: #333;
  background-color: white;
}

/* Estilo de la imagen dentro del post */
.post-image {
  width: 100%;
  max-width: 500px;
  height: auto;
  margin-top: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Sección de comentarios */
.comments {
  margin-top: 20px;
}

.comment {
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f1f1f1;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.comment-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.comment-header .author {
  font-weight: bold;
  font-size: 1rem;
}

.comment-header .timestamp {
  font-size: 0.9rem;
  color: #888;
}

.comment-content {
  font-size: 1rem;
  color: #333;
}

/* Respuestas dentro de los comentarios */
.replies {
  margin-top: 10px;
  margin-left: 20px;
}

.reply {
  margin-bottom: 10px;
  padding: 10px;
  background-color: #e0e0e0;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.reply-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.reply-header .author {
  font-weight: bold;
  font-size: 0.9rem;
}

.reply-header .timestamp {
  font-size: 0.8rem;
  color: #888;
}

.reply-content {
  font-size: 1rem;
  color: #333;
}

  </style>
  