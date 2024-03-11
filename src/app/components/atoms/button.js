import React from "react";
import Image from "next/image";

function Button({ value, style, onClick, variation, icon }) {
  const handleClick = () => {
    if (onClick && typeof onClick === "function") {
      onClick();
    }
  };
  return (
    <>
      {!variation ? (
        <div
          onClick={handleClick}
          className={` text-center  px-6 py-2 color-secondary rounded-tl-xl rounded-br-xl cursor-pointer hover:opacity-90 duration-300 hover:shadow-xl ${style} `}
        >
          <a>{value}</a>
        </div>
      ) : variation === "outline" ? (
        <div
          onClick={handleClick}
          className={`  justify-center border border-gray-200  text-gray-600 text-sm space-x-2 text-center flex flex-row items-center px-6 py-2 rounded-tl-xl rounded-br-xl cursor-pointer hover:opacity-90 duration-300 hover:shadow-xl ${style} `}
        >
          {icon && (
            <div>
              <Image src={icon} />
            </div>
          )}

          <a className="py-1">{value}</a>
        </div>
      ) : null}
    </>
  );
}
export default Button;
