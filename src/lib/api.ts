import axios from "axios";

const api = axios.create({
  baseURL: process.env.COINGECKO_API_URL,
  headers: {
    "x-cg-demo-api-key": process.env.COINGECKO_API_KEY,
  },
});

export default api;
