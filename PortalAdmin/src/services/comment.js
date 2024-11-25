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

export default {
    fetchCommentsByForumId,
};

