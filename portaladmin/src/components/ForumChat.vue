<template>
  <v-card>
    <!-- Título del foro -->
    <v-card-title class="headline text-primary">Foro de Discusión</v-card-title>

    <!-- Pestañas de categorías -->
    <v-tabs v-model="activeTab" background-color="cyan" dark>
      <v-tab v-for="(tab, index) in tabs" :key="index">
        {{ tab.name }}
      </v-tab>
    </v-tabs>

    <!-- Contenido de las pestañas de chat -->
    <v-container>
      <v-tabs-items v-model="activeTab">
        <v-tab-item v-for="(tab, index) in tabs" :key="index">
          <v-card flat>
            <v-card-title>{{ tab.name }}</v-card-title>
            <v-card-text>
              <div class="chat-window">
                <!-- Mensajes en el chat -->
                <div v-for="(message, msgIndex) in tab.messages" :key="msgIndex" class="message">
                  <strong>{{ message.user }}:</strong> {{ message.text }}
                </div>
              </div>
              <!-- Campo para enviar mensajes -->
              <v-row align="center" class="mt-4">
                <v-col cols="9">
                  <v-text-field
                    v-model="tab.newMessage"
                    label="Escribe un mensaje..."
                    outlined
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-btn color="primary" @click="sendMessage(index)">Enviar</v-btn>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'ForumChat',
  data() {
    return {
      activeTab: 0, // Controla la pestaña activa
      tabs: [
        {
          name: 'Alumnos',
          messages: [
            { user: 'Luis', text: '¡Hola! ¿Alguien ha revisado la última tarea?' },
            { user: 'María', text: 'Sí, es bastante interesante. ¡Es un buen reto!' },
          ],
          newMessage: '',
        },
        {
          name: 'Ofertas de Trabajo',
          messages: [
            { user: 'Ana', text: 'He visto que están contratando en la empresa XYZ.' },
            { user: 'Carlos', text: '¡Gracias! Voy a revisar la oferta.' },
          ],
          newMessage: '',
        },
        {
          name: 'Actividades',
          messages: [
            { user: 'Paula', text: '¿Alguien asistirá al taller de liderazgo?' },
            { user: 'Jorge', text: 'Sí, dicen que será muy útil.' },
          ],
          newMessage: '',
        },
        {
          name: 'Noticias',
          messages: [
            { user: 'Martín', text: 'La universidad ha anunciado una nueva beca para estudiantes de administración.' },
            { user: 'Lucía', text: '¡Excelente! Voy a investigar más al respecto.' },
          ],
          newMessage: '',
        },
      ],
    };
  },
  methods: {
    sendMessage(tabIndex) {
      if (this.tabs[tabIndex].newMessage.trim() !== '') {
        this.tabs[tabIndex].messages.push({
          user: 'Usuario',
          text: this.tabs[tabIndex].newMessage,
        });
        this.tabs[tabIndex].newMessage = ''; // Limpia el campo de mensaje
      }
    },
  },
};
</script>

<style scoped>
.chat-window {
  max-height: 300px;
  overflow-y: auto;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 5px;
  margin-bottom: 10px;
}
.message {
  margin-bottom: 5px;
}
</style>
