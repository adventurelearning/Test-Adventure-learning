import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <a target='_blank' href="https://www.adventurelearning.co.in/" className="text-2xl font-bold">Adventure Learning</a>
        <div className="space-x-6">
          <a target='_blank' href="https://www.adventurelearning.co.in/" className="hover:text-blue-200">Home</a>
          <a target='_blank' href="https://www.adventurelearning.co.in/" className="hover:text-blue-200">About</a>
          <a target='_blank' href="https://www.adventurelearning.co.in/" className="hover:text-blue-200">Courses</a>
          <a href="#blog" className="hover:text-blue-200">Blog</a>
          <button className="bg-white text-blue-800 px-4 py-2 rounded-md hover:bg-blue-100 transition">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;