import { Link, NavLink, useNavigate } from "react-router-dom";
import { logoutUser } from "../utils/auth";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const {user, setUser} = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logoutUser();
    setUser(null);
    navigate("/login");
  }
  
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
                <span>Hello, {user.name}</span>
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