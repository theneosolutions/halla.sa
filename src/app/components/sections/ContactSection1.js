import React from "react";
import Image from "next/image";
import ContactBack from "@/assets/svgs/contactBack.svg";

function ContactSection1() {
  return (
    <div className="relative ">
      <Image src={ContactBack} className="w-full " />
    </div>
  );
}
export default ContactSection1;
