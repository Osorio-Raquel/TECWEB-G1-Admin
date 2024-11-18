export default class Login {
    static loginWithGoogle() {
      const backendLoginUrl = "http://localhost:8080/oauth2/authorization/google";
      window.location.href = backendLoginUrl;
    }

    static async handleLoginResponse() {
    try {
        const response = await fetch("http://localhost:8080/api/v1/personas"); // Ajusta esta URL si es necesario
        console.log("Hasta el response");
        if (response.ok) {
            const userData = await response.json();
            localStorage.setItem("user", JSON.stringify(userData));

            console.log("Inicio de sesión exitoso:", userData);
            alert(`Bienvenido, ${userData.name}`);
        } else {
            console.error("Error al obtener datos del usuario:", response.statusText);
            alert("Error al iniciar sesión. Por favor, intenta de nuevo.");
        }
    } catch (error) {
        console.error("Error al manejar la respuesta del inicio de sesión:", error);
        alert("Ocurrió un error inesperado. Por favor, verifica tu conexión.");
    }
}

      
  }
  