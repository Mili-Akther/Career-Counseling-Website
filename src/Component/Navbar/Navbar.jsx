import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md px-6">
      <div className="flex-1">
        <NavLink to="/" className="text-xl font-bold">
          CareerGuide
        </NavLink>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 gap-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold" : ""
              }
            >
              My Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold" : ""
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold" : ""
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold" : ""
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold" : ""
          }
        >
          <button className="btn btn-primary">Login</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
