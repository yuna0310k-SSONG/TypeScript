"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth";
import { logout } from "@/services/auth";

export default function SettingsPage() {
  const user = useAuthStore((s) => s.user);
  const clear = useAuthStore((s) => s.clear);
  const router = useRouter();

  const onLogout = useCallback(async () => {
    try {
      await logout();
    } catch {
      // 로그아웃 실패해도 클라이언트 상태는 초기화
    } finally {
      clear();
      router.replace("/login");
    }
  }, [clear, router]);

  return (
    <section className="max-w-md mx-auto px-4 py-8 space-y-6">
      <h2 className="text-lg font-semibold">Settings</h2>

      {user?.email && (
        <div>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
      )}

      <button
        onClick={onLogout}
        className="w-full bg-black text-white py-2 rounded"
      >
        Log out
      </button>
    </section>
  );
}
