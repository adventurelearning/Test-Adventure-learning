const Footer = () => {
  return (
    <a
      href="https://www.adventurelearning.co.in/"
      target="_blank"
      className="bg-gray-800 text-white py-8"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Adventure Learning</h3>
            <p>
              Transforming education through real-world adventure since 2015.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.adventurelearning.co.in/"
                  target="_blank"
                  className="hover:text-blue-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="https://www.adventurelearning.co.in/"
                  target="_blank"
                  className="hover:text-blue-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="https://www.adventurelearning.co.in/"
                  target="_blank"
                  className="hover:text-blue-300"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="https://www.adventurelearning.co.in/"
                  target="_blank"
                  className="hover:text-blue-300"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>info@adventurelearning.com</li>
              <li>+91 98844 45571 || +91 81110 05300</li>
              <li>Gandhipuram, Coimbatore || Tambaram, Chennai</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.adventurelearning.co.in/"
                target="_blank"
                className="hover:text-blue-300"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
                  alt="Facebook"
                  className="w-8 h-8"
                />
              </a>
              <a
                href="https://www.adventurelearning.co.in/"
                target="_blank"
                className="hover:text-blue-300"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                  alt="Instagram"
                  className="w-8 h-8"
                />
              </a>
              <a
                href="https://www.adventurelearning.co.in/"
                target="_blank"
                className="hover:text-blue-300"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                  alt="Twitter"
                  className="w-8 h-8"
                />
              </a>
              <a
                href="https://www.adventurelearning.co.in/"
                target="_blank"
                className="hover:text-blue-300"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174883.png"
                  alt="YouTube"
                  className="w-8 h-8"
                />
              </a>
              <a
                href="https://www.adventurelearning.co.in/"
                target="_blank"
                className="hover:text-blue-300"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
                  alt="LinkedIn"
                  className="w-8 h-8"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Adventure Learning. All rights
            reserved.
          </p>
        </div>
      </div>
    </a>
  );
};

export default Footer;
