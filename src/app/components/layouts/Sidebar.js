import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import HomeData from "./sidebarData";
import { useRouter } from "next/router";
import Logo from "@/assets/svgs/logo3.svg";
import Logo2 from "@/assets/svgs/logo2.svg";
import { CiLogout } from "react-icons/ci";
import Image from "next/image";
import { useDispatch } from "react-redux";
import * as action from "../../../redux/reducer";
import { Model } from "@/app/components/layouts";
import { Button } from "@/app/components/atoms";

function App({ isOpen, toggleSidebar }) {
  const [model2, setModel2] = useState(false);

  const sidebarWidth = isOpen ? "w-72" : "w-0"; // Adjust sidebar width
  var paddingx = "px-8";
  const router = useRouter();
  const dispatch = useDispatch();

  function Logout() {
    router.push("/login");
    dispatch(
      action.Auth({
        user: null,
        islogin: false,
        token: null,
      })
    );

    localStorage.removeItem("user");
    setModel2(false);
  }
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
                    onClick={() =>
                      v?.route === "/login"
                        ? setModel2(true)
                        : router.push(v?.route)
                    }
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
      <Model isOpen={model2} onclose={() => setModel2(false)}>
        <div className=" w-full flex flex-row justify-between">
          <div className="w-1/2 px-10 flex flex-col items-center ">
            <CiLogout className="text-8xl text-gray-300" />
            <a className="text-white text-lg mt-5">Logout</a>
            <a className="text-xs text-white opacity-80">Are You Sure ?</a>

            <Button
              onClick={() => Logout()}
              value="Logout"
              style="w-full  font-primary backgroud-secondary mt-5"
            />
          </div>
          <div className=" w-1/2 items-center justify-center flex">
            <Image src={Logo2} className="max-h-64" />
          </div>
        </div>
      </Model>
    </div>
  );
}

export default App;
