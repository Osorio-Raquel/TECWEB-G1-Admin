export default class Login {
    static loginWithGoogle() {
      const backendLoginUrl = "http://localhost:8080/oauth2/authorization/google";
      window.location.href = backendLoginUrl;
    }

    static async handleLoginResponse() {
    try {
        // Llama al endpoint que devuelve los datos del usuario después de iniciar sesión
        const response = await fetch("http://localhost:8080/login/success"); // Ajusta esta URL si es necesario

        if (response.ok) {
            // Convierte la respuesta a JSON
            const userData = await response.json();

            // Guarda los datos en localStorage
            localStorage.setItem("user", JSON.stringify(userData));

            console.log("Inicio de sesión exitoso:", userData);

            // Mensaje de bienvenida al usuario
            alert(`Bienvenido, ${userData.name}`);
        } else {
            // Maneja errores en caso de respuesta no exitosa
            console.error("Error al obtener datos del usuario:", response.statusText);
            alert("Error al iniciar sesión. Por favor, intenta de nuevo.");
        }
    } catch (error) {
        // Captura errores en la conexión o problemas con el fetch
        console.error("Error al manejar la respuesta del inicio de sesión:", error);
        alert("Ocurrió un error inesperado. Por favor, verifica tu conexión.");
    }
}

      
  }
  