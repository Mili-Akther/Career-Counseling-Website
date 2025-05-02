import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaUserCircle, FaBars } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="navbar bg-base-100 shadow-md px-6 flex flex-wrap items-center justify-between">
      {/* Left Brand */}
      <div className="flex-1">
        <NavLink to="/" className="text-2xl font-bold">
          CareerGuide
        </NavLink>
      </div>

      {/* Mobile Toggle */}
      <div className="lg:hidden">
        <button onClick={toggleDropdown} className="text-2xl">
          <FaBars />
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-4">
        <ul className="menu menu-horizontal px-1 gap-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-cyan-400 font-bold" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? "text-cyan-400 font-bold" : ""
              }
            >
              My Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "text-cyan-400 font-bold" : ""
              }
            >
              All Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-cyan-400 font-bold" : ""
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-cyan-400 font-bold" : ""
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-bookings" className="hover:underline">
              My Bookings
            </NavLink>
          </li>
        </ul>
      </div>

      {/* User Section (Desktop) */}
      <div className="hidden lg:flex items-center gap-4">
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
          <NavLink to="/login">
            <button className="btn bg-cyan-400 hover:bg-cyan-300 text-black">
              Login
            </button>
          </NavLink>
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="w-full lg:hidden mt-4 space-y-2">
          <ul className="menu menu-vertical px-1 gap-2">
            <li>
              <NavLink to="/" onClick={toggleDropdown}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" onClick={toggleDropdown}>
                My Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" onClick={toggleDropdown}>
                All Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={toggleDropdown}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={toggleDropdown}>
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/my-bookings" onClick={toggleDropdown}>
                My Bookings
              </NavLink>
            </li>
            <li className="pt-2">
              {user?.email ? (
                <div className="flex flex-col items-start gap-2">
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
                    onClick={() => {
                      logOut();
                      toggleDropdown();
                    }}
                    className="btn bg-cyan-400 hover:bg-cyan-300 text-black "
                  >
                    Log-Out
                  </button>
                </div>
              ) : (
                <NavLink to="/login" onClick={toggleDropdown}>
                  <button className="btn bg-cyan-400 hover:bg-cyan-300 text-black ">
                    Login
                  </button>
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
