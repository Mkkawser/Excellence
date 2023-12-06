import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { Sidebar } from "primereact/sidebar";

///PrimeReact npm CSS
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { Link } from "react-router-dom";

const MenuClick = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <IoMdMenu onClick={() => setVisible(true)} />
      <Sidebar visible={visible} onHide={() => setVisible(false)}>
        <img
          className="w-[40vw] mx-auto"
          src="/images/logo-sidebar.webp"
          alt="sidebar logo"
        />

        {/* Memu List */}
        <div className="flex flex-col items-center pt-4 mr-4 gap-2 uppercase text-[2.4vw]">
          <Link to={"/phone"}>Phone</Link>
          <Link to={"/laptop"}>Laptop</Link>
          <Link to={"/gamming"}>Gamming</Link>
          <Link to={"/accessories"}>Accessories</Link>
          <Link to={"/blog"}>Blog</Link>
        </div>
      </Sidebar>
    </>
  );
};

export default MenuClick;
