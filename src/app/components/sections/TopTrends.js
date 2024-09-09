import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import Trend1 from "@/assets/svgs/trend1.svg";
import Trend2 from "@/assets/svgs/trend2.svg";
import Trend3 from "@/assets/svgs/trend3.svg";
import Trend4 from "@/assets/svgs/trend4.svg";
import Trend5 from "@/assets/svgs/trend5.svg";

function TopTrends() {
  const sliderRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(1);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: false, // Hide default arrows to use custom buttons
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setSlidesToShow(5);
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(3);
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
    <div className="my-14 md:px-14 px-2 w-full ">
      <div className="text-center color-black">
        <a className="text-2xl font-semibold color-purpul">Invitation Cards</a>
      </div>
      <div className="relative mt-4">
        <Slider ref={sliderRef} {...settings}>
          {data.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-full p-2"
            >
              <div className="flex items-center justify-center w-full h-full">
                <Image
                  src={item.image}
                  alt={`Trend ${index + 1}`}
                  className="mx-auto" // Ensures image is centered
                />
              </div>
            </div>
          ))}
        </Slider>
        <div className="button-container">
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-primary text-secondary px-2 py-1 rounded md:-ml-10 hover:opacity-85 cursor-pointer duration-300 z-10"
            onClick={goToPrev}
          >
            <GrFormPreviousLink className="text-2xl" />
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-primary text-secondary px-2 py-1 rounded md:-mr-10 hover:opacity-85 cursor-pointer duration-300 z-10"
            onClick={goToNext}
          >
            <GrFormNextLink className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopTrends;

const data = [
  { image: Trend1 },
  { image: Trend2 },
  { image: Trend3 },
  { image: Trend4 },
  { image: Trend5 },
];
