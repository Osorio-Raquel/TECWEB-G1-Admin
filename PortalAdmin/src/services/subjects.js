import axios from "axios";

const baseURL = "http://localhost:8080/api/v1/materias";

// Obtiene todas las materias desde el backend
async function getMaterias() {
  try {
    const token = sessionStorage.getItem("access_token"); // Obtiene el token desde localStorage
    if (!token) {
      console.error("Access token not found!");
      return null;
    }

    const response = await axios.get(baseURL, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });

    console.log(response.data);
    return response.data; // Devuelve el JSON de materias
  } catch (error) {
    console.error("Error fetching materias:", error);
    throw error;
  }
}

export default { getMaterias };
