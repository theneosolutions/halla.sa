import Image from "next/image";
import { useState } from "react";
import Logo from "@/assets/svgs/logo.svg";
import { FaRegUserCircle } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { GoGlobe } from "react-icons/go";
import { useRouter } from "next/router";
import { Link as ScrollLink, Element } from "react-scroll";
export default function Header() {
  const router = useRouter();
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navToggle = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <header
      id="top"
      className="w-full flex flex-col  absolute sm:relative z-50"
    >
      <nav
        id="site-menu"
        className={`  w-full justify-between items-center sm:px-0 md:px-4 py-1 sm:py-0  backgroud-primary   ${
          isNavSticky ? "nav-sticky" : ""
        }`}
      >
        <div className="w-full ">
          <header className="px-20 py-2 backgroud-primary hidden sm:flex flex-col lg:flex-row justify-between items-center">
            <div className="" rounded-md>
              <Image className="h-20 " src={Logo} alt="Halla Logo" priority />
            </div>
            <div className=" space-x-2 md:space-x-8 ">
              <ScrollLink offset={0} to={"home"} smooth={true} duration={500}>
                <span className="color-secondary font-primary  duration-300 hover:shadow-xl cursor-pointer hover:underline">
                  Home
                </span>
              </ScrollLink>

              <ScrollLink
                offset={-50}
                to={"feachers"}
                smooth={true}
                duration={500}
              >
                <span className="color-secondary font-primary duration-300 hover:shadow-xl cursor-pointer hover:underline">
                  Features
                </span>
              </ScrollLink>

              <ScrollLink
                offset={50}
                to={"pricing"}
                smooth={true}
                duration={500}
              >
                <span className="color-secondary font-primary duration-300 hover:shadow-xl cursor-pointer hover:underline">
                  Pricing
                </span>
              </ScrollLink>

              <ScrollLink
                offset={0}
                to={"contact"}
                smooth={true}
                duration={500}
              >
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
          <div className="relative">
            <header className="flex flex-col  sm:hidden">
              <div className="flex flex-row justify-between py-2 pr-1 items-center ">
                <button
                  id="menuBtn"
                  className={`hamburger block sm:hidden focus:outline-none ${
                    isNavOpen ? "open" : ""
                  }`}
                  type="button"
                  onClick={navToggle}
                >
                  <span className="hamburger__top-bun"></span>
                  <span className="hamburger__bottom-bun"></span>
                </button>
                <div className="" rounded-md>
                  <Image
                    className="h-14 "
                    src={Logo}
                    alt="Halla Logo"
                    priority
                  />
                </div>
              </div>
              {isNavOpen && (
                <div className=" flex-col flex px-4 space-y-5 pb-6 ">
                  <ScrollLink
                    offset={0}
                    to={"home"}
                    smooth={true}
                    duration={500}
                  >
                    <span className="color-secondary font-primary  duration-300 hover:shadow-xl cursor-pointer hover:underline">
                      Home
                    </span>
                  </ScrollLink>

                  <ScrollLink
                    offset={-50}
                    to={"feachers"}
                    smooth={true}
                    duration={500}
                  >
                    <span className="color-secondary font-primary duration-300 hover:shadow-xl cursor-pointer hover:underline">
                      Features
                    </span>
                  </ScrollLink>

                  <ScrollLink
                    offset={50}
                    to={"pricing"}
                    smooth={true}
                    duration={500}
                  >
                    <span className="color-secondary font-primary duration-300 hover:shadow-xl cursor-pointer hover:underline">
                      Pricing
                    </span>
                  </ScrollLink>

                  <ScrollLink
                    offset={0}
                    to={"contact"}
                    smooth={true}
                    duration={500}
                    // onClick={()=>setIsNavOpen(false)}
                  >
                    <span className="color-secondary font-primary duration-300 hover:shadow-xl cursor-pointer hover:underline">
                      Contact Us
                    </span>
                  </ScrollLink>
                </div>
              )}
            </header>
          </div>
        </div>
      </nav>
    </header>
  );
}
