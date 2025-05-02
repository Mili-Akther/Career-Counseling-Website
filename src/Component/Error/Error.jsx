import React from "react";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cyan-700 text-white px-4">
       <Helmet>
              <title>ERROR | CareerGuide</title>
            </Helmet>
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">CareerGuide</h1>
        <p className="text-3xl md:text-4xl font-semibold mb-8">404</p>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search then state your source path"
            className="input input-bordered w-full max-w-md text-black"
          />
          <button className="btn bg-cyan-400 hover:bg-cyan-300 text-black ml-2">
            🔍
          </button>
        </div>
        <div className="mt-6">
          <NavLink to="/" className="btn btn-accent">
            BACK TO HOME
          </NavLink>
        </div>
        <p className="mt-4 text-green-200 underline cursor-pointer hover:text-green-400">
          Helpful Search
        </p>
      </div>
    </div>
  );
};

export default Error;
