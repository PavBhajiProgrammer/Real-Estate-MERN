// import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="p-3 max-w-lg mx-auto ">
      <h1 className="text-center capitalize font-semibold text-2xl py-5 decoration-amber-500 decoration-8">
        Sign Up
      </h1>

      <form className="flex flex-col gap-4 ">
        <input
          type="text"
          placeholder="username "
          className="border p-3 rounded-lg shadow-md"
          id="username"
        />
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg shadow-md"
          id="email"
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg shadow-md"
          id="password"
        />

        <button className="bg-slate-800 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Sign Up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an Account? </p>
        <Link to={"/signin"}>
          <span>Sign In</span>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
