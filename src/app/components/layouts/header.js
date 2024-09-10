import Image from "next/image";
import Logo from "@/assets/svgs/logo.svg";
import { FaRegUserCircle } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { GoGlobe } from "react-icons/go";
import { useRouter } from "next/router";
import { Link as ScrollLink, Element } from "react-scroll";
export default function Header() {
  const router = useRouter();
  return (
    <div className="w-full ">
      <header className="px-20 py-2 backgroud-primary flex flex-col lg:flex-row justify-between items-center">
        <div className="" rounded-md>
          <Image className="h-20 " src={Logo} alt="Halla Logo" priority />
        </div>
        <div className=" space-x-2 md:space-x-8 ">
          <ScrollLink offset={0} to={"home"} smooth={true} duration={500}>
            <span className="color-secondary font-primary  duration-300 hover:shadow-xl cursor-pointer hover:underline">
              Home
            </span>
          </ScrollLink>

          <ScrollLink offset={-50} to={"feachers"} smooth={true} duration={500}>
            <span className="color-secondary font-primary duration-300 hover:shadow-xl cursor-pointer hover:underline">
              Features
            </span>
          </ScrollLink>

          <ScrollLink offset={50} to={"pricing"} smooth={true} duration={500}>
            <span className="color-secondary font-primary duration-300 hover:shadow-xl cursor-pointer hover:underline">
              Pricing
            </span>
          </ScrollLink>

          <ScrollLink offset={0} to={"contact"} smooth={true} duration={500}>
            <span className="color-secondary font-primary duration-300 hover:shadow-xl cursor-pointer hover:underline">
              Contact Us
            </span>
          </ScrollLink>
        </div>
        <div className="flex flex-row  space-x-4 ">
          <div className="flex flex-row backgroud-secondary py-2 items-center space-x-2 px-4 rounded-md">
            <a className="color-secondary">Language</a>
            <GoGlobe className="text-2xl color-secondary" />
          </div>
        </div>
      </header>
    </div>
  );
}
