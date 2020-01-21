import axios from "axios";

const api = axios.create({
  baseURL: "hhtp://localhost:8080/api"
});

export default api;
