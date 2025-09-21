import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
  headers: { Accept: "application/vnd.github+json" },
});

api.interceptors.request.use((config) => {
  const token = import.meta.env.VITE_GITHUB_TOKEN;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const fetchUserData = async (username) => {
  const { data } = await api.get(`/users/${username}`);
  return data;
};

export const searchUsersAdvanced = async (query) => {
  const url = `https://api.github.com/search/users?q=${query}`;
  const { data } = await axios.get(url);
  return data;
};

export default api;
