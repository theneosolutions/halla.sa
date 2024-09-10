import React from "react";
import Image from "next/image";
import HomeBack from "@/assets/svgs/homeBack.svg";
import HomeMobiles from "@/assets/svgs/homeMobiles.svg";
import { Button } from "@/app/components/atoms";

function HomeSection() {
  return (
    <div className="relative">
      <div className="absolute  w-full">
        <Image src={HomeBack} className="w-full " />
      </div>
      <div className="px-1 md:px-5 lg:px-6 xl:px-14 2xl:px-16 ">
        <div className="relative flex  flex-col md:flex-row items-center ">
          <div className="w-full md:w-3/4 h-min	">
            <Image src={HomeMobiles} />
          </div>
          <div className="w-full md:w-1/4 flex flex-col items-start	px-3 md:px-4 justify-end">
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
    </div>
  );
}
export default HomeSection;
