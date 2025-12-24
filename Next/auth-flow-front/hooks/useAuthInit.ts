import { useEffect } from "react";
import { api } from "@/lib/api";
import { useAuthStore } from "@/store/auth";

export function useAuthInit() {
  const setUser = useAuthStore((s) => s.setUser);
  const setAccessToken = useAuthStore((s) => s.setAccessToken);
  const setInit = useAuthStore((s) => s.setInit);
  const clear = useAuthStore((s) => s.clear);

  useEffect(() => {
    const init = async () => {
      try {
        // 🔹 로그인 안 돼 있으면 여기서 401 나는 게 정상
        const refreshRes = await api.post("/auth/refresh");
        const accessToken = refreshRes.data.accessToken;
        setAccessToken(accessToken);

        const meRes = await api.get("/auth/me");
        setUser(meRes.data);
      } catch (err) {
        // 🔥 refresh 401 = 비로그인 상태 → 정상 처리
        clear();
      } finally {
        // 🔥🔥🔥 이게 없으면 영원히 Loading
        setInit(true);
      }
    };

    init();
  }, [setAccessToken, setUser, setInit, clear]);
}
