import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-white">PostPilot</h2>
          <p className="mt-2 text-sm">
            A simple blog management app to create, manage and organize your posts efficiently.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition hover:translate-x-1 inline-block">
                Home
              </Link>
            </li>
            <li>
              <Link to="/posts" className="hover:text-white transition hover:translate-x-1 inline-block">
                Posts
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition hover:translate-x-1 inline-block">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-2">Connect</h3>
          <p className="text-sm">Let’s connect</p>

          <div className="flex gap-4 mt-3">
            <a href="#" className="hover:text-white transition">
              <FaGithub size={20} />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaFacebook size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center text-sm py-4">
        © {new Date().getFullYear()} PostPilot. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;