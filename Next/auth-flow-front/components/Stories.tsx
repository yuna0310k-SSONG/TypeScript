import Avatar from "./Avatar";

const stories = [
  { id: 1, name: "yuna" },
  { id: 2, name: "rabbit" },
  { id: 3, name: "cat" },
];

export default function Stories() {
  return (
    <div className="flex gap-4 px-2 overflow-x-auto">
      {stories.map((s) => (
        <div key={s.id} className="flex flex-col items-center">
          <Avatar src="/default-avatar.png" size={56} border />
          <span className="text-xs mt-1">{s.name}</span>
        </div>
      ))}
    </div>
  );
}
