import React from "react";
import Image from "next/image";

function FeachersPageCard({ icon, text }) {
  return (
    <div className="w-full md:w-1/2 xl:w-2/5	  p-3 ">
      <div className=" backgroud-primary rounded-3xl  items-center justify-center flex flex-col">
        <div className="h-36  flex items-center">
          <Image src={icon} className="" />
        </div>

        <div className="w-full h-32 backgroud-3rd rounded-2xl flex flex-col items-center justify-center">
          <div className="items-center text-center px-20  ">
            <a className="font-4rth color-purpul ">{text}</a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FeachersPageCard;
