export default function PostItem({ post }) {
  return (
    <div className="border rounded p-4">
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p className="text-gray-600">{post.content}</p>
    </div>
  );
}