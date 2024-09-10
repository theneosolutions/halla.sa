import React from "react";
import { Download } from "../atoms";
import { FaPlay } from "react-icons/fa6";
import { SiApple } from "react-icons/si";
import MobileDummy from "@/assets/svgs/mobileDummy.svg";
import Image from "next/image";
import halla from "../../../assets/halla.gif";
function Feachers() {
  return (
    <div className=" md:px-9 lg:px-14 xl:px-24 px-5  w-full flex flex-col lg:flex-row justify-between items-center md:space-x-3 py-10 md:py-20 xl:py-0 2xl:py-20 xl:h-screen 2xl:h-max 2xl:mt-0 md:mt-20 bg-gray-200">
      <div className="w-full md:w-full lg:w-1/2 xl:w-4/12 ">
        <div className="color-black">
          <a className="font-4rth font-semibold color-black leading-7">
            Allows users to send up to three event <br /> reminders before the
            event date. For RSVP <br /> reminders, users will have to send
            messages <br />
            to guests that haven't RSVPed.
          </a>
        </div>
        <div className="flex flex-col md:flex-row   md:space-x-5 my-10  mb-10 md:mb-0">
          <Download
            text="Google Play"
            icon={<FaPlay className="color-secondary text-3xl " />}
          />
          <Download
            text="Apple Store"
            icon={<SiApple className="color-secondary text-3xl " />}
          />
        </div>
      </div>
      <div className="w-full md:w-full lg:w-1/2 xl:w-8/12 mt-10 lg:mt-0">
        <Image
          src={halla}
          unoptimized
          className="border-8  border-primary rounded-3xl"
        />
      </div>
    </div>
  );
}
export default Feachers;
