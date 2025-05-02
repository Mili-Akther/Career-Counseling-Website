import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase.config";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const defaultEmail = location.state?.email || "";

  const handleReset = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent! Redirecting to Gmail...");
        window.location.href = "https://mail.google.com";
      })
      .catch((error) => {
        console.error(error);
       toast.error("Something went wrong: " + error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="w-full max-w-sm bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-bold text-center mb-4">Reset Password</h2>
        <form onSubmit={handleReset} className="space-y-4">
          <input
            type="email"
            name="email"
            defaultValue={defaultEmail}
            className="input input-bordered w-full"
            required
            placeholder="Enter your email"
          />
        
          <button
            type="submit"
            className="btn bg-cyan-400 hover:bg-cyan-300 text-black w-full"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
