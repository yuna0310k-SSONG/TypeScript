import Avatar from "./Avatar";
import { Heart, MessageCircle } from "lucide-react";
import Image from "next/image";

type Props = {
  user: string;
  avatar?: string | null;
  image: string;
  content: string;
};

export default function FeedItem({ user, avatar, image, content }: Props) {
  return (
    <div className="bg-white border rounded-md">
      {/* 상단 유저 */}
      <div className="flex items-center gap-3 px-3 py-2">
        <Avatar src={avatar} size={32} />
        <span className="text-sm font-semibold">{user}</span>
      </div>

      {/* 피드 이미지 (정사각형 고정) */}
      <div className="relative w-full aspect-square bg-gray-100">
        <Image
          src={image}
          alt="feed"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>

      {/* 액션 */}
      <div className="flex gap-4 px-3 py-2">
        <Heart size={20} />
        <MessageCircle size={20} />
      </div>

      {/* 텍스트 */}
      <p className="px-3 pb-3 text-sm">
        <span className="font-semibold mr-1">{user}</span>
        {content}
      </p>
    </div>
  );
}
