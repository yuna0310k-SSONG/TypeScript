"use client";

import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth";
import { logout } from "@/services/auth";

export default function SettingsPage() {
  const clear = useAuthStore((s) => s.clear);
  const router = useRouter();

  const onLogout = async () => {
    await logout();
    clear();
    router.replace("/login");
  };

  return (
    <section className="space-y-6">
      <h2 className="text-lg font-semibold">Settings</h2>

      <button
        onClick={onLogout}
        className="w-full bg-black text-white py-2 rounded"
      >
        Log out
      </button>
    </section>
  );
}
