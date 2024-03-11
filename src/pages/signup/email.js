import React, { useState } from "react";
import Google from "@/assets/svgs/google.svg";
import Twitter from "@/assets/svgs/twitter.svg";
import { AiOutlineMail } from "react-icons/ai";
import { FaRegEyeSlash } from "react-icons/fa";
import { Button, InputField } from "@/app/components/atoms";
import { AuthTemplate } from "@/app/components/layouts";
import { useRouter } from "next/router";
import { IoEyeOutline } from "react-icons/io5";

function Signup() {
  const router = useRouter();
  const [eye, setEye] = useState(false);
  return (
    <AuthTemplate>
      <div className="md:my-8 my-44 items-center flex flex-col md:w-4/6	">
        <a className="text-4xl  font-bold">Email</a>
        <a className="text-sm mt-6 text-gray-500 justify-center text-center ">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do <br />{" "}
          amet sintvelit officia consequat duis enim velit mollit.
        </a>
        <InputField
          placeholder="Email address"
          heading="Email"
          style="mt-8"
          icon={<AiOutlineMail className="text-gray-400 text-xl" />}
        />
        <InputField
          placeholder="Password"
          heading="Password"
          style="mt-3"
          type={eye ? "text" : "password"}
          icon={
            eye ? (
              <IoEyeOutline
                className="text-gray-400 text-xl cursor-pointer"
                onClick={() => setEye(!eye)}
              />
            ) : (
              <FaRegEyeSlash
                className="text-gray-400 text-xl cursor-pointer"
                onClick={() => setEye(!eye)}
              />
            )
          }
        />
        <Button
          onClick={() => router.push("/signup/verify")}
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
          <Button
            icon={Twitter}
            variation="outline"
            value="Connect With Google "
            style="w-full    mt-4"
          />
        </div>
        <a className="text-sm text-gray-500 mt-5">
          New here?{" "}
          <span className="font-semibold cursor-pointer hover:underline duration-200">
            Create an account
          </span>
        </a>
      </div>
    </AuthTemplate>
  );
}
export default Signup;
