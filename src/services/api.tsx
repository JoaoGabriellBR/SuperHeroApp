import axios from 'axios';

const apiURL =  process.env.NEXT_API_URL || 'http://localhost:3002';

const api = axios.create({
  baseURL: apiURL,
});

export default api;