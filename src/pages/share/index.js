import React from "react";
import Image from "next/image";
import Image1 from "@/assets/svgs/image1.svg";
import whatsapp from "@/assets/svgs/whatsapp.svg";
import facebook from "@/assets/svgs/facebook.svg";
import insta from "@/assets/svgs/insta.svg";
import { Template1 } from "@/app/components/layouts";
import { useRouter } from "next/router";

function EventDetail() {
  const router = useRouter();
  var temp = [6, 6, 6, 6, 0];
  var temp2 = temp.every((item) => item === 6);
  console.log("temp", temp2);
  return (
    <Template1>
      <div className="flex flex-col md:flex-row  w-full justify-between ">
        <div className="w-full -mt-20 md:w-1/2 px-3 md:px-32 py-10 h-screen  items-center justify-center flex flex-col space-y-6 ">
          <div className=" border border-gray-200 rounded-tl-3xl rounded-br-3xl items-center space-x-2 py-3 w-full  cursor-pointer hover:shadow-xl flex flex-row text-center justify-center color-purpul duration-300">
            <Image src={whatsapp} />
            <a>Share Via Whtasapp</a>
          </div>
          <div className="border border-gray-200 rounded-tl-3xl rounded-br-3xl items-center space-x-2 py-3 w-full  cursor-pointer hover:shadow-xl flex flex-row text-center justify-center color-purpul duration-300">
            <Image src={insta} />
            <a>Share Via Instagram</a>
          </div>
          <div className="mb-20 border border-gray-200 rounded-tl-3xl rounded-br-3xl items-center space-x-2 py-3 w-full  cursor-pointer hover:shadow-xl flex flex-row text-center justify-center color-purpul duration-300">
            <Image src={facebook} />
            <a>Share Via Facebook</a>
          </div>
        </div>
        <Image src={Image1} className="object-cover md:w-1/2" />
      </div>
    </Template1>
  );
}
// export default EventDetail;
