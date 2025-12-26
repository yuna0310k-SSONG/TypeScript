"use client";

import { useState, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/services/auth";
import { useAuthStore } from "@/store/auth";
import { isValidEmail } from "@/lib/utils";

export default function LoginPage() {
  const router = useRouter();
  const setUser = useAuthStore((s) => s.setUser);
  const setAccessToken = useAuthStore((s) => s.setAccessToken);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  // 이메일 형식 검증
  const emailTouched = email.length > 0;
  const emailValid = useMemo(() => isValidEmail(email), [email]);
  const canSubmit = useMemo(
    () => emailValid && password.length > 0,
    [emailValid, password.length]
  );

  const onLogin = useCallback(async () => {
    if (!canSubmit || loading) return;

    setErrorMsg("");
    setLoading(true);
    try {
      const res = await login({ email, password });
      setAccessToken(res.accessToken);
      setUser(res.user);
      alert("로그인 성공! 🎉");
      router.replace("/");
    } catch {
      setErrorMsg("이메일 또는 비밀번호가 올바르지 않습니다");
    } finally {
      setLoading(false);
    }
  }, [canSubmit, loading, email, password, setAccessToken, setUser, router]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && canSubmit && !loading) {
        onLogin();
      }
    },
    [canSubmit, loading, onLogin]
  );

  return (
    <div className="w-full max-w-sm bg-white rounded-lg gap-4 px-6 py-8 flex flex-col items-center">
      <h2 className="text-2xl font-semibold  mt-10 mb-10">로그인</h2>

      <div className="flex flex-col items-center space-y-4 ">
        <div className="w-[300px]">
          <input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrorMsg("");
            }}
            onKeyDown={handleKeyDown}
            className="w-full border px-3 py-2 rounded text-sm text-center"
          />
          <div className="h-5 flex items-center justify-center">
            {emailTouched && !emailValid && (
              <p className="text-xs text-rose-400">
                이메일 형식으로 입력해주세요
              </p>
            )}
          </div>
        </div>

        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setErrorMsg("");
          }}
          onKeyDown={handleKeyDown}
          className="w-[300px] border px-3 py-2 rounded text-sm text-center"
        />

        {/* 🔥 에러 메시지 */}
        <div className="h-5 flex items-center justify-center">
          {errorMsg && <p className="text-[15px] text-rose-500">{errorMsg}</p>}
        </div>

        {/* ✅ 회원가입 버튼과 동일한 스타일 */}
        <button
          onClick={onLogin}
          disabled={!canSubmit || loading}
          className={`
            w-[120px]
            mt-6
            py-2
            text-sm
            font-semibold
            rounded-full
            transition-all
            duration-150
            ${
              canSubmit && !loading
                ? "bg-black text-white hover:bg-gray-800 active:scale-95 padding-x-20"
                : "bg-gray-200 text-gray-400 cursor-not-allowed padding-x-20"
            }
          `}
        >
          {loading ? "처리중..." : "로그인"}
        </button>
      </div>
    </div>
  );
}
