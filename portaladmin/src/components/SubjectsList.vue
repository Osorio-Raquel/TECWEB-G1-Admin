<template>
  <v-sheet width="100%" height="500">
  <v-img 
        src="https://images.pexels.com/photos/8386722/pexels-photo-8386722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        max-height="500"
        cover
        gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
    >
    <div class="text-center banner text-sm-h2">
      <h1>Oferta de<br/>materias</h1>
    </div>
  </v-img>    
</v-sheet>

<v-container>
  <v-row class="mt-5">
    <v-col cols="12" md="4" v-for="(subject, index) in subjects" :key="index">
      <v-card class="slide-in" elevation="3" hover>
        <v-img :src="subject.img" :aspect-ratio="4/3" cover></v-img>
        <v-card-title class="card-title mt-2">{{ subject.sigla }}</v-card-title>
        <v-card-subtitle class="card-subtitle mb-4">{{ subject.nombre }}</v-card-subtitle>
        <v-card-actions>
          <v-btn
            color="secondary"
            text="Ver Más"
            variant="text"
            @click="showMore(index)"
          ></v-btn>
        </v-card-actions>

        <v-expand-transition>
          <v-card
            v-if="reveal[index]"
            class="position-absolute w-100"
            height="100%"
            style="bottom: 0;"
          >
            <v-card-text class="pb-0">
              <h2 class="card-title pt-2">{{ subject.nombre }}</h2>

              <h3 class="card-text pt-3">{{ subject.descr }}</h3>
            </v-card-text>

            <v-card-actions class="pt-0">
              <v-btn
                color="secondary"
                text="Cerrar"
                variant="text"
                @click="showLess(index)"
              ></v-btn>
            </v-card-actions>
          </v-card>
        </v-expand-transition>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
export default{
name: "SubjectsList",
data(){
  return{
    subjects: [
      {sigla: "ADM-113", nombre: "Administración I", img: "https://via.placeholder.com/100?text=ADM-113", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend tincidunt felis nec vestibulum. Integer bibendum elit sed risus ullamcorper, non semper massa congue. Duis."},
      {sigla: "ADM-114", nombre: "Administración II", img: "https://via.placeholder.com/100?text=ADM-114", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend tincidunt felis nec vestibulum. Integer bibendum elit sed risus ullamcorper, non semper massa congue. Duis."},
      {sigla: "ADM-182", nombre: "Proceso de Método Científico", img: "https://via.placeholder.com/100?text=ADM-182", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend tincidunt felis nec vestibulum. Integer bibendum elit sed risus ullamcorper, non semper massa congue. Duis."},
      {sigla: "ADM-224", nombre: "Gestión del Talento Humano", img: "https://via.placeholder.com/100?text=ADM-224", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend tincidunt felis nec vestibulum. Integer bibendum elit sed risus ullamcorper, non semper massa congue. Duis."},
      {sigla: "ADM-265", nombre: "Gestión de Procesos", img: "https://via.placeholder.com/100?text=ADM-265", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend tincidunt felis nec vestibulum. Integer bibendum elit sed risus ullamcorper, non semper massa congue. Duis."},
      {sigla: "ADM-225", nombre: "Comportamiento Organizacional", img: "https://via.placeholder.com/100?text=ADM-225", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend tincidunt felis nec vestibulum. Integer bibendum elit sed risus ullamcorper, non semper massa congue. Duis."},
      {sigla: "ADM-266", nombre: "Gerencia de Operaciones y Tecnología", img: "https://via.placeholder.com/100?text=ADM-266", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend tincidunt felis nec vestibulum. Integer bibendum elit sed risus ullamcorper, non semper massa congue. Duis."},
      {sigla: "ADM-226", nombre: "Desarrollo Organizacional", img: "https://via.placeholder.com/100?text=ADM-226", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend tincidunt felis nec vestibulum. Integer bibendum elit sed risus ullamcorper, non semper massa congue. Duis."},
      {sigla: "ADM-254", nombre: "Taller de Innovación Digital", img: "https://via.placeholder.com/100?text=ADM-254", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend tincidunt felis nec vestibulum. Integer bibendum elit sed risus ullamcorper, non semper massa congue. Duis."},
      {sigla: "ADM-255", nombre: "Emprendimientos y Startup", img: "https://via.placeholder.com/100?text=ADM-255", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend tincidunt felis nec vestibulum. Integer bibendum elit sed risus ullamcorper, non semper massa congue. Duis."},
      {sigla: "ADM-268", nombre: "Ciencia de Datos y Toma de Decisiones", img: "https://via.placeholder.com/100?text=ADM-268", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend tincidunt felis nec vestibulum. Integer bibendum elit sed risus ullamcorper, non semper massa congue. Duis."},
      {sigla: "ADM-282", nombre: "Ética Profesional", img: "https://via.placeholder.com/100?text=ADM-282", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend tincidunt felis nec vestibulum. Integer bibendum elit sed risus ullamcorper, non semper massa congue. Duis."},
      {sigla: "ADM-312", nombre: "Dirección Estratégica I", img: "https://via.placeholder.com/100?text=ADM-312", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend tincidunt felis nec vestibulum. Integer bibendum elit sed risus ullamcorper, non semper massa congue. Duis."},
      {sigla: "ADM-321", nombre: "Taller de Habilidades Blandas", img: "https://via.placeholder.com/100?text=ADM-321", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend tincidunt felis nec vestibulum. Integer bibendum elit sed risus ullamcorper, non semper massa congue. Duis."},
      {sigla: "ADM-313", nombre: "Diección Estratégica II", img: "https://via.placeholder.com/100?text=ADM-313", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend tincidunt felis nec vestibulum. Integer bibendum elit sed risus ullamcorper, non semper massa congue. Duis."},
      {sigla: "ADM-353", nombre: "Administración de Proyectos", img: "https://via.placeholder.com/100?text=ADM-353", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend tincidunt felis nec vestibulum. Integer bibendum elit sed risus ullamcorper, non semper massa congue. Duis."},
      {sigla: "ADM-382", nombre: "Práctica Preprofesional", img: "https://via.placeholder.com/100?text=ADM-382", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend tincidunt felis nec vestibulum. Integer bibendum elit sed risus ullamcorper, non semper massa congue. Duis."},
    ],
    reveal: [false],
  }
},
methods: {
  showMore(index) {
    this.reveal[index] = true;
  },
  showLess(index) {
    this.reveal[index] = false;
  }, 
}
}

</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&family=Markazi+Text:wght@400..700&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&family=Markazi+Text:wght@400..700&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&family=Funnel+Display:wght@300..800&family=Markazi+Text:wght@400..700&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&family=Funnel+Display:wght@300..800&family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Markazi+Text:wght@400..700&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap');

.banner{
height: 500px;
h1{
  padding-top: 9%;
  font-size:70px;
  font-family: "Markazi Text";
  color: white;
  line-height: 1.1;
}
}

.card-title{
font-family: "Funnel Display";
font-size: 20x;
word-break: break-word;
}

.card-subtitle{
font-family: "Funnel Display";
font-size: 18px;
opacity: 0.8;
}

.card-text{
font-family: "Noto Sans";
font-size: 15px;
}

.slide-in{
transform: translateY(200%);
opacity: 0;
animation: slide-in-anim 1.5s ease-out forwards;
}

@keyframes slide-in-anim {
10% {
  opacity: 0;
}
100% {
  opacity: 1;
  transform: translateY(0%);
}
}
</style>