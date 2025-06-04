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
          <a target='_blank' href="https://www.adventurelearning.co.in/" className="hover:text-blue-200">Blog</a>
       
        </div>
      </div>
    </nav>
  );
};

export default Navbar;