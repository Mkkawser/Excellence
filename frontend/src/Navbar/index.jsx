import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { IoPersonCircleSharp } from "react-icons/io5";
import { Badge } from "primereact/badge";
import { Button } from "primereact/button";
import MenuClick from "./menu";
import "./navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isLogin, setisLogin] = useState(localStorage.getItem("isLogin"));

  const logoutHandle = () => {
    localStorage.removeItem("token");
    localStorage.setItem("isLogin", false);
    window.location.reload();
  };

  let count = useSelector((state) => state.CartSlice.items.length);
  // console.log(count);

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
            {/* <Link to={"/blog"}>Blog</Link> */}
            <div className="dropdown">
              <IoPersonCircleSharp className="text-[30px]" />
              {isLogin == "true" ? (
                <div className="dropdown-content">
                  <button onClick={logoutHandle}>logout</button>
                </div>
              ) : (
                <div className="dropdown-content">
                  <Link to={"/login"}>Login</Link>
                  <Link to={"/signup"}>Signup</Link>
                </div>
              )}
            </div>
          </div>

          <Link to={"/cart"} className="flex">
            <BsCart className="text-[6vw]">
              <Badge value={2}>h</Badge>
            </BsCart>
            <Badge
              value={count == "0" ? "" : `${count}`}
              className="absolute right-1"
            ></Badge>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
