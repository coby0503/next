import axios from "axios";

export const api = axios.create({
  headers: {},
  baseURL: "http://localhost:3000/",
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (e) => {
    return Promise.reject(e);
  }
);
api.interceptors.response.use(
  (config) => {
    return config;
  },
  (e) => {
    return Promise.reject(e);
  }
);
