import React from "react";
import Navbar from "../Navbar";
import Hero from "../Hero";
import Brand from "../Brand";
import Widget from "../Widget";
import About from "../About";
import Newsletter from "../Newsletter";
import { Footer } from "../Footer";
import Product from "../Product";

export const Home = () => {
  return (
    <>
        <Product />
      {/* <div className="p-4">
        <Hero />
        <Brand />
        <Widget />
        <Newsletter />
        <About />
        <Footer />
      </div> */}
    </>
  );
};
