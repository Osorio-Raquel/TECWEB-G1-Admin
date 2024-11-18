<template>
  <v-sheet width="100%" height="500">
    <v-img 
          src="https://images.pexels.com/photos/1367276/pexels-photo-1367276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          max-height="500"
          cover
          gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
      >
      <div class="banner mt-10 ml-16 text-sm-h2">
        <h1>Lidera proyectos<br/>Toma decisiones<br/>Crea oportunidades</h1>
      </div>
    </v-img>    
  </v-sheet>
  
  <v-container>
    <v-row>
      <v-col cols="12" md="9" class="pa-5">
        <v-card variant="text">
          <v-card-title class="title text-wrap">Sobre la carrera de Administración de Empresas</v-card-title>
          <v-card-text class="text">
            La carrera de Administración de Empresas de la Cato te brinda las herramientas y conocimientos 
            necesarios para gestionar, dirigir y liderar organizaciones en un entorno global y dinámico. 
            A través de esta formación, desarrollarás habilidades clave en áreas como la toma de decisiones, 
            liderazgo, planificación estratégica, gestión financiera, marketing y recursos humanos, preparándote 
            para asumir roles estratégicos en empresas de diferentes tamaños y sectores.
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="3" class="pa-5">
        <v-img
        :src="require('../assets/Acreditada.jpg')"
        aspect-ratio="1"
        max-height="350"/>
      </v-col>
    </v-row>

    <v-row>
      <v-col
      class="fadeInUp"
      cols="12"
      sm="4"
      for v-for="(card, index) in cards1"
      :key="index">
        <v-card class="fill-height pa-3 slide-in" elevation="5">
          <v-icon color="cyan" size="x-large" class="ml-2">{{ card.icon }}</v-icon>
          <v-card-title class="card-title">{{ card.title }}</v-card-title>
          <v-card-text class="card-text pl-11">
            <ul for v-for="(text, index) in card.texts" :key="index">
              <li>{{ text }}</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="5">
        <v-img class="slide-in" :src="require('../assets/Banner2.jpg')" max-height="100%" cover></v-img>
      </v-col>
      <v-col cols="12" md="7">
        <v-card class="pa-12 card-title slide-in fill-height" variant="text" hover prepend-icon="mdi-handshake-outline">
          <v-card-title class="text-wrap">Beneficios de estudiar esta carrera en la U.C.B</v-card-title>
          <v-card-text class="card-text pl-5">
            <ul>
              <li v-for="(text, index) in card2" :key="index">{{ text }}</li>
              <li><strong>Doble titulación con la Universidad Católica de Salta UCASAL.</strong></li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="mt-5 slide-in">
        <v-divider/>  
      </v-col>
      <v-col cols="12">
        <v-hover v-slot="{ isHovering, props }">
          <v-btn 
            class="mt-5 slide-in"
            :class="{ 'on-hover': isHovering }"
            size="x-large" 
            rounded="lg" 
            variant="elevated" 
            :ripple="true" 
            color="secondary" 
            :elevation="isHovering ? 10 : 3"
            v-bind="props"
            @click="openInNewTab('https://lpz.ucb.edu.bo/inscripciones-estudiantes-nuevos')" block>¡Inscríbete ahora!
            block
          </v-btn>
        </v-hover>
      </v-col>
      <v-col cols="12" class="mt-5 slide-in">
        <v-divider/>  
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="text-center">
        <h3 class="title">Nuestros Valores</h3>
        <p class="text pa-2 text-center">Los valores que guían nuestra carrera y el desarrollo profesional de nuestros estudiantes.</p>
      </v-col>
      <v-col v-for="(value, index) in values" :key="index" cols="12" md="4" class="text-center">
        <v-icon color="cyan" large class="value-icon">{{ value.icon }}</v-icon>
        <h4 class="mt-2 card-title">{{ value.title }}</h4>
        <p class="card-text">{{ value.description }}</p>
      </v-col>
    </v-row>

    <v-row>
      <v-divider></v-divider>
    </v-row>

    <!-- Video de Presentación -->
    <v-row>
      <v-col class="text-center" cols="12">
        <h3 class="title">Conoce Más Sobre Nosotros</h3>
        <p class="text text-center pa-2">Descubre en este video todo lo que nuestra carrera tiene para ofrecer.</p>
        <v-container class="iframe-container">
          <iframe class="mt-5 responsive-iframe" src="https://youtube.com/embed/d3r9BIUiuF8" allow="accelerometer" allowfullscreen="true"></iframe>
        </v-container>
      </v-col>
    </v-row>

    <v-row>
      <v-divider></v-divider>
    </v-row>

    <v-row>
      <v-col cols=12 class="text-center mt-3">
        <h3 class="title">Redes Sociales y Web</h3>
      </v-col>
      <v-col class="mb-3 d-flex justify-center" cols="12" md="3" v-for="(sm, index) in socialmedia" :key="index">
        <v-hover v-slot="{ isHovering, props }" close-delay="150">
          <v-btn 
            :class="{ 'on-hover': isHovering }"
            v-bind="props"
            :variant="isHovering ? 'flat' : 'outlined'"
            color="cyan" 
            elevation="3" 
            rounded="xl" 
            class="social-media"
            @click="openInNewTab(sm.link)"
            >
            <v-icon :color="isHovering ? 'white' : 'cyan'" :class="{ 'on-hover': isHovering }" v-bind="props">
              {{ sm.icon }}
            </v-icon>
            {{ sm.label }}
          </v-btn>
        </v-hover>
      </v-col>
    </v-row>

    <v-row>
      <v-divider></v-divider>
    </v-row>

    <v-row>
      <v-col cols=12 class="text-center mt-3">
        <v-card variant="text">
          <v-card-title class="title text-wrap">Atención de Dirección de Carrera</v-card-title>
          <v-card-subtitle class="subtitle text-wrap">Av. 14 de Septiembre N°4807, Obrajes.</v-card-subtitle>
          <v-card-text class="text pt-6">
            <ul style="list-style-type: none;">
              <li v-for="(text, index) in cards3" :key="index"><strong>{{ text.text1 }}</strong> {{ text.text2 }}</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-divider class="pt-5 pb-14"></v-divider>
    </v-row>
  </v-container>
</template>

<script>export default{
  
  name: "AboutCarrer",
  data (){
    return{
      cards1: [
        {
          title: "Duración de la Carrera", texts: ["9 semestres"], icon: "mdi-calendar-multiple-check"
        },
        {
          title: "Áreas de estudio", texts: ["Gestion empresarial","Emprendimientos y Proyectos", "Recursos Humanos", "Finanzas", "Marketing", "Operaciones"], icon: "mdi-bookshelf"
        },
        {
          title: "Modalidades de Graduación", texts: ["Graduación por excelencia", "Tesis de grado", "Trabajo dirigido", "Proyecto de grado", "Plan de negocio"], icon:"mdi-school"
        },
      ],
      card2:["Laboratorio de Simulación de Negocios.","Enfoque en innovación empresarial y liderazgo empresarial."," Talleres y conferencias con docentes internacionales.","Formación con valores y principios éticos."],
      values: [
        {
          icon: 'mdi-lightbulb-on-outline',
          title: 'Innovación',
          description: 'Fomentamos la creatividad y el pensamiento innovador en nuestros estudiantes, preparándolos para adaptarse y sobresalir en un entorno empresarial dinámico.',
        },
        {
          icon: 'mdi-account-group',
          title: 'Trabajo en Equipo',
          description: 'Creemos en el valor de la colaboración y el trabajo conjunto para alcanzar metas, inspirando a nuestros estudiantes a trabajar eficazmente en equipo.',
        },
        {
          icon: 'mdi-scale-balance',
          title: 'Ética y Responsabilidad',
          description: 'Formamos profesionales con principios éticos sólidos y responsabilidad social, listos para tomar decisiones con integridad y compromiso.',
        },
      ],
      socialmedia: [
        {label: "Sociedad Científica", link: "https://www.facebook.com/SCAEUCBLP?locale=es_LA", icon: "mdi-facebook"},
        {label: "ADMUCB", link: "https://www.facebook.com/ADMUCB", icon: "mdi-facebook"},
        {label: "adm_lpz.ucb", link: "https://vm.tiktok.com/ZMNDCpe3s/", icon: "mdi-music-note-half"},
        {label: "admi_ucb.oficial", link: "https://instagram.com/admi_ucb.oficial", icon: "mdi-instagram"}
      ],
      cards3: [
        {text1: "Departamento de Administración de Empresas:", text2: "Bloque K"},
        {text1: "Horarios de atención:", text2: "de lunes a viernes de 08:30 a 16:30"},
        {text1: "Contacto:", text2: "2782222"},
      ]
    }
  },
  methods: {
    openInNewTab(url) {
      window.open(url, '_blank').focus();
    }
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
    font-size:70px;
    font-family: "Markazi Text";
    color: white;
    line-height: 1.1;
  }
  h2{
  font-size:30px;
  font-family: "Markazi Text";
  color: white;
  line-height: 1;
}

}

.title{
  font-family: "Funnel Display";
  font-size: 25px;
}

.subtitle{
  font-family: "Funnel Display";
  font-size: 20px;
  opacity: 0.8;
}

.text{
  font-family: "Noto Sans";
  font-size: 20px;
  word-spacing: 1px;
  text-align: justify;
}

.card-title{
  font-family: "Funnel Display";
  font-size: 20x;
  word-break: break-word;
}

.card-text{
  font-family: "Noto Sans";
  font-size: 15px;
}

.iframe-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
}

.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
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

.social-media{
  font-family: "IBM Plex Mono";
  font-size: 15px;
}
</style>