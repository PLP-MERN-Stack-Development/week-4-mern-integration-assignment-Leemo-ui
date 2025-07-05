import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-gray-800">
            MERN Blog
          </Link>
          
          <div className="flex gap-4">
            <Link to="/" className="text-gray-600 hover:text-blue-500">
              Home
            </Link>
            <Link to="/posts/new" className="text-gray-600 hover:text-blue-500">
              New Post
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}