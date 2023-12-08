import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { IoPersonCircleSharp } from "react-icons/io5";
import MenuClick from "./menu";
import "./navbar.css";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className="bg-[#ececec] flex items-center justify-between p-2 m-2 sticky top-0 z-10">
        {/* Menu */}
        <div className="md:hidden text-[8vw]">
          <MenuClick />
        </div>

        {/* logo */}
        <Link to={"/"}>
          <img
            className="w-[22vw]"
            src="/images/LOGO.webp"
            alt="logo of page"
          />
        </Link>

        {/* Menu */}
        <div className="flex">
          <div className="hidden md:flex items-center mr-4 gap-4 uppercase xl:tfx">
            <Link to={"/phone"}>Phone</Link>
            <Link to={"/laptop"}>Laptop</Link>
            <Link to={"/gamming"}>Gamming</Link>
            <Link to={"/accessories"}>Accessories</Link>
            <Link to={"/blog"}>Blog</Link>
            <div className="dropdown">
              <IoPersonCircleSharp className="text-[30px]" />
              <div className="dropdown-content">
                <Link to={""}>Login</Link>
                <Link to={"/signup"}>Signup</Link>
              </div>
            </div>
          </div>

          <Link to={"/cart"}>
            <BsCart className="text-[6vw]" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
