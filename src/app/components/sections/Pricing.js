import React from "react";
import { PricingCard } from "../atoms";
import Image from "next/image";
import Payment from "../../../assets/svgs/payment.svg";
import { Link as ScrollLink, Element } from "react-scroll";
function Pricing() {
  return (
    <Element name="pricing">
      <div className="relative  ">
        <Image src={Payment} className="absolute z-0 w-full" />
        <div className="my-14  w-full relative py-10 z-10 px-3 md:px-7 lg:px-8 xl:px-6">
          <div className="text-center md:py-10 py-2">
            {/* Added z-index to ensure text is on top of the image */}
            <a className="text-2xl font-semibold text-white relative z-20 ">
              Choose the plan that’s right for you
            </a>
          </div>
          <div className="flex flex-wrap mt-5 ">
            {data4?.map((v, k) => {
              return <PricingCard key={k} data={v} index={k} />;
            })}
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Pricing;

const data4 = [
  {
    name: "Basic",
    price: "79 SR",
    starting: "Starting from 79",
    money: "Saudi Riyals",
    button: "Try For Free",
    content: [
      "Send invites through whatsapp",
      "RSVP",
      "Unique Qr code for each guest",
      "Event Location",
      "Scanner App",
    ],
  },
  {
    button: "Order Now",
    name: "Standard",
    price: "900 SR",
    starting: "Per month Billed",
    money: "quaterly",
    content: [
      "All features of the basic package",
      "Invitation management ",
      "sub-account",
      "Free Designs ",
      "Scanning management at the even",
    ],
  },
  {
    button: "Connect with us",
    name: "Premium",
    price: "5000 SR",
    starting: "Per month Billed",
    money: "quaterly",
    content: [
      "All features of the basic package",
      "Account Manager ",
      "Using a private number ",
      " Invitation customization options",
    ],
  },
];
