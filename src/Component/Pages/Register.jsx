import React, { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);
  const [error, setError] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    // get form data
    const form = new FormData(e.target);
    const name = form.get("name");
    if (name.length < 5) {
      setError({ ...error, name: "Name must be at least 5 characters" });
      return;
    }
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");
    // console.log({ name, email, photo, password });

    // Password validation
    const passwordErrors = [];
    if (!/[A-Z]/.test(password)) {
      passwordErrors.push("Must contain an uppercase letter.");
    }
    if (!/[a-z]/.test(password)) {
      passwordErrors.push("Must contain a lowercase letter.");
    }
    if (password.length < 6) {
      passwordErrors.push("Must be at least 6 characters long.");
    }
    if (passwordErrors.length > 0) {
      setError({ ...error, password: passwordErrors.join(" ") });
      return;
    }

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate(location.state || "/");
          })
          .catch((err) => {
            // console.log(err);
          });
      })
      .catch((error) => {
        const errorCode = error.code;

        if (errorCode === "auth/email-already-in-use") {
          setError({ ...error, email: "Email is already in use" });
        } else {
          setError({ ...error, general: error.message });
        }
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 via-white to-purple-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
          Register at CareerGuide
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="Your full name"
              className="input input-bordered w-full"
              required
            />
          </div>
          {error.name && (
            <label className="text-xs text-red-500 mb-1 label">
              {error.name}
            </label>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="Your email"
              className="input input-bordered w-full"
              required
            />
          </div>
          {error.email && (
            <label className="text-xs text-red-500 mb-1 label">
              {error.email}
            </label>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Photo URL
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Link to your photo"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                className="input input-bordered w-full pr-10"
                required
              />
              <span
                className="absolute right-3 top-3 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          {error.password && (
            <label className="text-xs text-red-500 mb-1 label">
              {error.password}
            </label>
          )}

          <button type="submit" className="btn btn-outline  w-full">
            Register
          </button>
        </form>

        <div className="divider">OR</div>

        <button className="btn btn-outline btn btn-outline-outline btn btn-outline-secondary w-full">
          Continue with Google
        </button>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-600 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
