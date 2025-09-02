import axios from 'axios';

const api = axios.create({
  baseURL: "https://api-node-js-three.vercel.app/"
});

export default api;
