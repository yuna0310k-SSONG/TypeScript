"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/services/auth";
import { useAuthStore } from "@/store/auth";

export default function LoginPage() {
  const router = useRouter();
  const setUser = useAuthStore((s) => s.setUser);
  const setAccessToken = useAuthStore((s) => s.setAccessToken);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(""); // 🔥 추가

  const onLogin = async () => {
    setErrorMsg(""); // 기존 에러 초기화
    try {
      const res = await login({ email, password });
      setAccessToken(res.accessToken);
      setUser(res.user);
      router.replace("/");
    } catch (err: any) {
      // 🔥 로그인 실패 안내
      setErrorMsg("이메일 또는 비밀번호가 올바르지 않습니다");
    }
  };

  return (
    <div className="w-full max-w-sm bg-white border rounded-lg px-6 py-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Instagram</h1>

      <div className="flex flex-col items-center space-y-4">
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setErrorMsg(""); // 🔥 입력 시 에러 제거
          }}
          className="w-[180px] border px-3 py-2 rounded text-sm text-center"
        />

        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setErrorMsg(""); // 🔥 입력 시 에러 제거
          }}
          className="w-[180px] border px-3 py-2 rounded text-sm text-center"
        />

        {/* 🔥 에러 메시지 */}
        {errorMsg && (
          <p className="text-[10px] text-rose-500 mt-1">{errorMsg}</p>
        )}

        <button
          onClick={onLogin}
          className="w-[20px] mt-4 py-2  text-sm font-semibold hover:bg-gray-800 active:scale-95 transition"
        >
          로그인
        </button>
      </div>
    </div>
  );
}
