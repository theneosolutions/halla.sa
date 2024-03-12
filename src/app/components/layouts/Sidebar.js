import React from "react";
import { IoClose } from "react-icons/io5";
import HomeData from "./sidebarData";
import { useRouter } from "next/router";
import Logo from "@/assets/svgs/logo3.svg";
import Image from "next/image";
function App({ isOpen, toggleSidebar }) {
  const sidebarWidth = isOpen ? "w-72" : "w-0"; // Adjust sidebar width
  var paddingx = "px-8";
  const router = useRouter();

  return (
    <div className={`flex  flex-col  backgroud-3rd   `}>
      <div
        className={`h-screen ${sidebarWidth}  text-white backgroud-3rd  ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out transform`}
      >
        <div
          style={{ height: "30vh" }}
          className=" items-center flex flex-col justify-center relative"
        >
          <div className="px-3 flex flex-row justify-end  w-full">
            <IoClose
              className="text-xl cursor-pointer text-gray-400"
              onClick={() => toggleSidebar()}
            />
          </div>

          <Image src={Logo} className="px-3" />
        </div>

        <div
          className={` overflow-y-auto	flex flex-col `}
          style={{ height: "70vh" }}
        >
          <div className="">
            <div className=" mt-2 space-y-2">
              {HomeData?.map((v, k) => {
                return (
                  <div
                    onClick={() => router.push(v?.route)}
                    key={k}
                    className={`flex flex-row items-center space-x-3 cursor-pointer py-2 hover:bg-gray-300 duration-300 ${paddingx}`}
                  >
                    <div className="color-purpul text-md">{v.icon}</div>
                    <a className="color-purpul ">{v.name}</a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
