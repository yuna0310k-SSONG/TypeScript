import { create } from "zustand";

export type User = {
  id: string;
  email: string;
  nickname: string;
  avatar_url: string | null;
};

type AuthState = {
  accessToken: string | null;
  user: User | null;
  isInit: boolean;

  setAuth: (user: User, token: string) => void;
  setAccessToken: (token: string | null) => void;
  setUser: (user: User | null) => void;
  setInit: (v: boolean) => void;
  clear: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  user: null,
  isInit: false,

  setAuth: (user, token) => set({ user, accessToken: token }),
  setAccessToken: (token) => set({ accessToken: token }),
  setUser: (user) => set({ user }),
  setInit: (v) => set({ isInit: v }),

  clear: () => set({ accessToken: null, user: null, isInit: true }),
}));
