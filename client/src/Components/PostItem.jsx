import { Link } from 'react-router-dom';

export default function PostItem({ post, onDelete }) {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      onDelete(post._id);
    }
  };

  return (
    <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h2 className="text-xl font-bold">
          <Link to={`/posts/${post._id}`} className="hover:text-blue-500">
            {post.title}
          </Link>
        </h2>
        {post.category && (
          <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
            {post.category.name}
          </span>
        )}
      </div>
      
      <p className="text-gray-600 mb-4 line-clamp-3">
        {post.content}
      </p>
      
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-500">
          {new Date(post.createdAt).toLocaleDateString()}
        </div>
        
        <div className="flex gap-2">
          <Link
            to={`/posts/${post._id}/edit`}
            className="text-blue-500 hover:text-blue-700 text-sm"
          >
            Edit
          </Link>
          <button
            onClick={handleDelete}
            className="text-red-500 hover:text-red-700 text-sm"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}