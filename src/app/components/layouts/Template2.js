import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { FaChevronRight } from "react-icons/fa6";

const MainLayout = ({ children, padding }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsOpen(false); // Close sidebar when screen width is less than or equal to 768px
      }
    };

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this effect runs only once after initial render

  return (
    <>
      <div className={` flex flex-row fixed w-full `}>
        <Sidebar isOpen={isOpen} toggleSidebar={() => toggleSidebar()} />

        {!isOpen && (
          <div className="z-50 backgroud-3rd flex flex-col h-screen  items-center justify-center ">
            <div
              onClick={() => toggleSidebar()}
              className=" cursor-pointer w-12 backgroud-3rd h-14 items-center justify-center flex  "
            >
              <FaChevronRight className="text-gray-400 text-xl " />
            </div>
          </div>
        )}

        <div
          className={`w-full bg-gray-100 h-screen  relative overflow-scroll`}
        >
          <div
            className={`flex flex-col ${
              !padding
                ? "md:px-8 md:py-8 "
                : padding === "small"
                ? "px-4 py-4"
                : padding === "none"
                ? "px-0 py-0"
                : null
            }`}
          >
            <div className="flex items-center justify-center p-3 w-full">
              <div className="bg-white  px-5 md:px-6 lg:px-8  xl:px-8 py-5 md:py-8 lg:py-8 xl:py-8 rounded-xl shadow-md content w-full ">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
