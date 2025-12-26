import { api } from "@/lib/api";
import type { User } from "@/store/auth";

export const login = async (data: { email: string; password: string }) => {
  const res = await api.post("/auth/login", data);
  return res.data as { user: User; accessToken: string };
};

export const signup = async (data: {
  email: string;
  password: string;
  nickname: string;
  avatar_url?: string;
}) => {
  return api.post("/auth/signup", data);
};

export const refresh = async () => {
  const res = await api.post("/auth/refresh");
  return res.data as { accessToken: string };
};

export const me = async () => {
  const res = await api.get("/auth/me");
  return res.data as User;
};

export const updateProfile = async (data: {
  nickname?: string;
  avatar_url?: string;
}) => {
  const res = await api.patch("/auth/profile", data);
  return res.data as User;
};

export const changePassword = async (data: {
  currentPassword: string;
  newPassword: string;
}) => {
  await api.patch("/auth/password", data);
};

export const logout = async () => {
  await api.post("/auth/logout");
};
