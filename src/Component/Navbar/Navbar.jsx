import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext); // console.log(import.meta.env.VITE_a);
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
              All Services
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
        <NavLink to="/my-bookings" className="hover:underline">
          My Bookings
        </NavLink>
      </div>

      <div className="flex items-center gap-4">
        {user?.email ? (
          <>
            {user?.photoURL ? (
              <img
                className="w-10 h-10 rounded-full"
                src={user.photoURL}
                alt="User"
              />
            ) : (
              <FaUserCircle className="text-3xl" />
            )}
            <p>{user.displayName}</p>
            <button
              onClick={logOut}
              className="btn bg-cyan-400 hover:bg-cyan-300 text-black"
            >
              Log-Out
            </button>
          </>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : ""
            }
          >
            <button className="btn btn-outline">Login</button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
