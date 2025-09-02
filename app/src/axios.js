import axios from 'axios';

const api = axios.create({
  baseURL: "https://project-ecommerce-react-js-xfbp.vercel.app/"
});

export default api;