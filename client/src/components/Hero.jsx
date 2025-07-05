import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-indigo-900 to-purple-800 text-white py-20 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-purple-400"></div>
        <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-indigo-400"></div>
      </div>
      
      <div className="relative max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="block">Share Your</span>
          <span className="block text-yellow-300">Digital Story</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
          Create beautiful blog posts with our intuitive editor and join a community of passionate writers.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/posts/new" 
            className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Start Writing Now
          </Link>
          <Link 
            to="/" 
            className="border-2 border-white hover:bg-white hover:text-indigo-900 font-semibold px-8 py-3 rounded-lg transition-all"
          >
            Explore Posts
          </Link>
        </div>
      </div>
    </section>
  );
}