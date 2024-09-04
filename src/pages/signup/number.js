import React, { useState, useEffect } from "react";
import Google from "@/assets/svgs/google.svg";
import Twitter from "@/assets/svgs/twitter.svg";
import { FaRegEyeSlash } from "react-icons/fa";
import { Button, InputField } from "@/app/components/atoms";
import { AuthTemplate } from "@/app/components/layouts";
import { useRouter } from "next/router";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlinePhoneIphone } from "react-icons/md";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import * as action from "../../redux/reducer";
import { useDispatch, useSelector } from "react-redux";

function Signup() {
  const dispatch = useDispatch();

  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const message = useSelector((state) => state.message);
  const localMessage = useSelector((state) => state.localMessage);
  const error = useSelector((state) => state.error);
  function onCodeChange(number, code) {
    console.log("code", code);
    setPhone(number);
    setCode(code?.dialCode);
  }

  function SignUp() {
    if (code === "" || phone === "") {
      dispatch(
        action.Message({
          open: true,
          error: true,
          message: "All Fields Required!",
        })
      );
    } else {
      const data = {
        callingCode: "+" + code,
        phoneNumber: phone,
      };
      console.log("helo", data);
      dispatch({
        type: "SIGN_UP_WITH_PHONE",
        payload: data,
      });
    }
  }

  useEffect(() => {
    if (
      message === "OTP RECIEVED" &&
      localMessage === "Otp_Recieved" &&
      error === false
    ) {
      router.push(`/signup/verify?code=${code}&phone=${phone}`);
    }
  }, [message, localMessage, error]);

  return (
    <AuthTemplate>
      <div className="md:my-8 my-44 items-center flex flex-col md:w-4/6	">
        <a className="text-4xl  font-bold">Number</a>
        <a className="text-sm mt-6 text-gray-500 justify-center text-center ">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do <br />{" "}
          amet sintvelit officia consequat duis enim velit mollit.
        </a>
        <div className="mt-6">
          <PhoneInput
            className="full-width-phone-input"
            enableSearch={true}
            value={phone}
            country={"sa"}
            onlyCountries={["pk", "sa"]}
            onChange={(number, code) => onCodeChange(number, code)}
            inputProps={{
              name: "phone",
              required: true,
              autoFocus: true,
            }}
          />
        </div>
        {/* <InputField
          placeholder="Add Number"
          heading="Phone Number"
          style="mt-8"
          icon={<MdOutlinePhoneIphone className="text-gray-400 text-xl" />}
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
        /> */}
        <Button
          onClick={() => SignUp()}
          // onClick={() => router.push("/signup/verify")}
          value="Sign Up "
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
