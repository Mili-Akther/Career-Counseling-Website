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
                isActive ? "text-blue-500 font-semibold" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-semibold" : ""
              }
            >
              My Profile
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
