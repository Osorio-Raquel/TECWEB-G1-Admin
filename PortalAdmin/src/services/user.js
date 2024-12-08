// user.js

const baseURL = "http://localhost:8080/api/v1";

// Función para obtener un usuario por correo de Google
async function getUserByEmailPrimeraVez() {
  try {
    const correoGoogle = sessionStorage.getItem("email");
    console.log("Correo: ", sessionStorage.getItem("email"));
    const nombre = sessionStorage.getItem('name');
    console.log("Nombre: ", sessionStorage.getItem("name"));
    const token = sessionStorage.getItem("access_token");
    // Realizamos la petición GET a la API
    const response = await fetch(`${baseURL}/usuarios?correoGoogle=${correoGoogle}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`, // Autenticación con el token de Google
          'Content-Type': 'application/json',
        },
      });
  
      // Verificamos si la respuesta es exitosa
      if (response.status == 404) {
        
        createUser(nombre, correoGoogle, 1, token);
      } else {
        // Parseamos la respuesta a JSON
        const data = await response.json();
    
        // Verificamos si la respuesta está vacía o no contiene los datos esperados
        if (!data || Object.keys(data).length === 0) {
            throw new Error("No se encontró el usuario con el correo proporcionado.");
        }
    
        // Retornamos los datos del usuario
        return data;
      }
      
    } catch (error) {
      console.error("Error durante la solicitud:", error);
      throw error; // Lanza el error para que se maneje en el componente
    }
  }

  // Función para crear un nuevo usuario
async function createUser(nombreGoogle, correoGoogle, idTipoAcceso, token) {
    try {
      // Definimos el cuerpo de la solicitud
      const userData = {
        nombreGoogle: nombreGoogle,
        correoGoogle: correoGoogle,
        idTipoAcceso: idTipoAcceso,
      };

      console.log(userData);
  
      // Realizamos la solicitud POST a la API
      const response = await fetch(`${baseURL}/usuarios`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`, // Autenticación con el token de Google
          'Content-Type': 'application/json', // Especificamos que el contenido es JSON
        },
        body: JSON.stringify(userData), // Convertimos los datos a formato JSON
      });
  
      // Verificamos si la respuesta es exitosa (código 2xx)
      if (!response.ok) {
        throw new Error(`Error al crear el usuario: ${response.statusText}`);
      }
  
      // Parseamos la respuesta JSON
      const data = await response.json();
  
      // Retornamos los datos del usuario creado
      return data;
    } catch (error) {
      console.error("Error durante la solicitud:", error);
      throw error; // Lanza el error para que se maneje en el componente
    }
  }

// Función para obtener un usuario por correo de Google
async function getUserByEmail() {
  try {
    // Realizamos la petición GET a la API
    const correoGoogle = sessionStorage.getItem("email");
    console.log("Correo: ", sessionStorage.getItem("email"));
    const token = sessionStorage.getItem("access_token");
    const response = await fetch(`${baseURL}/usuarios?correoGoogle=${correoGoogle}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`, // Autenticación con el token de Google
        'Content-Type': 'application/json',
      },
    });

    // Verificamos si la respuesta es exitosa (código 200)
    if (response.status === 404) {
      throw new Error("Usuario no encontrado.");
    }

    // Verificamos si la respuesta fue exitosa y tiene datos
    if (!response.ok) {
      throw new Error(`Error al obtener el usuario: ${response.statusText}`);
    }

    // Parseamos la respuesta a JSON
    const data = await response.json();

    // Verificamos si la respuesta está vacía o no contiene los datos esperados
    if (!data || Object.keys(data).length === 0) {
      throw new Error("No se encontró el usuario con el correo proporcionado.");
    }

    // Retornamos los datos del usuario
    return data;
  } catch (error) {
    console.error("Error durante la solicitud:", error);
    throw error; // Lanza el error para que se maneje en el componente
  }
}

async function fetchUsers() {
    const token = sessionStorage.getItem('access_token');  // Obtener el token del sessionStorage
  
    // Verifica si el token existe
    if (!token) {
      console.error("Token de autorización no encontrado.");
      return;
    }
  
    try {
      const response = await fetch('http://localhost:8080/api/v1/usuarios', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,  // Incluir el token en los headers
          'Content-Type': 'application/json',  // Asegurarse de que la respuesta esté en JSON
        },
      });
  
      // Verificar si la respuesta fue exitosa
      if (!response.ok) {
        throw new Error('Error al obtener los usuarios');
      }
  
      // Convertir la respuesta en formato JSON
      const data = await response.json();
  
      console.log("Usuarios obtenidos:", data);  // Mostrar los usuarios obtenidos
      return data;
    } catch (error) {
      console.error("Error al consumir la API:", error);  // Manejo de errores
    }
  }
  
  


  
  export default {
    getUserByEmail,
    createUser,
    getUserByEmailPrimeraVez,
    fetchUsers,
  };