import React, { useState, useRef } from "react";
import { Button } from "@/app/components/atoms";
import { AuthTemplate } from "@/app/components/layouts";

function Verify() {
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [inputs, setInputs] = useState(["", "", "", ""]);
  const handleInput = (index, e) => {
    const value = e.target.value;
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);

    const maxLength = parseInt(e.target.getAttribute("maxlength"), 10);
    const currentLength = value.length;

    if (currentLength >= maxLength && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };
  return (
    <AuthTemplate>
      <div className="md:my-8 my-44 items-center flex flex-col md:w-4/6	">
        <a className="text-4xl  font-bold">Verify</a>
        <a className="text-sm mt-6 text-gray-500 justify-center text-center ">
          Please enter the verification code <br /> sent to your phone number
        </a>
        <div className="my-10 mt-14 w-72 border border-gray-300 rounded-tl-2xl rounded-br-2xl px-4 py-4 text-sm color-purpul">
          <a className="text-sm">Your Code</a>

          <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs mt-4">
            {inputRefs.map((inputRef, index) => (
              <div className="w-12 h-12" key={index}>
                <input
                  ref={inputRef}
                  className=" w-full h-full flex flex-col items-center justify-center text-center  outline-none  border-b border-gray-300 text-lg  "
                  type="text"
                  name=""
                  id=""
                  maxLength={1}
                  value={inputs[index]}
                  onChange={(e) => handleInput(index, e)}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-row justify-between pb-14 mt-4">
            <a className="text-sm">Resend your code</a>
            <a className="text-sm">Expired after 23s</a>
          </div>
        </div>

        <Button
          value="Confirm"
          style="w-full  font-primary backgroud-secondary mt-10"
        />
      </div>
    </AuthTemplate>
  );
}
export default Verify;
