import React from "react";
import { Button } from "../atoms";
import World from "../../../assets/svgs/world.svg";
import Image from "next/image";
import { Link as ScrollLink, Element } from "react-scroll";
function Contact() {
  return (
    <Element
      name="contact"
      className="mt-10 lg:mt-0 px-4 md:px-10 lg:px-14 xl:px-24"
    >
      <div className="py-10 w-full flex flex-col lg:flex-row  my-10 items-center lg:space-x-10 ">
        <div className="w-full lg:w-1/3 xl:w-1/2 items-center flex flex-col  ">
          <Image src={World} />
        </div>
        <div className="w-full lg:w-8/12 rounded-xl backgroud-primary items-center  justify-center flex flex-col py-10 h-min mt-8 md:mt-0  ">
          <a className="text-2xl color-secondary">Get In Touch</a>
          <a className="color-secondary text-sm text-center mt-2">
            Please complete the following information and a member of our
            Customer
            <br />
            Service Team will contact you
          </a>
          <div className="w-full px-4 md:px-10">
            <div className="flex flex-col md:flex-row md:space-x-10 mt-10">
              <div className="flex flex-col w-full md:w-1/2 ">
                <a className="text-sm color-secondary ">Get In Touch</a>
                <input
                  placeholder="Enter your name"
                  className="py-2 px-2 rounded-sm mt-2 outline-none"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/2 mt-3 md:mt-0">
                <a className="text-sm color-secondary ">Email</a>
                <input
                  placeholder="Enter your email"
                  className="py-2 px-2 rounded-sm mt-2 outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col w-full mt-5">
              <a className="text-sm color-secondary ">Message</a>
              <textarea
                placeholder="Enter your massage"
                className="py-2 px-2 rounded-sm mt-2 outline-none max-h-32 min-h-28"
              />
            </div>
          </div>
          <div className="px-4 md:px-0 w-full md:w-1/4">
            <Button value="Send" style="backgroud-secondary  mt-10" />
          </div>
        </div>
      </div>
    </Element>
  );
}
export default Contact;
