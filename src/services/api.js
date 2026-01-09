import axios from "axios";

const API_BASE_URL =
  process.env.REACT_APP_API_URL || "http://localhost:3000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add interceptor for auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const authService = {
  login: (credentials) => api.post("/login", credentials),
  register: (userData) => api.post("/register", userData),
  updateProfile: (userData) => api.put("/user/profile", userData),
};

export const simulationService = {
  getAll: () => api.get("/simulations"),
  getById: (id) => api.get(`/simulations/${id}`),
  create: (data) => api.post("/simulations", data),
  delete: (id) => api.delete(`/simulations/${id}`),
};

export default api;
