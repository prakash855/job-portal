import axios from "axios";

export const API_REQUEST_TIMEOUT = 30000;

export const API_BASE_URL = "https://jobs-api.squareboat.info/api/v1";

export const publicAxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  timeout: API_REQUEST_TIMEOUT,
});

export const privateAxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: `${localStorage.getItem("token")}`,
  },
  timeout: API_REQUEST_TIMEOUT,
});

privateAxiosInstance.interceptors.request.use(function (config) {
  const token = `${localStorage.getItem("token")}`;
  config.headers.Authorization = token ? token : "";
  return config;
});
