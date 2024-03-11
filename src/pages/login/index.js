import React, { useState } from "react";
import Google from "@/assets/svgs/google.svg";
import { AiOutlineMail } from "react-icons/ai";
import { FaRegEyeSlash } from "react-icons/fa";
import { Button, InputField } from "@/app/components/atoms";
import { AuthTemplate } from "@/app/components/layouts";
import { useRouter } from "next/router";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";

function Login() {
  const router = useRouter();
  const [eye, setEye] = useState(false);
  const [active, setActive] = useState("email");
  return (
    <AuthTemplate>
      <div className="md:my-8 my-44 items-center flex flex-col md:w-4/6	">
        <a className="text-4xl  font-bold">Login Account </a>
        <a className="text-sm mt-6 text-gray-500 justify-center text-center ">
          Hello , welcome back to our account !<br />
        </a>
        <div className="flex flex-row mt-10">
          <div
            onClick={() => setActive("email")}
            className={`cursor-pointer hover:shadow-xl border-primary border rounded-tl-xl   w-44 py-3 flex flex-row items-center justify-center space-x-2  text-sm ${
              active === "email"
                ? "backgroud-primary  text-white "
                : "color-purpul bg-white"
            }`}
          >
            <AiOutlineMail className=" text-sm " />
            <a>Email </a>
          </div>
          <div
            onClick={() => setActive("phone")}
            className={`cursor-pointer hover:shadow-xl border-primary border rounded-br-xl   w-44 py-3 flex flex-row items-center justify-center space-x-2  text-sm ${
              active === "phone"
                ? "backgroud-primary  text-white "
                : "color-purpul bg-white"
            }`}
          >
            <MdOutlineLocalPhone className=" text-sm " />
            <a>Phone Number </a>
          </div>
        </div>
        {active === "phone" && (
          <InputField
            placeholder="Phone Number"
            heading="Phone"
            style="mt-8"
            icon={<MdOutlineLocalPhone className="color-purpul text-xl" />}
          />
        )}

        {active === "email" && (
          <InputField
            placeholder="Email address"
            heading="Email"
            style="mt-8"
            icon={<AiOutlineMail className="color-purpul text-xl" />}
          />
        )}

        <InputField
          placeholder="Password"
          heading="Password"
          style="mt-3"
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
        <div className=" flex flex-row justify-end w-full py-3">
          <a
            onClick={() => router.push("/login/forget-password")}
            className="text-sm color-purpul hover:underline cursor-pointer duration-300"
          >
            Forgot Password ?
          </a>
        </div>
        <Button
          //   onClick={() => router.push("/login/forget-password")}
          value="Sign in"
          style="w-full  font-primary backgroud-secondary mt-10"
        />
        <div className="flex flex-row justify-between w-full items-center mt-6">
          <div className="w-1/3 h-0.5 bg-gray-200"></div>
          <a className="text-sm text-gray-500">Or sign in with</a>
          <div className="w-1/3 h-0.5 bg-gray-200"></div>
        </div>
        <div className="w-full">
          <Button
            icon={Google}
            variation="outline"
            value="Connect With Google "
            style="w-full    mt-10"
          />
        </div>
        <a className="text-sm text-gray-500 mt-5">
          Not register yet ?
          <span className="font-semibold cursor-pointer hover:underline duration-200 mx-1">
            Create an account
          </span>
        </a>
      </div>
    </AuthTemplate>
  );
}
export default Login;
