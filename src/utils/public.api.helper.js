import { publicAxiosInstance } from "./api";

export async function handleUserLogin(params) {
  try {
    const res = await publicAxiosInstance.post("auth/login", params);
    return res.data;
  } catch (error) {
    return error.response.data;
  }
}

export async function handleUserRegistration(params) {
  try {
    const res = await publicAxiosInstance.post("auth/register", params);
    return res.data;
  } catch (error) {
    return error.response.data;
  }
}
