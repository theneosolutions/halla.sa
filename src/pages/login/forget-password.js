import React, { useState, useRef } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { Button, InputField } from "@/app/components/atoms";
import { AuthTemplate } from "@/app/components/layouts";
import { useRouter } from "next/router";
import { MdOutlineLocalPhone } from "react-icons/md";
import { SelectLogin } from "@/app/components/orgasms";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import AllDoneImage from "@/assets/svgs/allDone.svg";
import Image from "next/image";
function Login() {
  const router = useRouter();
  const [state, setState] = useState(1);
  const [active, setActive] = useState("email");
  return (
    <AuthTemplate>
      {state === 1 ? (
        <div className="md:my-8 my-44 items-center flex flex-col md:w-4/6	">
          <a className="text-4xl  font-bold">Forgot password?</a>
          <a className="text-sm mt-6 text-gray-500 justify-center text-center ">
            Please select option to send link reset password
          </a>

          <SelectLogin
            id="email"
            active={active}
            icon={<AiOutlineMail className="text-sm " />}
            value="Reset via Email"
            text="Link reset will be send to your email address"
            onClick={(e) => setActive(e)}
          />
          <SelectLogin
            id="phone"
            active={active}
            icon={<MdOutlineLocalPhone className="text-sm " />}
            value="Send via SMS"
            text="Link reset will be send to your SMS in phone"
            onClick={(e) => setActive(e)}
          />

          <Button
            onClick={() => setState(2)}
            value="Send request"
            style="w-full  font-primary backgroud-secondary mt-10"
          />
        </div>
      ) : state === 2 ? (
        <ForgetEmailOrPhone active={active} onClick={() => setState(3)} />
      ) : state === 3 ? (
        <Otp active={active} onClick={() => setState(4)} />
      ) : state === 4 ? (
        <ResetPassword active={active} onClick={() => setState(6)} />
      ) : (
        <AllDone />
      )}
    </AuthTemplate>
  );
}
export default Login;

function AllDone() {
  return (
    <div className="md:my-8 my-44 items-center flex flex-col md:w-4/6	">
      <Image src={AllDoneImage} />
      <a className="text-4xl  font-bold my-10">All set well done!</a>

      <Button
        value="Continue"
        style="w-full  font-primary backgroud-secondary mt-14"
      />
    </div>
  );
}
function ResetPassword({ onClick }) {
  const [eye, setEye] = useState(false);

  const [eye2, setEye2] = useState(false);

  return (
    <div className="md:my-8 my-44 items-center flex flex-col md:w-4/6	">
      <a className="text-4xl  font-bold">Reset Password</a>
      <a className="text-sm mt-6 text-gray-500 justify-center text-center ">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do <br />{" "}
        amet sintvelit officia consequat duis enim velit mollit.
      </a>

      <InputField
        placeholder="Password"
        heading="Enter New Password"
        style="mt-10"
        type={eye ? "text" : "password"}
        icon={
          eye ? (
            <IoEyeOutline
              className="color-purpul text-xl cursor-pointer"
              onClick={() => setEye(!eye)}
            />
          ) : (
            <FaRegEyeSlash
              className="color-purpul text-xl cursor-pointer"
              onClick={() => setEye(!eye)}
            />
          )
        }
      />
      <InputField
        placeholder="Password"
        heading="Re-type Enter New Password"
        style="mt-3"
        type={eye2 ? "text" : "password"}
        icon={
          eye2 ? (
            <IoEyeOutline
              className="color-purpul text-xl cursor-pointer"
              onClick={() => setEye2(!eye2)}
            />
          ) : (
            <FaRegEyeSlash
              className="color-purpul text-xl cursor-pointer"
              onClick={() => setEye2(!eye2)}
            />
          )
        }
      />

      <Button
        onClick={() => onClick("email")}
        value="Continue"
        style="w-full  font-primary backgroud-secondary mt-14"
      />
    </div>
  );
}
function Otp({ active, onClick }) {
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
    <div className="md:my-8 my-44 items-center flex flex-col md:w-4/6	">
      <a className="text-4xl  font-bold">Enter your passcode</a>
      <a className="text-sm mt-6 text-gray-500 justify-center text-center ">
        We’ve sent the code to the email on your device
      </a>
      <div className="my-10  mt-14 flex flex-row items-center justify-between mx-auto w-full max-w-xs ">
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

      <a className="text-xs mt-2 text-gray-500">
        Code expires in : <span className="color-purpul">00 : 56</span>
      </a>
      <a className="text-xs mt-2 text-gray-500">
        Didn’t receive code? <span className="color-purpul"> Resend Code</span>
      </a>
      <Button
        onClick={() => onClick("email")}
        value="Send verification"
        style="w-full  font-primary backgroud-secondary mt-10"
      />
    </div>
  );
}

function ForgetEmailOrPhone({ active, onClick }) {
  return (
    <>
      {active === "email" ? (
        <div className="md:my-8 my-44 items-center flex flex-col md:w-4/6	">
          <a className="text-4xl  font-bold">Forgot password?</a>
          <a className="text-sm mt-6 text-gray-500 justify-center text-center ">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do{" "}
            <br /> amet sintvelit officia consequat duis enim velit mollit.
          </a>

          <InputField
            placeholder="Email address"
            heading="Email"
            style="mt-8"
            icon={<AiOutlineMail className="text-gray-400 text-xl" />}
          />
          <a className="text-xs w-full mt-2 text-gray-500">
            We will send you a message to set or reset new password
          </a>
          <Button
            onClick={() => onClick("email")}
            value="Continue"
            style="w-full  font-primary backgroud-secondary mt-10"
          />
        </div>
      ) : (
        <div className="md:my-8 my-44 items-center flex flex-col md:w-4/6	">
          <a className="text-4xl  font-bold">Forgot password?</a>
          <a className="text-sm mt-6 text-gray-500 justify-center text-center ">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do{" "}
            <br /> amet sintvelit officia consequat duis enim velit mollit.
          </a>

          <InputField
            placeholder="Phone Number"
            heading="Phone"
            style="mt-8"
            icon={<MdOutlineLocalPhone className="color-purpul text-xl" />}
          />
          <a className="text-xs w-full mt-2 text-gray-500">
            We will send you a message to set or reset new password
          </a>
          <Button
            onClick={() => onClick("phone")}
            value="Continue"
            style="w-full  font-primary backgroud-secondary mt-10"
          />
        </div>
      )}
    </>
  );
}
