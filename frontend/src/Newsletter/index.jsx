import React from "react";

const Newsletter = () => {
  return (
    <>
      <div className="bg-[url('/images/pattern-2.png')] bg-[#062044] h-[180px] flex items-center">
        <div className="text-white">
          <p>Sign Up For Newsletters</p>
          <p>
            Get E-mail updates about our latest shop and 
            <span className="text-[#ffbd27]"> special offers</span>
          </p>
        </div>
        <div className="p-4">
            <input type="text" placeholder="Your Email"/>
            <button>Sign Up</button>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
