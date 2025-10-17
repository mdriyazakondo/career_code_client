import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const Navbar = () => {
  const { userSignOut, users } = use(AuthContext);

  const handleSingOut = () => {
    userSignOut()
      .then(() => {})
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: err.message,
        });
      });
  };
  const links = (
    <>
      <li>
        {" "}
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to={"/allJobs"}>All Jobs</NavLink>
      </li>
      {users && (
        <>
          <li>
            <NavLink to={"/myApplications"}>My Application</NavLink>
          </li>
        </>
      )}
      {users && (
        <>
          <li>
            <NavLink to={"/addJob"}>Add Job</NavLink>
          </li>
          <li>
            <NavLink to={"/myPostedJob"}>My Posted Job</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="bg-base-100 shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="navbar max-w-[1500px] mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-4">
          {users ? (
            <div className="flex items-center gap-5">
              <button
                className="py-2 px-6 bg-blue-500 rounded-md cursor-pointer text-white font-semibold"
                type="button"
                onClick={handleSingOut}
              >
                Sign Out
              </button>
              {/* <img
                className="w-8 h-8 rounded-full"
                src={users?.photoURL}
                alt=""
              /> */}
              {users.photoURL && (
                <div className="relative inline-block">
                  {/* Profile Image */}
                  <img
                    className="w-10 h-10 rounded-full relative z-10 object-cover"
                    src={users?.photoURL}
                    alt="User"
                  />

                  {/* Small subtle glow ring 1 */}
                  <motion.span
                    className="absolute inset-0 rounded-full border border-blue-500"
                    animate={{
                      scale: [1, 1.3, 1.5],
                      opacity: [0.8, 0.4, 0],
                    }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      repeatDelay: 0.4,
                      ease: "easeOut",
                    }}
                  />

                  {/* Small subtle glow ring 2 */}
                  <motion.span
                    className="absolute inset-0 rounded-full border border-blue-400"
                    animate={{
                      scale: [1, 1.4, 1.6],
                      opacity: [0.6, 0.3, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 0.6,
                      ease: "easeOut",
                    }}
                  />
                </div>
              )}
            </div>
          ) : (
            <>
              <NavLink to={"/register"}>
                <button className="py-2 px-6 bg-blue-500 rounded-md cursor-pointer text-white font-semibold">
                  Register
                </button>
              </NavLink>
              <NavLink to={"/login"}>
                <button className="py-2 px-6 bg-blue-500 rounded-md cursor-pointer text-white font-semibold">
                  SignIn
                </button>
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
