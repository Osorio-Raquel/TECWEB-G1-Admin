<template>
    <div class="theme-switch">
      <input
        type="checkbox"
        class="theme-switch__checkbox"
        id="theme-switch-checkbox"
        v-model="isDarkMode"
      />
      <label for="theme-switch-checkbox" class="theme-switch__container">
        <div class="theme-switch__circle-container">
          <div class="theme-switch__sun-moon-container">
            <div v-if="isDarkMode" class="theme-switch__moon"></div>
            <div v-else class="theme-switch__sun"></div>
          </div>
          <div class="theme-switch__spot"></div>
          <div class="theme-switch__clouds"></div>
        </div>
      </label>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isDarkMode: false, // Variable para controlar el modo oscuro
      };
    },
    watch: {
      // Vigilar el cambio del modo oscuro
      isDarkMode(newVal) {
        // Cambiar el tema en función de isDarkMode
        document.body.classList.toggle('dark-mode', newVal);
      },
    },
  };
  </script>
  
  <style scoped>
  .theme-switch {
    --toggle-size: 30px;
    --container-width: 5.625em;
    --container-height: 2.5em;
    --container-radius: 6.25em;
    --container-light-bg: #3d7eae;
    --container-night-bg: #1d1f2c;
    --circle-container-diameter: 3.375em;
    --sun-moon-diameter: 2.125em;
    --sun-bg: #ecca2f;
    --moon-bg: #c4c9d1;
    --spot-color: #959db1;
    --circle-container-offset: calc((var(--circle-container-diameter) - var(--container-height)) / 2 * -1);
    --transition: 0.5s cubic-bezier(0, -0.02, 0.4, 1.25);
    --circle-transition: 0.3s cubic-bezier(0, -0.02, 0.35, 1.17);
  }
  
  .theme-switch, .theme-switch * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: var(--toggle-size);
  }
  
  .theme-switch__container {
    width: var(--container-width);
    height: var(--container-height);
    background-color: var(--container-light-bg);
    border-radius: var(--container-radius);
    overflow: hidden;
    cursor: pointer;
    transition: var(--transition);
    position: relative;
  }
  
  .theme-switch__checkbox {
    display: none;
  }
  
  .theme-switch__circle-container {
    width: var(--circle-container-diameter);
    height: var(--circle-container-diameter);
    background-color: rgba(255, 255, 255, 0.1);
    position: absolute;
    left: var(--circle-container-offset);
    top: var(--circle-container-offset);
    border-radius: var(--container-radius);
    transition: var(--circle-transition);
  }
  
  .theme-switch__sun-moon-container {
    position: relative;
    width: var(--sun-moon-diameter);
    height: var(--sun-moon-diameter);
    margin: auto;
    border-radius: var(--container-radius);
  }
  
  .theme-switch__sun {
    width: 100%;
    height: 100%;
    background-color: var(--sun-bg);
    border-radius: inherit;
  }
  
  .theme-switch__moon {
    width: 100%;
    height: 100%;
    background-color: var(--moon-bg);
    border-radius: inherit;
  }
  
  .theme-switch__spot {
    position: absolute;
    top: 0.75em;
    left: 0.312em;
    width: 0.75em;
    height: 0.75em;
    border-radius: var(--container-radius);
    background-color: var(--spot-color);
  }
  
  .theme-switch__clouds {
    width: 1.25em;
    height: 1.25em;
    background-color: var(--clouds-color);
    border-radius: var(--container-radius);
    position: absolute;
    bottom: -0.625em;
    left: 0.312em;
  }
  
  .theme-switch__checkbox:checked + .theme-switch__container {
    background-color: var(--container-night-bg);
  }
  
  .theme-switch__checkbox:checked + .theme-switch__container .theme-switch__circle-container {
    left: calc(100% - var(--circle-container-offset) - var(--circle-container-diameter));
  }
  </style>
  