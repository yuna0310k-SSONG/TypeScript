"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { uploadAvatar } from "@/services/upload";
import { signup } from "@/services/auth";
import Avatar from "@/components/Avatar";

export default function SignupPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  /* ========= 비밀번호 UX ========= */
  const passwordTouched = password.length > 0;
  const passwordValid = password.length >= 8;

  const passwordCheckTouched = passwordCheck.length > 0;
  const passwordMatch = password === passwordCheck;

  const canSubmit =
    email.length > 0 &&
    nickname.length > 0 &&
    passwordValid &&
    passwordMatch &&
    !loading;

  /* ========= 이벤트 ========= */

  // 🔹 프로필 이미지 업로드
  const onImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;

    try {
      setLoading(true);
      const url = await uploadAvatar(e.target.files[0]);
      setAvatarUrl(url);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 회원가입
  const onSignup = async () => {
    if (!canSubmit) return;

    try {
      setLoading(true);

      await signup({
        email,
        password,
        nickname,
        avatar_url: avatarUrl ?? undefined,
      });

      // ✅ 회원가입 완료 알럿
      alert("회원가입이 완료되었습니다! 로그인 해주세요 😊");

      router.replace("/login");
    } catch (err) {
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-sm bg-white rounded-lg px-6 py-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center mb-6">Instagram</h1>

      {/* 🔥 아바타 */}
      <div className="flex flex-col items-center mb-6">
        {/* 🔥 Avatar 컴포넌트 사용 */}
        <Avatar src={avatarUrl} size={50} border />

        <label className="text-blue-500 text-sm mt-2 cursor-pointer hover:underline">
          프로필 사진 추가
          <input type="file" hidden accept="image/*" onChange={onImageChange} />
        </label>
      </div>

      {/* 🔥 입력 영역 */}
      <div className="flex flex-col items-center gap-6">
        <input
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-[100px] border px-2 py-1 rounded text-sm text-center"
        />

        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-[100px] border px-2 py-1 rounded text-sm text-center"
        />

        {passwordTouched && !passwordValid && (
          <p className="text-xs text-rose-400">
            비밀번호는 8자 이상이어야 합니다
          </p>
        )}

        <input
          type="password"
          placeholder="비밀번호 확인"
          value={passwordCheck}
          onChange={(e) => setPasswordCheck(e.target.value)}
          className="w-[100px] border px-2 py-1 rounded text-sm text-center"
        />

        {passwordCheckTouched && !passwordMatch && (
          <p className="text-xs text-rose-400">비밀번호가 일치하지 않습니다</p>
        )}

        <input
          placeholder="닉네임"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          className="w-[100px] border px-2 py-1 rounded text-sm text-center"
        />
      </div>

      {/* 🔥 회원가입 버튼 */}
      <div className="flex justify-center mt-12">
        <button
          onClick={onSignup}
          disabled={!canSubmit}
          className={`
            w-[120px]
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
