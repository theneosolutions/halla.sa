import React from "react";
import Image from "next/image";
import Image1 from "@/assets/svgs/image1.svg";
import { Template1 } from "@/app/components/layouts";
import { useRouter } from "next/router";
import Image2 from "@/assets/svgs/image2.svg";
import { IoCaretDownCircleOutline } from "react-icons/io5";

function EventDetail() {
  const router = useRouter();
  var name = ["2", "6", "66"];
  console.log(name.join(""));
  return (
    <div className="flex flex-col md:flex-row  w-full justify-between ">
      <div className="w-full md:w-1/2 px-3 md:px-10 py-10">
        <div className="w-full  cursor-pointer ">
          <div className=" backgroud-primary rounded-3xl p-5 flex flex-row justify-between">
            <Image
              src={Image2}
              className="w-5/12		 h-32 object-cover rounded-xl"
            />
            <div className="w-7/12	 flex flex-col lg:flex-row justify-between text-white text-center items-center px-5 py-6">
              <div className="flex flex-col">
                <a className="text-md lg:text-xl  font-bold">Birthday Party</a>

                <a className="text-xs lg:pl-3 mt-4">
                  Lahore, Sunday, 22 Jan 2024
                </a>
              </div>
              <div className="text-sm flex  flex-row items-center justify-center space-x-1">
                <IoCaretDownCircleOutline className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-5 mt-10">
          <Category value={40} name="Invited" />
          <Category value={29} name="Messages" />
          <Category value={40} name="Confirmed" />
          <Category value={80} name="Scanned" />
          <Category value={80} name="Rejected" />
          <Category value={90} name="Waiting" />
          <Category value={50} name="Not Verified" />
          <Category value={20} name="Failed" />
        </div>
      </div>
      <Image src={Image1} className="object-cover md:w-1/2" />
    </div>
  );
}
export default EventDetail;

function Category({ name, value }) {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-center">
      <div className="backgroud-3rd rounded-lg py-2 w-44 cursor-pointer hover:shadow-xl flex flex-row text-center justify-center color-purpul">
        <a>{name}</a>
      </div>

      <div className="w-full md:w-72">
        <div className="flex flex-row justify-end">
          <div className="color-purpul">10</div>
        </div>
        <div className=" h-3  backgroud-3rd rounded-full justify-end flex flex-row">
          <div
            className=" h-3 backgroud-primary rounded-full"
            style={{ width: `${value + "%"}` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
