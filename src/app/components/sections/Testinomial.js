import React, { useRef, useEffect, useState } from "react";
import Trend from "@/assets/svgs/trend1.svg";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";
import { TestonomialCard } from "../orgasms";
function TestoNomial() {
  const sliderRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(1);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setSlidesToShow(2);
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="my-14 md:px-14 px-2 w-full">
      <div className="text-center color-black">
        <a className="text-2xl font-semibold color-purpul">
          What Our Satisfied Users Have to Say!
        </a>
      </div>
      <div className="relative mt-4">
        <div className="slider-container">
          <Slider ref={sliderRef} {...settings}>
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="items-center flex flex-row justify-center w-full lg:w-1/2 xl:w-1/2 p-2"
              >
                <TestonomialCard />
              </div>
            ))}
          </Slider>
        </div>
        <div className="button-container">
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 backgroud-primary color-secondary px-2 py-1 rounded  md:-ml-10 hover:opacity-85 cursor-pointer duration-300"
            onClick={goToPrev}
          >
            <GrFormPreviousLink className="text-2xl" />
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 backgroud-primary color-secondary px-2 py-1 rounded md:-mr-10 hover:opacity-85 cursor-pointer duration-300"
            onClick={goToNext}
          >
            <GrFormNextLink className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TestoNomial;
