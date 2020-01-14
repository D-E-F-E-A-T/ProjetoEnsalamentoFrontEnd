import axios from 'axios';

export default axios.create({
    baseURL: "https://localhost:44342/api",
    responseType: "json"
  });