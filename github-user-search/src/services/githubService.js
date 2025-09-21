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


export const searchUsersAdvanced = async ({
  query = "",
  location = "",
  minRepos = "",
  page = 1,
  perPage = 10,
}) => {
 
  let q = query.trim();
  if (location.trim()) q += `+location:${location.trim()}`;
  if (minRepos !== "" && !Number.isNaN(Number(minRepos)))
    q += `+repos:>=${minRepos}`;

  const { data } = await api.get("/search/users", {
    params: { q, page, per_page: perPage },
  });

  return data;
};

export default api;
