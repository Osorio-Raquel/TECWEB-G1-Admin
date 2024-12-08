<template>
    <div class="medallero">
      <div class="medallero-box">
        <h1> Medallero de Mascotas
        </h1>
        <table>
          <thead>
            <tr>
              <th class="small-col">Posición</th>
              <th>Mascota</th>
              <th>🥇 Medallas</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(mascota, index) in medalleroOrdenado" :key="mascota.nombre">
              <td class="small-col">{{ index + 1 }}</td>
              <td>
                <span class="mascota-nombre">{{ mascota.nombre }}</span>
              </td>
              <td>
                <div class="medalla-container">
                  <span class="medalla" :data-medallas="mascota.medallas">{{ mascota.medallas }}</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        mascotas: [
          { nombre: "Luna", medallas: 12 },
          { nombre: "Max", medallas: 9 },
          { nombre: "Bella", medallas: 15 },
          { nombre: "Charlie", medallas: 8 },
          { nombre: "Milo", medallas: 11 },
          { nombre: "Nala", medallas: 14 },
          { nombre: "Rocky", medallas: 10 },
          { nombre: "Simba", medallas: 13 },
          { nombre: "Coco", medallas: 7 },
          { nombre: "Bailey", medallas: 6 },
        ],
      };
    },
    computed: {
      medalleroOrdenado() {
        return [...this.mascotas].sort((a, b) => b.medallas - a.medallas);
      },
    },
  };
  </script>
  
  <style>
  .medallero {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(120deg, #2c3e50, #34495e);
    padding: 20px;
    color: #fff; 
  }
  
  .medallero-box {
    width: 90%;
    max-width: 800px;
    background: linear-gradient(145deg, #ffffff, #e8e8e8);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    padding: 30px;
    text-align: center;
    animation: fadeIn 1.5s ease-out;
  }
  
  h1 {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 2.5rem;
    margin-bottom: 30px;
    color: #1b263b; 
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    border-bottom: 5px solid #1f4e79; 
    display: inline-block;
    padding-bottom: 10px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  th, td {
    padding: 15px;
    font-size: 1rem;
    text-align: center;
  }
  
  th {
    background-color: #1f4e79; 
    color: #fdfdfd; 
    text-transform: uppercase;
    letter-spacing: 1px;
    border: none;
  }
  
  td {
    border-bottom: 1px solid #ddd;
    color: #2c3e50; 
  }
  
  tbody tr:hover {
    background: #eaf6ff;
    transition: background 0.3s ease;
  }
  
  .small-col {
    width: 5%;
    font-size: 0.8rem;
    font-weight: bold;
    color: #1b263b;
  }
  
  .mascota-nombre {
    font-size: 1.2rem;
    font-weight: bold;
    color: #1f4e79;
  }
  
  .medalla-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .medalla {
    display: inline-block;
    width: 70px;
    height: 70px;
    line-height: 70px;
    text-align: center;
    border-radius: 50%;
    background: radial-gradient(circle, #ffd700, #f1c40f);
    box-shadow: 0px 10px 15px rgba(255, 215, 0, 0.4), inset 0 2px 5px rgba(255, 255, 255, 0.4);
    font-size: 1.4rem;
    font-weight: bold;
    color: white;
    position: relative;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .medalla:hover {
    transform: scale(1.2);
    box-shadow: 0px 12px 25px rgba(255, 215, 0, 0.8), inset 0 3px 6px rgba(255, 255, 255, 0.5);
  }
  
  .medalla::after {
    content: "🏅";
    font-size: 2rem;
    position: absolute;
    top: -15px;
    right: -15px;
    color: white;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }
  
  /* Animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>
  