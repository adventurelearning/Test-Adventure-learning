const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Adventure Learning</h3>
            <p>Transforming education through real-world adventure since 2015.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-300">Home</a></li>
              <li><a href="#" className="hover:text-blue-300">About</a></li>
              <li><a href="#" className="hover:text-blue-300">Courses</a></li>
              <li><a href="#" className="hover:text-blue-300">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>info@adventurelearning.com</li>
              <li>+1 (800) 123-4567</li>
              <li>123 Adventure Way, Boulder CO</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300">FB</a>
              <a href="#" className="hover:text-blue-300">IG</a>
              <a href="#" className="hover:text-blue-300">YT</a>
              <a href="#" className="hover:text-blue-300">TW</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© 2023 Adventure Learning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;