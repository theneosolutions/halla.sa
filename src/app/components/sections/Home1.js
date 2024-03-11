import React from "react";
import Image from "next/image";
import HomeBack from "@/assets/svgs/homeBack.svg";
import HomeMobiles from "@/assets/svgs/homeMobiles.svg";
import { Button } from "@/app/components/atoms";

function HomeSection() {
  return (
    <div className="relative ">
      <div className="absolute  w-full">
        <Image src={HomeBack} className="w-full " />
      </div>
      <div className="relative flex  flex-col md:flex-row items-center">
        <div className="w-3/4	">
          <Image src={HomeMobiles} />
        </div>
        <div className="w-full md:w-1/4 flex flex-col items-start	px-4">
          <a className="text-5xl baloo-Bhai md:text-white text-black ">
            Where Every
            <br />
            Note Tells a <br />
            Story
          </a>
          <Button
            value="Explore"
            style="w-full md:w-min  px-8  font-3rd backgroud-secondary mt-3"
          />
        </div>
      </div>
    </div>
  );
}
export default HomeSection;
