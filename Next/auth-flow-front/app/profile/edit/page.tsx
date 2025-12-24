"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation"; // 🔥 추가
import { useAuthStore } from "@/store/auth";
import { uploadAvatar } from "@/services/upload";
import { updateProfile, logout } from "@/services/auth"; // 🔥 logout 추가
import { api } from "@/lib/api";

export default function EditProfilePage() {
  const router = useRouter(); // 🔥 추가
  const user = useAuthStore((s) => s.user);
  const setUser = useAuthStore((s) => s.setUser);
  const clear = useAuthStore((s) => s.clear); // 🔥 추가
  const [nickname, setNickname] = useState(user?.nickname ?? "");

  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const avatar_url = await uploadAvatar(e.target.files[0]);
    const updated = await updateProfile({ avatar_url });
    setUser(updated);
  };

  const onSave = async () => {
    const updated = await updateProfile({ nickname });
    setUser(updated);
  };

  // 🔥 로그아웃 핸들러 (추가)
  const onLogout = async () => {
    try {
      await api.post("/auth/logout"); // 서버 refresh 쿠키 제거
    } finally {
      clear(); // 프론트 상태 초기화
      router.replace("/login");
    }
  };

  return (
    <section className="space-y-6">
      <div className="flex flex-col items-center">
        <Image
          src={user?.avatar_url || "/default-avatar.png"}
          alt="avatar"
          width={80}
          height={80}
          className="rounded-full"
        />
        <label className="text-blue-500 text-sm mt-2 cursor-pointer">
          Change profile photo
          <input type="file" hidden onChange={onFileChange} />
        </label>
      </div>

      <div>
        <label className="block text-sm font-medium">Username</label>
        <input
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          className="w-full border px-3 py-2 rounded mt-1"
        />
      </div>

      <button
        onClick={onSave}
        className="w-full bg-black text-white py-2 rounded"
      >
        Save
      </button>

      {/* 🔥 로그아웃 버튼만 추가 */}
      <button
        onClick={onLogout}
        className="w-full text-sm text-rose-500 hover:underline"
      >
        Log out
      </button>
    </section>
  );
}
