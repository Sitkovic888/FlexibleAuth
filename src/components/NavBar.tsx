import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const linkClassName = "text-white font-bold hover:text-gray-200";
  return (
    <nav className="flex items-center justify-between bg-red-800 w-full h-[13vh] px-[4vw]">
      <Link to="/" className={linkClassName}>
        Logo
      </Link>
      <Link to="/login" className={linkClassName}>
        Log in
      </Link>
    </nav>
  );
};

export default NavBar;
