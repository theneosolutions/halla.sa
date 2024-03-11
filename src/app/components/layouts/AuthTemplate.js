import React from "react";
import Image from "next/image";
import HallaBack from "@/assets/svgs/hallaBack.svg";
function AuthTemplate({ children }) {
  return (
    <div className="flex flex-col md:flex-row  w-full justify-between h-screen">
      <div className="w-full md:w-1/2  items-center justify-center flex flex-col pb-10 md:px-6 px-3 ">
        {children}
      </div>

      <Image src={HallaBack} className="h-screen object-cover w-1/2" />
    </div>
  );
}
export default AuthTemplate;
