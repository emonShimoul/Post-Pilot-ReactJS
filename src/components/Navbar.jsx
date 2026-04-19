import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-blue-500">
          PostPilot
        </Link>

        {/* Links */}
        <div className="space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-semibold" : "text-gray-600"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/posts"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-semibold" : "text-gray-600"
            }
          >
            Posts
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-semibold" : "text-gray-600"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-semibold" : "text-gray-600"
            }
          >
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;