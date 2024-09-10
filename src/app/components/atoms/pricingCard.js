import React from "react";
import Button from "./button";
import Tick from "../../../assets/svgs/tick.svg";
import Image from "next/image";
function PricingCard({ data, key, index }) {
  return (
    <div
      className={`w-full md:w-1/3  p-2 lg:p-3 justify-center  flex  ${
        index === 2 && ""
      }`}
    >
      <div className=" bg-white hover:bg-gray-50 cursor-pointer duration-300 border border-gray-100  shadow-xl flex flex-col rounded-2xl w-full md:w-full lg:w-11/12 xl:w-9/12	justify-between">
        <div className="py-2 md:py-2 lg:py-3 px-2 md:px-2 lg:px-3">
          <div className=" bg-gray-200 rounded-xl flex flex-col text-center">
            <a className="text-sm opacity-90 mt-6 mb-1">{data?.name}</a>
            <a className="font-extrabold text-3xl">{data?.price}</a>
            <a className="text-xs  mt-2 mb-1 opacity-70 font-thin ">
              {data?.starting}
            </a>
            <a className="text-xs   opacity-70 font-thin mb-6">{data?.money}</a>
          </div>
          <ul className="list-disc md:ml-2 lg:ml-4 color-purpul text-sm space-y-7 mt-5">
            {data?.content?.map((v, k) => {
              return (
                <div className="flex flex-row space-x-3">
                  <Image src={Tick} className="h-3 w-max mt-0.5" />
                  <a key={k} className="font-thin text-gray-700">
                    {v}
                  </a>
                </div>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-row items-center justify-center mb-7 mt-4">
          <div className="w-9/12	 hover:bg-yellow-600 duration-300 cursor-pointer hover:border-transparent hover:text-white rounded-md text-center py-2 bg-gray-100 font-thin border border-gray-300 text-sm text-opacity-80 opacity-80">
            {data?.button}
          </div>
          {/* <Button
            value="Try For Free"
            style=""
          /> */}
        </div>
      </div>
    </div>
  );
}
export default PricingCard;
