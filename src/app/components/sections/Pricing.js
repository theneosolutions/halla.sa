import React from "react";
import { PricingCard } from "../atoms";

function Pricing() {
  return (
    <div className="my-14 md:px-14 px-2  w-full ">
      <div className=" text-center  color-black  ">
        <a className="text-2xl font-semibold color-purpul">Pricing</a>
      </div>
      <div className="flex flex-wrap mt-5">
        <PricingCard data={data} />
        <PricingCard data={data2} />
        <PricingCard data={data3} />
      </div>
    </div>
  );
}
export default Pricing;

const data = [
  "Send invites through whats app or email",
  "RSVP",
  "Unique Qr code for each guest",
  "Event Location",
  "Scanner App",
];
const data2 = [
  "All features of the basic package",
  "Invitation management ",
  "sub-account",
  "Free Designs ",
  "Scanning management at the even",
];
const data3 = [
  "All features of the basic package",
  "Account Manager ",
  "Using a private number ",
  "Event Location",
  " Invitation customization options",
];
