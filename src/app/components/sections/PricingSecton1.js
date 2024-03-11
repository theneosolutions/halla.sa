import React from "react";
import Image from "next/image";
import PricingBack from "@/assets/svgs/pricingBack.svg";

function PricingSection1() {
  return (
    <div className="relative ">
      <Image src={PricingBack} className="w-full " />
    </div>
  );
}
export default PricingSection1;
