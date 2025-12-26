"use client";

import { useState, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { uploadAvatar } from "@/services/upload";
import { signup } from "@/services/auth";
import Avatar from "@/components/Avatar";
import { isValidEmail } from "@/lib/utils";

export default function SignupPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // 이메일 형식 검증
  const emailTouched = email.length > 0;
  const emailValid = useMemo(() => isValidEmail(email), [email]);

  // 비밀번호 검증
  const passwordTouched = password.length > 0;
  const passwordValid = password.length >= 8;
  const passwordCheckTouched = passwordCheck.length > 0;
  const passwordMatch = password === passwordCheck;

  const canSubmit = useMemo(
    () =>
      emailValid &&
      nickname.length > 0 &&
      passwordValid &&
      passwordMatch &&
      !loading,
    [emailValid, nickname.length, passwordValid, passwordMatch, loading]
  );

  // 프로필 이미지 업로드
  const onImageChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files?.[0]) return;

      try {
        setLoading(true);
        const url = await uploadAvatar(e.target.files[0]);
        setAvatarUrl(url);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  // 회원가입
  const onSignup = useCallback(async () => {
    if (!canSubmit) return;

    try {
      setLoading(true);
      await signup({
        email,
        password,
        nickname,
        avatar_url: avatarUrl ?? undefined,
      });
      alert("회원가입이 완료되었습니다! 로그인 해주세요 😊");
      router.replace("/login");
    } catch {
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  }, [canSubmit, email, password, nickname, avatarUrl, router]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && canSubmit && !loading) {
        onSignup();
      }
    },
    [canSubmit, loading, onSignup]
  );

  return (
    <div className="w-full max-w-sm bg-white rounded-lg px-6 py-8 flex flex-col items-center">
      <h3 className="text-2xl font-bold text-center mb-10">회원가입</h3>

      {/* 🔥 아바타 */}
      <div className="flex flex-col items-center mb-6">
        {/* 🔥 Avatar 컴포넌트 사용 */}
        <Avatar src={avatarUrl} size={100} border />

        <label className="text-blue-500 text-sm mt-2 cursor-pointer hover:underline">
          프로필 사진 추가
          <input type="file" hidden accept="image/*" onChange={onImageChange} />
        </label>
      </div>

      {/* 🔥 입력 영역 */}
      <div className="flex flex-col items-center gap-6">
        <div className="w-[300px]">
          <input
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full border px-2 py-1 rounded text-sm text-center"
          />
          <div className="h-5 flex items-center justify-center">
            {emailTouched && !emailValid && (
              <p className="text-xs text-rose-400">
                이메일 형식으로 입력해주세요
              </p>
            )}
          </div>
        </div>

        <div className="w-[300px]">
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border px-2 py-1 rounded text-sm text-center"
          />
          <div className="h-5 flex items-center justify-center">
            {passwordTouched && !passwordValid && (
              <p className="text-xs text-rose-400">
                비밀번호는 8자 이상이어야 합니다
              </p>
            )}
          </div>
        </div>

        <div className="w-[300px]">
          <input
            type="password"
            placeholder="비밀번호 확인"
            value={passwordCheck}
            onChange={(e) => setPasswordCheck(e.target.value)}
            className="w-full border px-2 py-1 rounded text-sm text-center"
          />
          <div className="h-5 flex items-center justify-center">
            {passwordCheckTouched && !passwordMatch && (
              <p className="text-xs text-rose-400">
                비밀번호가 일치하지 않습니다
              </p>
            )}
          </div>
        </div>

        <input
          placeholder="닉네임"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          className="w-[300px] border px-2 py-1 rounded text-sm text-center"
        />
      </div>

      {/* 🔥 회원가입 버튼 */}
      <div className="flex justify-center mt-12">
        <button
          onClick={onSignup}
          disabled={!canSubmit}
          className={`
            w-[150px]
            py-2
            text-sm
            font-semibold
            rounded-full
            transition-all
            duration-150
            ${
              canSubmit
                ? "bg-black text-white hover:bg-gray-800 active:scale-95"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }
          `}
        >
          {loading ? "처리중..." : "회원가입"}
        </button>
      </div>
    </div>
  );
}
