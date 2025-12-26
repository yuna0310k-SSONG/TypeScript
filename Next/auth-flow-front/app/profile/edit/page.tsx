"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth";
import { uploadAvatar } from "@/services/upload";
import { updateProfile, changePassword, logout } from "@/services/auth";

export default function EditProfilePage() {
  const user = useAuthStore((s) => s.user);
  const setUser = useAuthStore((s) => s.setUser);
  const clear = useAuthStore((s) => s.clear);
  const router = useRouter();
  const [nickname, setNickname] = useState(user?.nickname ?? "");
  const [isEditingNickname, setIsEditingNickname] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordCheck, setNewPasswordCheck] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordLoading, setPasswordLoading] = useState(false);

  // 비밀번호 검증
  const newPasswordTouched = newPassword.length > 0;
  const newPasswordValid = newPassword.length >= 8;
  const newPasswordCheckTouched = newPasswordCheck.length > 0;
  const newPasswordMatch = newPassword === newPasswordCheck;

  // user 변경 시 nickname 동기화
  useEffect(() => {
    if (user?.nickname) {
      setNickname(user.nickname);
    }
  }, [user?.nickname]);

  const onFileChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files || loading) return;

      setLoading(true);
      try {
        const avatar_url = await uploadAvatar(e.target.files[0]);
        const updated = await updateProfile({ avatar_url });
        setUser(updated);
        alert("프로필 사진이 변경되었습니다! ✨");
      } catch {
        alert("프로필 사진 변경에 실패했습니다.");
      } finally {
        setLoading(false);
      }
    },
    [loading, setUser]
  );

  const onSaveNickname = useCallback(async () => {
    if (loading || !nickname.trim()) return;

    setLoading(true);
    try {
      const updated = await updateProfile({ nickname });
      setUser(updated);
      setIsEditingNickname(false);
      alert("닉네임이 변경되었습니다! ✅");
    } catch {
      alert("닉네임 변경에 실패했습니다.");
    } finally {
      setLoading(false);
    }
  }, [loading, nickname, setUser]);

  const onChangePassword = useCallback(async () => {
    if (
      passwordLoading ||
      !currentPassword ||
      !newPassword ||
      !newPasswordCheck
    )
      return;

    if (!newPasswordValid) {
      alert("비밀번호는 8자 이상이어야 합니다.");
      return;
    }

    if (!newPasswordMatch) {
      alert("새 비밀번호가 일치하지 않습니다.");
      return;
    }

    setPasswordLoading(true);
    try {
      await changePassword({
        currentPassword,
        newPassword,
      });
      setCurrentPassword("");
      setNewPassword("");
      setNewPasswordCheck("");
      setIsEditingPassword(false);
      alert("비밀번호가 변경되었습니다! ✅");
    } catch {
      alert("비밀번호 변경에 실패했습니다. 현재 비밀번호를 확인해주세요.");
    } finally {
      setPasswordLoading(false);
    }
  }, [
    passwordLoading,
    currentPassword,
    newPassword,
    newPasswordCheck,
    newPasswordValid,
    newPasswordMatch,
  ]);

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
    <section className="w-full max-w-3xl px-8 py-16">
      <h2 className="text-2xl font-semibold mb-16">Profile</h2>

      <div className="grid grid-cols-[200px_1fr] gap-16 items-start justify-center">
        {/* 왼쪽 - 아바타 */}
        <div className="flex flex-col items-center space-y-4">
          <div className="w-[200px] h-[200px] rounded-full overflow-hidden ring-1 ring-gray-200">
            <Image
              src={user?.avatar_url || "/default-avatar.png"}
              alt="avatar"
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
          <label className="text-sm text-blue-600 cursor-pointer hover:text-blue-700">
            프로필 사진 변경
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={onFileChange}
            />
          </label>
        </div>

        {/* 오른쪽 - 설정 폼 */}
        <div className="space-y-12">
          {/* 이메일 */}
          {user?.email && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                이메일
              </label>
              <div className="text-sm text-gray-500">{user.email}</div>
            </div>
          )}

          {/* 닉네임 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              닉네임
            </label>
            {isEditingNickname ? (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <input
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    className="flex-1 border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
                    placeholder="닉네임을 입력하세요"
                  />
                  <button
                    onClick={onSaveNickname}
                    disabled={loading || !nickname.trim()}
                    className={`text-xs text-blue-600 hover:text-blue-700 px-2 py-1 ${
                      loading || !nickname.trim()
                        ? "opacity-40 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    {loading ? "저장 중..." : "저장"}
                  </button>
                  <button
                    onClick={() => {
                      setIsEditingNickname(false);
                      setNickname(user?.nickname ?? "");
                    }}
                    className="text-xs text-gray-500 hover:text-gray-700 px-2 py-1"
                  >
                    취소
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <div className="flex-1 text-sm text-gray-900 py-2.5">
                  {user?.nickname || "-"}
                </div>
                <button
                  onClick={() => setIsEditingNickname(true)}
                  className="text-xs text-blue-600 hover:text-blue-700 px-2 py-1"
                >
                  수정
                </button>
              </div>
            )}
          </div>

          {/* 비밀번호 */}
          <div className="pt-8 border-t border-gray-200">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              비밀번호
            </label>
            {isEditingPassword ? (
              <div className="space-y-4">
                <p className="text-xs text-gray-500 mb-2">
                  보안을 위해 현재 비밀번호를 입력해야 합니다.
                </p>

                <div className="flex items-center gap-3">
                  <input
                    type="password"
                    placeholder="현재 비밀번호"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="flex-1 border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
                  />
                  <div className="w-16"></div>
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <input
                      type="password"
                      placeholder="새 비밀번호 (8자 이상)"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="flex-1 border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
                    />
                    <div className="w-16"></div>
                  </div>
                  <div className="h-5 flex items-center mt-1">
                    {newPasswordTouched && !newPasswordValid && (
                      <p className="text-xs text-rose-500">
                        비밀번호는 8자 이상이어야 합니다
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <input
                      type="password"
                      placeholder="새 비밀번호 확인"
                      value={newPasswordCheck}
                      onChange={(e) => setNewPasswordCheck(e.target.value)}
                      className="flex-1 border border-gray-300 rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
                    />
                    <div className="w-16"></div>
                  </div>
                  <div className="h-5 flex items-center mt-1">
                    {newPasswordCheckTouched && !newPasswordMatch && (
                      <p className="text-xs text-rose-500">
                        비밀번호가 일치하지 않습니다
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex-1"></div>
                  <button
                    onClick={onChangePassword}
                    disabled={
                      passwordLoading ||
                      !currentPassword ||
                      !newPassword ||
                      !newPasswordCheck ||
                      !newPasswordValid ||
                      !newPasswordMatch
                    }
                    className={`text-xs text-blue-600 hover:text-blue-700 px-2 py-1 ${
                      passwordLoading ||
                      !currentPassword ||
                      !newPassword ||
                      !newPasswordCheck ||
                      !newPasswordValid ||
                      !newPasswordMatch
                        ? "opacity-40 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    {passwordLoading ? "저장 중..." : "저장"}
                  </button>
                  <button
                    onClick={() => {
                      setIsEditingPassword(false);
                      setCurrentPassword("");
                      setNewPassword("");
                      setNewPasswordCheck("");
                    }}
                    className="text-xs text-gray-500 hover:text-gray-700 px-2 py-1"
                  >
                    취소
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <div className="flex-1 text-sm text-gray-400 py-2.5">
                  ••••••••
                </div>
                <button
                  onClick={() => setIsEditingPassword(true)}
                  className="text-xs text-blue-600 hover:text-blue-700 px-2 py-1"
                >
                  수정
                </button>
              </div>
            )}
          </div>

          {/* 로그아웃 */}
          <div className="pt-12">
            <div className="flex justify-end">
              <button
                onClick={onLogout}
                className="text-xs text-gray-400 hover:text-gray-600"
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
