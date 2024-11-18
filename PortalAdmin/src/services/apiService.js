import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080/', // URL base de la API
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
