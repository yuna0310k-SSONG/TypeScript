import FeedItem from "./FeedItem";

const feeds = [
  {
    id: 1,
    user: "yuna",
    avatar: "/default-avatar.png",
    image: "/sample1.jpg",
    content: "오늘은 커피 ☕️",
  },
  {
    id: 2,
    user: "rabbit",
    avatar: "/default-avatar.png",
    image: "/sample2.jpg",
    content: "당근 먹는 중 🥕",
  },
];

export default function Feed() {
  return (
    <div className="space-y-6">
      {feeds.map((f) => (
        <FeedItem key={f.id} {...f} />
      ))}
    </div>
  );
}
