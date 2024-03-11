import React from "react";
import { Button } from "../atoms";
function Contact() {
  return (
    <div className="my-14 md:px-14 px-2 py-10 w-full">
      <div className="rounded-tl-xl rounded-br-xl backgroud-primary items-center  justify-center flex flex-col py-10">
        <a className="text-2xl color-secondary">Get In Touch</a>
        <a className="color-secondary text-sm text-center mt-2">
          Please complete the following information and a member of our Customer
          <br />
          Service Team will contact you
        </a>
        <div className="w-full px-10">
          <div className="flex flex-row space-x-10 mt-10">
            <div className="flex flex-col w-1/2 ">
              <a className="text-sm color-secondary ">Get In Touch</a>
              <input
                placeholder="Enter your name"
                className="py-2 px-2 rounded-sm mt-2 outline-none"
              />
            </div>
            <div className="flex flex-col w-1/2 ">
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
        <Button value="Send" style="backgroud-secondary w-1/4 mt-10" />
      </div>
    </div>
  );
}
export default Contact;
