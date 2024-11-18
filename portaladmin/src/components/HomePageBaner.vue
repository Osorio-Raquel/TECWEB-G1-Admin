<template>
    <div class="main-content">
      <div class="concept concept-one">
        <div class="hover hover-1"></div>
        <div class="hover hover-2"></div>
        <div class="hover hover-3"></div>
        <div class="hover hover-4"></div>
        <div class="hover hover-5"></div>
        <div class="hover hover-6"></div>
        <div class="hover hover-7"></div>
        <div class="hover hover-8"></div>
        <div class="hover hover-9"></div>
        <h1><p>Conviértete en <br>líder,<br>transforma el <br>futuro.<br>¡Estudia <br>Administración!</p>
        </h1>
      </div>
      
      <div class="concept concept-two">
        <div class="hover">
          <h1>I</h1>
        </div>
        <div class="hover">
          <h1>N</h1>
        </div>
        <div class="hover">
          <h1>N</h1>
        </div>
        <div class="hover">
          <h1>O</h1>
        </div>
        <div class="hover">
          <h1>V</h1>
        </div>
        <div class="hover">
          <h1>A</h1>
        </div>
        <div class="hover">
          <h1>C</h1>
        </div>
        <div class="hover">
          <h1>I</h1>
        </div>
        <div class="hover">
          <h1>O</h1>
        </div>
        <div class="hover">
          <h1>N</h1>
        </div>
    
      </div>
      
      <div class="concept concept-three">
        <div class="word">
          <div class="hover">
            <div></div>
            <div></div>
            <h1>L</h1>
          </div>
          <div class="hover">
            <div></div>
            <div></div>
            <h1>I</h1>
          </div>
          <div class="hover">
            <div></div>
            <div></div>
            <h1>D</h1>
          </div>
          <div class="hover">
            <div></div>
            <div></div>
            <h1>E</h1>
          </div>
          <div class="hover">
            <div></div>
            <div></div>
            <h1>R</h1>
          </div>
          <div class="hover">
            <div></div>
            <div></div>
            <h1>A</h1>
          </div>
          <div class="hover">
            <div></div>
            <div></div>
            <h1>Z</h1>
          </div>
          <div class="hover">
            <div></div>
            <div></div>
            <h1>G</h1>
          </div>
          <div class="hover">
            <div></div>
            <div></div>
            <h1>O</h1>
          </div>
        </div>
      </div>
    
      <div class="concept concept-five">
        <h1 class="word">
          <span class="char">E</span>
          <span class="char">M</span>
          <span class="char">P</span>
          <span class="char">R</span>
          <span class="char">E</span>
          <span class="char">N</span>
          <span class="char">D</span>
          <span class="char">I</span>
          <span class="char">M</span>
          <span class="char">I</span>
          <span class="char">E</span>
          <span class="char">N</span>
          <span class="char">T</span>
          <span class="char">O</span>
        </h1>
      </div>
    </div>
    
    </template>
    
    <script>
    export default {
    }
    </script>
    
    <style>
    body {
        background: #fff;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        position: relative;
    }
    
    * {
        box-sizing: border-box;
    }
    
    .main-content {
        text-align: center;
        text-transform: uppercase;
        scroll-snap-type: y mandatory;
        position: relative;
        height: 60vh;
        overflow-y: scroll;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    
    .hover,
    .word,
    h1 {
        cursor: pointer;
    }
    
    h1 {
        position: relative;
        color: #fff;
        font: 900 60px Montserrat;
        text-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    }
    
    .concept {
        position: relative;
        padding: 5em;
        height: 60vh;
        overflow: hidden;
        scroll-snap-align: center;
        &:before {
            content: "";
            position: absolute;
            width: 100%;
            height: 60vh;
            top: 0;
            left: 0;
            background: radial-gradient(rgba(0, 0, 0, 0.3), transparent);
            opacity: 0;
            transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
        }
        &:hover:before {
            opacity: 0.5;
        }
    }
    
    .concept-one {
        display: grid;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        grid: repeat(3, 1fr)/ repeat(3, 1fr);
        background: yellow;
        background: url("https://plus.unsplash.com/premium_photo-1661761077411-d50cba031848?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
            no-repeat center center / cover;
        h1 {
            position: absolute;
            margin: auto;
            left: 0;
            right: 0;
            top: 50%;
            margin-top: -280px;
            transition: 0.5s ease;
            z-index: 0;
            letter-spacing: 25px;
            text-shadow: 
            0 0 5px #003F88,    /* Brillo azul cercano */
            0 0 10px #003F88,   /* Brillo más difuso */
            0 0 20px #003F88,   /* Brillo aún más difuso */
            0 0 40px #003F88;   /* Brillo máximo */
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        }
        .hover {
            z-index: 1;
        }
        .hover-1:hover ~ h1 {
            left: 30px;
            margin-top: -300px;
        }
        .hover-2:hover ~ h1 {
            margin-top: -280px;
        }
        .hover-3:hover ~ h1 {
            right: 30px;
            margin-top: -280px;
        }
        .hover-4:hover ~ h1 {
            left: 230px;
        }
        .hover-6:hover ~ h1 {
            right: 230px;
        }
        .hover-7:hover ~ h1 {
            left: 230px;
            margin-top: -50px;
        }
        .hover-8:hover ~ h1 {
            margin-top: -250px;
        }
        .hover-9:hover ~ h1 {
            right: 230px;
            margin-top: -250px;
        }
    }
    
    .concept-two {
        display: grid;
        grid: 100% / repeat(10, 1fr);
        padding: 5em 15em;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        background: url(https://plus.unsplash.com/premium_photo-1661580602827-1e5d86b0fe21?q=80&w=1354&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)
            center center / cover;
        .hover {
            position: relative;
            display: grid;
            place-items: center;
        }
        h1 {
            color: transparent;
            text-align: 0 1px 1px;
            -webkit-text-stroke: 2px #fff;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            text-shadow: none;
            font-size: 80px;
            transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .hover:hover h1 {
          transform: scale(1.5);
        color: white; /* Color blanco al hacer hover */
        -webkit-text-stroke: 2px transparent; /* El borde se vuelve transparente */
        text-shadow: 
            0 0 5px #003F88,    /* Brillo azul cercano */
            0 0 10px #003F88,   /* Brillo más difuso */
            0 0 20px #003F88,   /* Brillo aún más difuso */
            0 0 40px #003F88;   /* Brillo máximo */
        }
    }
    
    .concept-three {
        padding: 5em;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        .word {
            display: flex;
            align-items: center;
            max-width: 500px;
            margin: auto;
        }
        background: url(https://plus.unsplash.com/premium_photo-1661412731142-8265636b931c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)
            center center / cover;
        .hover {
            flex: 1;
            display: grid;
            height: calc(100vh - 10em);
            grid: repeat(2, 2fr) / 100%;
            position: relative;
            div {
                position: relative;
                z-index: 5;
            }
            div:nth-child(1):hover ~ h1 {
                margin-top: -10px;
            }
            div:nth-child(2):hover ~ h1 {
                margin-top: -50px;
            }
        }
        h1 {
          position: absolute;
        margin: auto;
        left: 0;
        right: 0;
        top: 50%;
        margin-top: -30px;
        transition: 0.3s cubic-bezier(0.23, 1, 0.32, 1);
        z-index: 0;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; /* Implementación de la fuente */
        font-size: 70px; /* Tamaño de la fuente */
        color: white; /* Color del texto */
        
        /* Efecto de borde brillante azul */
        text-shadow: 
            0 0 5px #003F88,    /* Brillo azul cercano */
            0 0 10px #003F88,   /* Brillo más difuso */
            0 0 20px #003F88,   /* Brillo aún más difuso */
            0 0 40px #003F88;   /* Brillo máximo */
        }
    }
    
    .concept-five {
    background: url(https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)
        center center / cover;
    display: flex;
    
    align-items: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; /* Implementación de la fuente */
}

.word {
    width: 600px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
    &:hover {
        .char:nth-child(even) {
            top: 20px;
        }
        .char:nth-child(odd) {
            top: -20px;
        }
    }
}

.char {
    flex: 1;
    position: relative;
    display: inline-block;
    top: 0;
    transition: 0.5s cubic-bezier(0.19, 1, 0.22, 1);
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; /* Implementación de la fuente */
    font-size: 100px; /* Tamaño de la fuente, ajústalo según sea necesario */
    color: white;  /* Color del texto */
    
    /* Efecto de borde brillante azul */
    text-shadow: 
            0 0 5px #003F88,    /* Brillo azul cercano */
            0 0 10px #003F88,   /* Brillo más difuso */
            0 0 20px #003F88,   /* Brillo aún más difuso */
            0 0 40px #003F88;   /* Brillo máximo */
}

/* Estilos específicos para dispositivos móviles */
@media screen and (max-width: 768px) {
    .main-content {
        height: auto; /* Ajusta la altura automáticamente */
        overflow-y: auto;
        padding: 1em;
        height: 110px;
    }

    .concept {
        height: auto; /* Asegura que el contenedor se ajuste al contenido */
        padding: 2em; /* Reduce el padding para pantallas pequeñas */
    }

    h1 {
        font-size: 24px; /* Reduce el tamaño de la fuente */
        letter-spacing: 5px; /* Ajusta el espacio entre letras */
        text-shadow: 0 0 10px #003F88; /* Mantén el brillo */
    }

    .concept-one {
        height: 110px; /* Permite que el contenedor se adapte al contenido */
        padding: 1em; /* Reduce el padding en pantallas pequeñas */
        display: flex;
        flex-direction: column; /* Asegura que los elementos se apilen verticalmente */
        align-items: center; /* Centra los elementos dentro del contenedor */
        text-align: center; /* Centra el texto */
    }

    .concept-one h1 {
        font-size: 20px; /* Reduce el tamaño de la fuente */
        letter-spacing: 3px; /* Ajusta el espaciado entre letras */
        margin-bottom: 1em; /* Añade espacio inferior */
    }

    .concept-one .hover {
        height: 40px; /* Reduce la altura de las áreas de hover */
        width: 80%; /* Asegura que ocupen menos espacio horizontal */
        margin: 5px 0; /* Añade espacio entre las áreas */
    }

    .concept-one .word {
        max-width: 100%; /* Asegura que no desborde el contenedor */
        flex-wrap: wrap; /* Permite que el contenido se divida en múltiples líneas */
        justify-content: center;
    }
    .concept-three h1 {
        font-size: 20px;
        text-shadow: none; /* Opcional: menos brillo en pantallas pequeñas */
    }

    .concept-two .hover h1 {
        font-size: 30px;
        -webkit-text-stroke: 1px #fff; /* Ajusta el grosor del contorno */
    }

    .concept .hover {
        height: 50px; /* Reduce el tamaño de las áreas de hover */
        margin: 5px; /* Añade espacio entre elementos */
    }

    .word {
        flex-wrap: wrap; /* Permite que las letras se adapten en múltiples líneas */
        max-width: 100%; /* Ocupa todo el ancho de la pantalla */
        justify-content: center; /* Centra los elementos */
    }
}
@media screen and (max-width: 768px) {
    .concept-five .word span {
        font-size: 20px; /* Ajusta el tamaño solo en dispositivos móviles */
    }
}


    
    </style>