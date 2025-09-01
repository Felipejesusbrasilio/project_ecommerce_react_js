import axios from 'axios';

console.log("URL da API:", process.env.REACT_APP_API_FRONTEND); // Verifique se aparece no console

const api = axios.create({
  baseURL: process.env.REACT_APP_API_FRONTEND
});

export default api;