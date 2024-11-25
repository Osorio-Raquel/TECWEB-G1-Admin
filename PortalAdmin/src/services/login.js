const baseURL = "http://localhost:8080";

// Redirige al usuario para autenticarse con Google
async function loginWithGoogle() {
  try {
    window.location.href = `${baseURL}/oauth2/authorization/google`;
  } catch (error) {
    console.error("Error during login:", error);
  }

}

function checkIfLoggedIn() {
  // Verifica si el nombre del usuario está almacenado en sessionStorage
  const userName = sessionStorage.getItem('name');
  return userName !== null; // Si hay un nombre, el usuario está autenticado
}

// Recupera los datos del usuario autenticado
async function fetchUserData() {
  try {
    fetch("http://localhost:8080/api/v1/user-info", {
      method: "GET",
      credentials: "include"  // Incluir las cookies de la sesión en la solicitud
  })
      .then(response => response.json())
      .then(data => {
          console.log(data);
          sessionStorage.setItem("access_token", data.access_token);
          sessionStorage.setItem("name", data.name);
          sessionStorage.setItem("email", data.email);
      })
      
}
catch(error) {
  console.error("Error al obtener la información del usuario:", error);
}
}

async function logout() {
  sessionStorage.clear(); // Limpia todos los datos del localStorage
  console.log("Sesión cerrada y datos limpiados.");
}


export default {
  loginWithGoogle,
  fetchUserData,
  logout,
  checkIfLoggedIn,
};
