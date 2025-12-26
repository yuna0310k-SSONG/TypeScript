"use client";

import Image from "next/image";
import { useAuthStore } from "@/store/auth";

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
        <div className="mb-6 flex justify-center">
          <Image
            src="/main_img.png"
            alt="Main Image"
            width={600}
            height={600}
            priority
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    );
  }

  // 🔐 로그인 후 (임시)
  return (
    <section className=" py-6 space-y-6">
      {/* <Stories />
      <Feed /> */}
    </section>
  );
}
