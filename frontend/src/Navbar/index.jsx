import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import MenuClick from "./menu";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className="bg-[#ececec] flex items-center justify-between p-2">
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
          <div className="hidden md:flex items-center mr-4 gap-4 uppercase">
            <Link to={"/phone"}>Phone</Link>
            <Link to={"/laptop"}>Laptop</Link>
            <Link to={"/gamming"}>Gamming</Link>
            <Link to={"/accessories"}>Accessories</Link>
            <Link to={"/blog"}>Blog</Link>
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
