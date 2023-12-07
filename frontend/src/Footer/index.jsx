import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-2">
        <div className="flex flex-col">
          <h1 className="font-semibold">Get to Know Us</h1>
          <div className="text-[15px] flex flex-col gap-1">
            <Link to={"#"}>About Excellence Computer & Engineering</Link>
            <Link to={"#"}>Careers</Link>
            <Link to={"#"}>Customer reviews</Link>
            <Link to={"#"}>Inverstor Relations</Link>
            <Link to={"#"}>Privacy Policy</Link>
            <Link to={"#"}>Contact Us</Link>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="font-semibold">Let Us Help You</h1>
          <div className="text-[15px] flex flex-col gap-1">
            <Link to={"#"}>Your Account</Link>
            <Link to={"#"}>Your Orders</Link>
            <Link to={"#"}>Returns & Replacements</Link>
            <Link to={"#"}>Shipping Rates & Policies</Link>
            <Link to={"#"}>Refund and Returns Policy</Link>
            <Link to={"#"}>Privacy Policy</Link>
            <Link to={"#"}>Terms and Conditions</Link>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="font-semibold">SUPPORT</h1>
          <div className="text-[15px] flex flex-col gap-1">
            <Link to={"#"}>CONTACT US : 10.00AM `–` 8.00PM</Link>
            <Link to={"#"}>WARRANTY INFORMATION</Link>
            <Link to={"#"}>NETWORKING & SECURITY</Link>
            <Link to={"#"}>PC COMPONENTS</Link>
            <Link to={"#"}>ONLINE ORDER -2</Link>
          </div>
        </div>
      </div>
      <small className="block text-center">
        Copyright 2023 © Excellence Computer & Engineering. All right reserved.
        Powered by
        <span className="font-bold">
          <Link
            to="http://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            MK Soft Ldt.
          </Link>
        </span>
      </small>
    </>
  );
};
