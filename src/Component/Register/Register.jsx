import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const {createNewUser, setUser } = useContext(AuthContext)
  const handleSubmit = (e) => {
    e.preventDefault();
    // get form data
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");
    console.log({name, email, photo, password});
    

    createNewUser(email, password)
    .then((result) => {       
    const user = result.user;
    setUser(user);
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    // ..
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
              name ="name"
              type="text"
              placeholder="Your full name"
              className="input input-bordered w-full"
              required
            />
          </div>
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
            <input
              name="password"
              type="password"
              placeholder="Create a password"
              className="input input-bordered w-full"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Register
          </button>
        </form>

        <div className="divider">OR</div>

        <button className="btn btn-outline btn-secondary w-full">
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
