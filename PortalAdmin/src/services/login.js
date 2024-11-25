const baseURL = "http://localhost:8080";

// Redirige al usuario para autenticarse con Google
async function loginWithGoogle() {
  try {
    window.location.href = `${baseURL}/oauth2/authorization/google`;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
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
          localStorage.setItem("access_token", data.access_token);
          localStorage.setItem("name", data.name);
          localStorage.setItem("email", data.email);
      })
      
}
catch(error) {
  console.error("Error al obtener la información del usuario:", error);
}
}

export default {
  loginWithGoogle,
  fetchUserData,
};
