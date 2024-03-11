import React from "react";
import { RiDoubleQuotesR } from "react-icons/ri";

function TestonomialCard() {
  return (
    <div className="  p-3 ">
      <div className="bg-gray-100 rounded-xl py-8 px-6 items-center justify-center flex flex-col w-full">
        <div className="flex flex-row w-full justify-between">
          <div className="w-14 h-14 backgroud-secondary rounded-full flex flex-col items-center justify-center"></div>

          <RiDoubleQuotesR className="text-5xl color-primary" />
        </div>
        <div className="w-full flex flex-col">
          <a className="font-primary color-primary my-2">
            Using it from Day One!
          </a>
          <a className="font-primary color-3rd">
            I like the different sections to help you find what you need for any
            occasion, and I love the seasonal designs. I'm a graphic designer so
            I also really like the custom cards with your own design.
          </a>
          <a className="font-4rth color-3rd mt-4">Alex Johnson</a>
          <a className="text-sm color-primary mt-2">User Since 2021</a>
        </div>
      </div>
    </div>
  );
}
export default TestonomialCard;
