import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-blue-800 text-white">
      {/* Marquee banner */}
      <div className="bg-blue-900 py-1 px-2 text-sm">
        <marquee behavior="scroll" direction="left" scrollamount="5">
          🎉 Our New Website: <a 
            href="https://www.adventurelearning.co.in/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-200 hover:text-white underline"
          >
            adventurelearning.co.in
          </a> - Explore our exciting courses today! 🎉
        </marquee>
      </div>
      
      {/* Main navigation */}
      <nav className="p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <a 
            href="https://www.adventurelearning.co.in/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-2xl font-bold"
          >
            Adventure Learning
          </a>
          <div className="space-x-6">
            <a 
              href="https://www.adventurelearning.co.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-200"
            >
              Home
            </a>
            <a 
              href="https://www.adventurelearning.co.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-200"
            >
              About
            </a>
            <a 
              href="https://www.adventurelearning.co.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-200"
            >
              Courses
            </a>
            <a 
              href="https://www.adventurelearning.co.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-200"
            >
              Blog
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;