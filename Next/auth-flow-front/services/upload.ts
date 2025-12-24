import { api } from "@/lib/api";

export const uploadAvatar = async (file: File) => {
  const form = new FormData();
  form.append("file", file);

  const res = await api.post("/auth/upload-avatar", form);
  return res.data.avatar_url as string;
};
