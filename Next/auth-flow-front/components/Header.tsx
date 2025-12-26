"use client";

import Link from "next/link";
import Image from "next/image";
import { useAuthStore } from "@/store/auth";

export default function Header() {
  const user = useAuthStore((state) => state.user);
  const isInit = useAuthStore((state) => state.isInit);

  if (!isInit) return null;

  return (
    <header className="w-full max-w-[1200px] mx-auto top-0 left-0 right-0 z-50 h-14 border-b bg-white flex items-center justify-between px-4">
      {/* 로고 */}
      <Link href="/" className="font-bold text-lg tracking-tight">
        Instagram
      </Link>

      {/* 우측 영역 */}
      {user ? (
        // 🔐 로그인 상태
        <div className="flex items-center gap-6">
          {/* ✅ 추가된 한 줄 */}
          <span className="text-sm text-gray-700">
            <strong>{user.nickname}</strong>님 어서오세요!
          </span>

          <Link href="/profile/edit">
            <div className="w-7 h-7 rounded-full overflow-hidden shrink-0">
              <Image
                src={user.avatar_url || "/default-avatar.png"}
                alt="avatar"
                width={32}
                height={32}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </Link>
        </div>
      ) : (
        // 🔓 비로그인 상태
        <div className="flex items-center gap-5 text-sm">
          <Link href="/login" className="text-gray-700">
            Log in
          </Link>
          <Link
            href="/signup"
            className="font-semibold text-black border px-3 py-1 rounded"
          >
            Sign up
          </Link>
        </div>
      )}
    </header>
  );
}
