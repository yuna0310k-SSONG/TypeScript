export const isValidEmail = (email: string): boolean => {
  // 간단한 이메일 형식 검증 정규식
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
