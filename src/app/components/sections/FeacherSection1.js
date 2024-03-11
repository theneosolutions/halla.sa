import React from "react";
import Image from "next/image";
import FeacherBack from "@/assets/svgs/feacherBack.svg";

function FeacherSection1() {
  return (
    <div className="relative ">
      <Image src={FeacherBack} className="w-full " />
    </div>
  );
}
export default FeacherSection1;
