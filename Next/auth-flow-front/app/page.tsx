"use client";

import Link from "next/link";
import { useAuthStore } from "@/store/auth";
import Stories from "@/components/Stories";
import Feed from "@/components/Feed";

export default function HomePage() {
  const user = useAuthStore((s) => s.user);
  const isInit = useAuthStore((s) => s.isInit);

  if (!isInit) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <p className="text-gray-400 text-sm">Loading...</p>
      </div>
    );
  }

  // 🔓 로그인 전
  if (!user) {
    return (
      <section className="min-h-[70vh] flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold mb-6">Instagram</h1>
      </section>
    );
  }

  // 🔐 로그인 후 (임시)
  return (
    <section className="w-full max-w-md mx-auto py-6 space-y-6">
      {/* <Stories />
      <Feed /> */}
    </section>
  );
}
