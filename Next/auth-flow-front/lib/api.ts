import axios from "axios";
import { useAuthStore } from "@/store/auth";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://auth-flow.fly.dev",
  withCredentials: true, // 🔥 refresh 쿠키 필수
});

// 요청 인터셉터: accessToken 자동 주입
api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 응답 인터셉터: 401 → refresh → 재요청
api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const original = error.config;

    // 🔥 refresh 요청 자체는 가로채지 않는다
    if (original.url === "/auth/refresh") {
      return Promise.reject(error);
    }

    if (error.response?.status === 401 && !original._retry) {
      original._retry = true;

      try {
        const res = await api.post("/auth/refresh");
        const newToken = res.data.accessToken;

        useAuthStore.getState().setAccessToken(newToken);
        original.headers.Authorization = `Bearer ${newToken}`;
        return api(original);
      } catch {
        useAuthStore.getState().clear();
      }
    }

    return Promise.reject(error);
  }
);
