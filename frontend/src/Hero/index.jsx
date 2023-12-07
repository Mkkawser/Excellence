import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import database from "./heroDB";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import "./style.css";

// Hero component that displays a slider with images and promotional content
const Hero = () => {
  // Slider configuration settings
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: false,
    autoplaySpeed: 5000,
    swipeToSlide: true,
    nextArrow: <NextIcon />, // Custom next arrow icon component
    prevArrow: <PrevIcon />, // Custom prev arrow icon component
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // State to manage slider data
  const [data, setData] = useState(database);

  return (
    <>
      {/* Slider component with custom settings */}
      <Slider {...settings} className="">
        {data.map((val, i) => {
          return (
            <div className="relative p-4" key={i}>
              {/* Image of the slider banner */}
              <img className="w-full h-auto bg-cover" src={val.img} />

              {/* Content overlaid on the image */}
              <div className="absolute top-[70px] left-[80px] text-[#ffffff]">
                {/* Discount Button */}
                <button className="bg-white text-[#151515] rounded-md p-1 text-[1.2vw]">
                  WEEKEND DISCOUNT
                </button>

                {/* Title & Description */}
                <p className="text-[4vw]">{val.title1}</p>
                <p className="text-[5vw]">{val.title2}</p>
                <p className="">
                  Last Call up to
                  <span className="text-[red] text-[3vw]">{val.discount}</span>%
                  OFF!!!
                </p>

                {/* Shop Now Button */}
                <button className="bg-[#0070dc] p-1 rounded-md ">
                  Shop Now
                </button>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

// Custom component for the previous arrow icon
const PrevIcon = ({ onClick }) => {
  return (
    <div className="slick-icons slick-icons--left ">
      <RiArrowLeftSLine
        className="slick-icons--left text-[blue]"
        onClick={onClick}
      />
    </div>
  );
};

// Custom component for the next arrow icon
const NextIcon = ({ onClick }) => {
  return (
    <div className="slick-icons slick-icons--right">
      <RiArrowRightSLine className="slick-icons--right" onClick={onClick} />
    </div>
  );
};

export default Hero;
