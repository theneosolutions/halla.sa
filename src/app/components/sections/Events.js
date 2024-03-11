import React from "react";
import { Button, InputField } from "@/app/components/atoms";
import Image2 from "@/assets/svgs/image2.svg";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { TiLocation } from "react-icons/ti";
import { useRouter } from "next/router";

function EventCards() {
  return (
    <div className="md:my-8 my-14 items-center flex flex-col w-full	">
      <a className="text-4xl  font-bold">All Created Events</a>
      <InputField placeholder="Search" style="mt-8 w-full md:w-6/12		" />
      <div className="w-full flex flex-wrap my-10">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
export default EventCards;
function Card() {
  const router = useRouter();
  return (
    <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/3 py-4 md:p-2 lg:p-4 xl:p-7 cursor-pointer ">
      <div className=" backgroud-primary rounded-3xl">
        <div className="">
          <Image
            src={Image2}
            className="w-full"
            onClick={() => router.push("/events/event-detail")}
          />
        </div>
        <div
          onClick={() => router.push("/events/event-detail")}
          className=" flex flex-col lg:flex-row justify-between text-white text-center items-center px-5 py-6"
        >
          <div className="flex flex-col">
            <a className="text-lg lg:text-2xl  font-bold">Birthday Party</a>

            <a className="text-sm lg:pl-3 mt-4">Lahore, Sunday, 22 Jan 2024</a>
          </div>
          <div className="text-sm flex  flex-row items-center justify-center space-x-1">
            <span>
              <TiLocation />
            </span>
            <a>Riyadh, Saudi Arabia</a>
          </div>
        </div>
        <div className="px-10 py-6">
          <div
            onClick={() => router.push("/share")}
            className="backgroud-3rd w-full rounded-full py-3 cursor-pointer hover:shadow-xl flex flex-row text-center justify-center color-purpul"
          >
            <a>Share</a>
          </div>
        </div>
      </div>
    </div>
  );
}
