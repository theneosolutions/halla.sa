import React, { useEffect, useState } from "react";
import Google from "@/assets/svgs/google.svg";
import Twitter from "@/assets/svgs/twitter.svg";
import { AiOutlineMail } from "react-icons/ai";
import { FaRegEyeSlash } from "react-icons/fa";
import { Button, InputField } from "@/app/components/atoms";
import { AuthTemplate } from "@/app/components/layouts";
import { IoEyeOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../redux/reducer";
import { useRouter } from "next/router";
function Signup() {
  const router = useRouter();
  const dispatch = useDispatch();
  const message = useSelector((state) => state.message);
  const localMessage = useSelector((state) => state.localMessage);
  const error = useSelector((state) => state.error);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [eye, setEye] = useState(false);

  function SignUp() {
    if (
      email === "" ||
      password === "" ||
      firstName === "" ||
      lastName === ""
    ) {
      dispatch(
        action.Message({
          open: true,
          error: true,
          message: "All Fields Required!",
        })
      );
    } else {
      const data = {
        password1: password,
        password2: password,
        firstName: firstName,
        lastName: lastName,
        email: email,
      };
      dispatch({
        type: "SIGN_UP_WITH_EMAIL",
        payload: data,
      });
    }
  }
  useEffect(() => {
    if (
      message === "Sign Up Successfull" &&
      localMessage === "SignUp_Success" &&
      error === false
    ) {
      console.log("messagemessage", message, localMessage, error);
      router.push(`/signup/verify-email?email=${email}`);
    }
  }, [message, localMessage, error]);
  return (
    <AuthTemplate>
      <div className="md:my-8 my-44 items-center flex flex-col md:w-4/6	">
        <a className="text-4xl  font-bold">Email</a>
        {/* <a className="text-sm mt-6 text-gray-500 justify-center text-center ">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do <br />{" "}
          amet sintvelit officia consequat duis enim velit mollit.
        </a> */}
        <InputField
          onChange={(e) => setFirstName(e)}
          placeholder="First Name"
          heading="First Name"
          style="mt-8"
          icon={<AiOutlineMail className="text-gray-400 text-xl" />}
        />
        <InputField
          onChange={(e) => setLastName(e)}
          placeholder="Last Name"
          heading="Last Name"
          style="mt-4"
          icon={<AiOutlineMail className="text-gray-400 text-xl" />}
        />
        <InputField
          onChange={(e) => setEmail(e)}
          placeholder="Email address"
          heading="Email"
          style="mt-4"
          icon={<AiOutlineMail className="text-gray-400 text-xl" />}
        />
        <InputField
          onChange={(e) => setPassword(e)}
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
          onClick={() => SignUp()}
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
        <a className="text-sm text-gray-500 mt-5 px-1">
          Already Have Account ?
          <span
            className="font-semibold cursor-pointer hover:underline duration-200 px-1"
            onClick={() => router.push("/login")}
          >
            Sign In !
          </span>
        </a>
      </div>
    </AuthTemplate>
  );
}
export default Signup;
