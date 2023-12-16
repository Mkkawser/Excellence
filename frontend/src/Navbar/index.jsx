import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { IoPersonCircleSharp } from "react-icons/io5";
import { Badge } from "primereact/badge";
import MenuClick from "./menu";
import "./navbar.css";
import { useSelector } from "react-redux";
import axios from "axios";

const Navbar = () => {
  const [isLogin, setisLogin] = useState(localStorage.getItem("isLogin"));
  const [data, setData] = useState();

  const logoutHandle = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    localStorage.setItem("isLogin", false);
    window.location.reload();
  };

  const profileHandle = () => {
    console.log("object");
  };

  let count = useSelector((state) => state.CartSlice.items.length);

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/api/profile/${localStorage.getItem("user_id")}`
      )
      .then((val) => {
        setData(val.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data);
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
            <div className="dropdown z-10">
              {isLogin == "true" ? (
                <img
                  className="w-[45px] h-[45px] bg-cover rounded-full border-[1.5px] border-[#0c0c0c] p-[1px]"
                  src={data?.avatar}
                  alt="avatarr of profile"
                />
              ) : (
                <IoPersonCircleSharp className="text-[30px]" />
              )}

              {isLogin == "true" ? (
                <div className="dropdown-content">
                  <button onClick={logoutHandle}>logout</button>
                  <Link to={"/profile"}>profile</Link>
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
