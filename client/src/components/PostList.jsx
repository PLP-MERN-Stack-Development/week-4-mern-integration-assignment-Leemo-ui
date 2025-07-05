import { Link } from 'react-router-dom';
import { useState } from 'react';

// Sample PostItem component for post card design
function PostItem({ post }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex items-center mb-2">
          <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
            {post.category}
          </span>
          <span className="text-gray-500 text-sm ml-auto">
            {new Date(post.createdAt).toLocaleDateString()}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
        <p className="text-gray-600 line-clamp-2 mb-4">{post.content}</p>
        <button className="text-indigo-600 hover:text-indigo-800 font-medium">
          Read More →
        </button>
      </div>
    </div>
  );
}

export default function PostList() {
  const [loading] = useState(false); // Set to false to show sample posts
  // Sample posts array for demonstration
  const posts = [
    {
      id: 1,
      title: "First Blog Post",
      content: "This is a sample content for the first post. It is short and sweet.",
      category: "General",
      createdAt: new Date().toISOString(),
    },
    {
      id: 2,
      title: "Second Blog Post",
      content: "Another example post with a bit more content to show the card layout.",
      category: "Updates",
      createdAt: new Date().toISOString(),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
            Blog Posts
          </h1>
          {/* Loading animation */}
          {loading && (
            <div className="flex justify-center py-12">
              <svg className="animate-spin h-8 w-8 text-indigo-600" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
          )}
          {/* Post cards grid */}
          {!loading && posts.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2 mt-8">
              {posts.map(post => (
                <PostItem key={post.id} post={post} />
              ))}
            </div>
          )}
          {/* ...existing code for empty state... */}
          {!loading && posts.length === 0 && (
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden p-8">
              <div className="text-center py-12">
                <svg className="mx-auto h-24 w-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="mt-4 text-xl font-medium text-gray-900">
                  No posts available yet
                </h3>
                <p className="mt-2 text-gray-600">
                  Be the first to share your thoughts with the community!
                </p>
                <div className="mt-6">
                  <Link
                    to="/posts/new"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
                  >
                    <svg className="-ml-1 mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Create Your First Post
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}