import React from "react";
import Image from "next/image";
import Image1 from "@/assets/svgs/image1.svg";
import { Template1 } from "@/app/components/layouts";
import { Button } from "@/app/components/atoms";
import { useRouter } from "next/router";

function TryHalla() {
  const router = useRouter();

  return (
    <Template1>
      <div className="flex flex-col md:flex-row  w-full justify-between ">
        <div className="w-full md:w-1/2  mt-10 flex flex-col pb-10 md:px-6 px-3 ">
          <div className="flex flex-col w-full">
            <a className="text-sm text-gray-500 ">Search Location</a>
            <input
              placeholder="Type your event name"
              className="py-3 px-3  text-sm mt-2 outline-none border border-gray-200 rounded-lg"
            />
          </div>

          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.9364239203815!2d74.34418217609871!3d31.525906046867604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905f57e5d720d%3A0x3599e0481371a139!2sGulmohar%20Trade%20Centre!5e0!3m2!1sen!2s!4v1710142052195!5m2!1sen!2s"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="w-full h-72 my-5"
            ></iframe>
          </div>

          <a className="text-sm text-gray-700 mt-3">Select Location</a>

          <a className="text-sm text-gray-700 mt-3">Near By Places</a>
          <div>
            <div className="py-3 px-3  text-sm mt-2 outline-none border border-gray-200 rounded-lg justify-center text-center">
              Malls
            </div>
            <div className="py-3 px-3  text-sm mt-2 outline-none border border-gray-200 rounded-lg justify-center text-center">
              Domino’s Pizza
            </div>
            <div className="py-3 px-3  text-sm mt-2 outline-none border border-gray-200 rounded-lg justify-center text-center">
              KFC
            </div>
            <div className="py-3 px-3  text-sm mt-2 outline-none border border-gray-200 rounded-lg justify-center text-center">
              McDonald
            </div>
          </div>

          <div className="flex flex-row w-full items-center justify-center space-x-10">
            <Button
              onClick={() => router.push("/try-halla/pick-card")}
              value="Continue"
              style="w-max  font-primary backgroud-secondary mt-10"
            />
          </div>
        </div>

        <Image src={Image1} className=" object-cover w-1/2" />
      </div>
    </Template1>
  );
}
export default TryHalla;
