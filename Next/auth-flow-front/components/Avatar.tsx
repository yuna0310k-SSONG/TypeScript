"use client";

import Image from "next/image";

interface AvatarProps {
  src?: string | null;
  size?: number;
  border?: boolean;
}

export default function Avatar({
  src,
  size = 40,
  border = false,
}: AvatarProps) {
  return (
    <div
      style={{ width: size, height: size }}
      className={`
        relative        /* 🔥 반드시 여기 */
        rounded-full
        overflow-hidden
        shrink-0
        ${border ? "border" : ""}
      `}
    >
      <Image
        src={src || "/default-avatar.png"}
        alt="avatar"
        width={size}
        height={size}
        className="rounded-full object-cover"
      />
    </div>
  );
}
