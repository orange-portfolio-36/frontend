import { CustomSession } from "@/@types/user";
import axios from "axios";
import { DefaultSession } from "next-auth";
import { getSession } from "next-auth/react";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const session = (await getSession()) as CustomSession;
    if (session) {
      config.headers.Authorization = `Bearer ${session.jwt}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
