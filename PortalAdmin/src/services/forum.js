const baseURL = "http://localhost:8080";

async function getAllForums() {
  try {
    const token = sessionStorage.getItem("access_token");
    if (!token) {
      throw new Error("Token no encontrado en sessionStorage");
    }

    const response = await fetch(`${baseURL}/api/v1/foros`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    // Verificar si la respuesta es exitosa
    if (!response.ok) {
      throw new Error(`Error al obtener los foros: ${response.statusText}`);
    }

    // Convertir respuesta a JSON
    const forums = await response.json();
    return forums;
  } catch (error) {
    console.error("Error al consumir la API de foros:", error);
    throw error;
  }
}

export default {
  getAllForums,
};
