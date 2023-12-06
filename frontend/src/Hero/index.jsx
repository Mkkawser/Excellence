import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import database from "./heroDB";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import "./style.css";

const Hero = () => {
  console.log(database);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: false,
    autoplaySpeed: 5000,
    swipeToSlide: true,
    nextArrow: <NextIcon />,
    prevArrow: <PrevIcon />,
    responsive: [
      {
        breakpoint: 4000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // {
      //     breakpoint: 600,
      //     settings: {
      //         slidesToShow: 2,
      //         slidesToScroll: 1,
      //     },
      // },
      // {
      //     breakpoint: 480,
      //     settings: {
      //         slidesToShow: 1,
      //         slidesToScroll: 1,
      //     },
      // },
    ],
  };
  const [data, setData] = useState(database);
  const [sliderRef, setSliderRef] = useState(null);
  return (
    <>
      <Slider {...settings} className="flex">
        {data.map((val, i) => {
          return (
            <div className="" key={i}>
              <img className="max-w-full h-auto" src={val.img} />
              <div className=" top-0 text-[blue]">
                <p className="text-[5vw]">{val.title1}</p>
                <p className="">{val.title2}</p>
                <p className="">{val.discount}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

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

const NextIcon = ({ onClick }) => {
  return (
    <div className="slick-icons slick-icons--right">
      <RiArrowRightSLine className="slick-icons--right" onClick={onClick} />
    </div>
  );
};
export default Hero;
