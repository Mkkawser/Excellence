import React from "react";

const Newsletter = () => {
  return (
    <>
      <div className="bg-[url('/images/pattern-2.png')] bg-[#062044] grid grid-rows-1 md:grid-cols-2 items-center h-[180px]">
        {/* Text area */}
        <div className="text-white p-4">
          <p>Sign Up For Newsletters</p>
          <p className="text-[15px]">
            Get E-mail updates about our latest shop and
            <span className="text-[#ffbd27]"> special offers</span>
          </p>
        </div>

        {/* form area */}
        <div className="m-2 h-[40px]">
          <input
            className="h-full rounded-s-md p-1 active:border-none focus:outline-0 w-fit"
            type="text"
            placeholder="Your Email"
          />
          <button className="bg-[#ffbd27] h-full rounded-e-md leading-[0px] w-[20%]">
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
