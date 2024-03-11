import React from "react";
import { FeachersPageCard } from "../atoms";
import Automate from "@/assets/svgs/automate.svg";
import Guests from "@/assets/svgs/guests.svg";
import Track from "@/assets/svgs/track.svg";
import Scan from "@/assets/svgs/scan.svg";
import PickCard from "@/assets/svgs/pickCard.svg";
import Image from "next/image";

function FeacherPageSection() {
  return (
    <div className="my-14 md:px-14 px-2  w-full">
      <div className="px-10 w-full text-center  color-black my-6 ">
        <div className=" text-center  color-black  my-5">
          <a className="text-2xl font-semibold color-purpul">Features</a>
        </div>
        <a className="font-4rth leading-8 mt-10">
          A platform for hosts to communicate event details, updates, and
          announcements to
          <br />
          guests, such as changes in venue or schedule.
        </a>
      </div>
      <div className="flex flex-wrap justify-between    md:px-14">
        <div className="flex flex-col justify-between w-full lg:w-1/2">
          <div className="flex flex-wrap mt-10 w-full  xl:space-x-14">
            <FeachersPageCard icon={Automate} text="Automated Invitation" />
            <FeachersPageCard icon={Guests} text="Guest Information" />
          </div>
          <div className="flex flex-wrap md:mt-10 w-full xl:space-x-14">
            <FeachersPageCard icon={Track} text="Advance Tracking" />
            <FeachersPageCard icon={Scan} text="Scan Information" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-end items-center">
          <Image src={PickCard} className=" lg:-mr-20" />
        </div>
      </div>
    </div>
  );
}
export default FeacherPageSection;
