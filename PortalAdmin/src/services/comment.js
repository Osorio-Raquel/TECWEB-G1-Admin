// archivo: comentariosService.js

const API_URL = "http://localhost:8080/api/v1/comentarios/foro/";

async function fetchCommentsByForumId (forumId) {
  // Obtener el token del sessionStorage
  const TOKEN = sessionStorage.getItem("access_token");

  try {
    const response = await fetch(`${API_URL}${forumId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
}

async function crearComentario(texto, idForo, idUsuario) {
  const url = "http://localhost:8080/api/v1/comentarios";
  const token = sessionStorage.getItem("access_token");

  // Obtener fecha y hora actual en formato ISO
  const fechaHora = new Date().toISOString();

  const comentario = {
    texto: texto,
    fechaHora: fechaHora,
    idForo: idForo,
    idUsuario: idUsuario,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comentario),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    console.log("Comentario creado:", data);
  } catch (error) {
    console.error("Error al crear el comentario:", error);
  }
}

export default {
  fetchCommentsByForumId,
  crearComentario,
};

