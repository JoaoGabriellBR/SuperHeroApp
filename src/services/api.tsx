import axios from 'axios';

const apiURL = `https://superheroapi.com/api/${process.env.NEXT_API_ACCESS_TOKEN}`;

const api = axios.create({
  baseURL: apiURL,
});

export default api;