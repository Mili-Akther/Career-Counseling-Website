import React, { useContext, useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { GoogleAuthProvider, sendPasswordResetEmail, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/firebase.config"; 
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";


const Login = () => {
  
  const emailRef = useRef();  
  const { userLogin, setUser } = useContext(AuthContext);
  const [error, setError] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);
  const handleSubmit = (e) => {
    e.preventDefault();
    // get form data
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({ email, password });
    userLogin(email, password)
      .then((result) => {
          
        const user = result.user;
         toast.success("Logged in successfully!");
        setUser(user);
    

        // console.log(user);
       navigate(location?.state?.from?.pathname || "/");

      })
      .catch((err) => {
        setError({ ...error, login: err.code });
      });
  };
  // const handleForgetPassword = () => {
  //   // console.log("get me a mail link", emailRef.current.value);
  //   const email = emailRef.current.value; 
  //   if (!email) {
  //     // console.log("please enter your email");
     
  //   }
  //   else{
  //     sendPasswordResetEmail(auth, email)
  //     .then(()=>{
  //      toast.info("Password reset email sent ,Please Check your email ");
  //     })
  //   }
  // }

  const googleProvider = new GoogleAuthProvider();
 const handleGoogleLogin = () => {
   signInWithPopup(auth, googleProvider)
     .then((result) => {
       setUser(result.user);
       toast.success("Logged in with Google!");
       navigate(location?.state?.from?.pathname || "/");
     })
     .catch((error) => {
       toast.error("Google Login Failed: " + error.message);
     });
 };



  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 via-white to-purple-100">
      <Helmet>
        <title>Login | CareerGuide</title>
      </Helmet>
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-cyan-400 mb-6">
          Login to CareerGuide
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              ref={emailRef}
              name="email"
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            {error.login && <label className="label">{error.login}</label>}
            <label className="label">
              <NavLink
                to="/forget-password"
                
                state={{ email: emailRef.current?.value }}
                className="label-text-alt link link-hover text-sm text-red-500"
              >
                {" "}
                Forgot Password?
              </NavLink>
            </label>
          </div>
          <button
            type="submit"
            className="btn bg-cyan-400 hover:bg-cyan-300 text-black w-full"
          >
            Login
          </button>
        </form>

        <div className="divider">OR</div>

        <button onClick={handleGoogleLogin} className="btn btn-outline btn-outline-outline btn-outline-secondary w-full">
          Continue with Google
        </button>

        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <Link to="/register" className="text-cyan-400 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
