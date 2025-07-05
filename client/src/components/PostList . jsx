import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PostList() {
  const [posts] = useState([]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <div className="grid gap-4">
        {posts.length === 0 ? (
          <p>No posts available.</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="p-4 border rounded">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p>{post.content}</p>
              <Link to={`/posts/${post.id}`} className="text-blue-500 underline">Read more</Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}