<template>
  <v-sheet width="100%">
  <v-img 
        src="https://images.pexels.com/photos/8386722/pexels-photo-8386722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        max-height="500"
        cover
        gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
    >
    <div class="text-center">
      <h1 class="responsive-h1">Oferta de<br/>materias</h1>
    </div>
  </v-img>    
</v-sheet>

<v-container>
  <v-row class="mt-5">
    <v-col cols="12" md="4" v-for="(subject, index) in subjects" :key="index">
      <v-card class="slide-in" elevation="3" hover>
        <v-img :src="subject.img" :aspect-ratio="4/3" cover></v-img>
        <v-card-title class="card-subtitle mb-4">{{ subject.nombre }}</v-card-title>
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

import subjectsData from "@/services/subjects";

export default{
name: "SubjectsList",
data(){
  return{
    subjects: [],
    reveal: [false],
  }
},
async mounted() {
  try {
    const materias = await subjectsData.getMaterias(); // Obtiene las materias desde la API

      // Mapea los datos obtenidos a la estructura de `subjects`
      this.subjects = materias.map(materia => ({
        nombre: materia.nombre,
        img: `https://via.placeholder.com/500?text=${materia.nombre}`, // Genera URL de imagen
        descr: materia.descripcion || "Descripción no disponible." // Descripción por defecto
      }));

      // Inicializa el array `reveal` con valores `false`
      this.reveal = Array(this.subjects.length).fill(false);
  } catch (error) {
    console.log("Error al cargar materias: ", error );
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

.responsive-h1{
  font-size:70px;
  font-family: "Markazi Text";
  color: white;
  line-height: 1.1;
  padding-top: 10%;
}

@media only screen and (max-width: 600px) {
  .responsive-h1 {
    font-size:40px;
    font-family: "Markazi Text";
    color: white;
    line-height: 1;
    padding-top: 15%;
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