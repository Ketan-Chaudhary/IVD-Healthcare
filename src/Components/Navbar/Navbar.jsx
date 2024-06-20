import React from "react";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Product</a>
      </li>
      <li>
        <a>About Us</a>
      </li>
      <li>
        <a>Events</a>
      </li>
    </>
  );

  return (
    <div
      className="navbar bg-base-100 shadow-lg p-2 lg:p-4"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">IVD Healthcare</a>
      </div>
      <div className="navbar-end">
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <a className="btn rounded-md hover:bg-slate-600  hover:text-white duration-200">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Navbar;
