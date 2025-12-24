"use client";

import { useAuthInit } from "@/hooks/useAuthInit";

export default function Providers({ children }: { children: React.ReactNode }) {
  useAuthInit(); // 🔥 이거 없으면 메인 영원히 안 뜸
  return <>{children}</>;
}
