import React from "react";
import Image from "next/image";

function FeachersCard({ icon, text }) {
  return (
    <div className="w-full md:w-1/3 xl:w-1/6 p-3 ">
      <div className=" backgroud-primary rounded-xl py-8 px-6 items-center justify-center flex flex-col">
        <div className="w-32 h-32 bg-white rounded-full flex flex-col items-center justify-center">
          <Image src={icon} className="w-10" />
        </div>
      </div>
      <div className="items-center text-center mt-5">
        <a className="font-4rth color-purpul ">{text}</a>
      </div>
    </div>
  );
}
export default FeachersCard;
