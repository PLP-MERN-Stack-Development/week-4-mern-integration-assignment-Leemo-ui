export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">MERNBlog</h3>
            <p className="text-sm">
              The modern blogging platform for developers and creators.
            </p>
          </div>
          
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Explore</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors text-sm">Popular Posts</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">Recent Posts</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">Categories</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              {/* Other social icons with same w-5 h-5 */}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-center">
          <p>© {new Date().getFullYear()} MERNBlog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}