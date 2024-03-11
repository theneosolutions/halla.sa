import React from "react";
import { Download } from "../atoms";
import { FaPlay } from "react-icons/fa6";
import { SiApple } from "react-icons/si";
import MobileDummy from "@/assets/svgs/mobileDummy.svg";
import Image from "next/image";

function Feachers() {
  return (
    <div className=" mt-20 md:px-20 px-2  w-full flex flex-col md:flex-row justify-between items-center">
      <div>
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
      <div className="">
        <Image src={MobileDummy} />
      </div>
    </div>
  );
}
export default Feachers;
