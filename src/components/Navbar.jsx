import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const {user, handleLogOut} = useAuth();
  
  return (
    <nav className="bg-white shadow">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-500">
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
            {
              !user ?
              <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500 font-semibold" : "text-gray-600"
                  }
                >
                  Login
              </NavLink>
              :
              <>
                <span>Hello, <span className="font-bold">{user.name}</span></span>
                <button onClick={()=>handleLogOut()}>
                  LogOut
                </button>
              </>
            }
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;