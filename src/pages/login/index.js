import React, { useState, useEffect } from "react";
import Google from "@/assets/svgs/google.svg";
import { AiOutlineMail } from "react-icons/ai";
import { FaRegEyeSlash } from "react-icons/fa";
import { Button, InputField } from "@/app/components/atoms";
import { AuthTemplate } from "@/app/components/layouts";
import { useRouter } from "next/router";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../redux/reducer";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

function Login() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.message);
  const localMessage = useSelector((state) => state.localMessage);
  const error = useSelector((state) => state.error);

  const router = useRouter();
  const [eye, setEye] = useState(false);
  const [active, setActive] = useState("email");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  function SignIn() {
    if (active === "email") {
      if (email != "" && password != "") {
        dispatch({
          type: "LOGIN_WITH_EMAIL",
          payload: {
            emailOrUsername: email,
            password: password,
          },
        });
      } else {
        dispatch(
          action.Message({
            open: true,
            error: true,
            message: "All Fields Required!",
          })
        );
      }
    } else {
      if (phone != "") {
        dispatch({
          type: "LOGIN_WITH_PHONE",
          payload: {
            callingCode: "+" + code,
            phoneNumber: phone,
          },
        });
      } else {
        dispatch(
          action.Message({
            open: true,
            error: true,
            message: "All Fields Required!",
          })
        );
      }
    }
  }
  useEffect(() => {
    if (
      message === "Login Successfull" &&
      localMessage === "Login_Success_EMAIL" &&
      error === false
    ) {
      console.log("messagemessage", message, localMessage, error);
      router.push("/dashboard");
    } else if (
      message === "Login Successfull" &&
      localMessage === "Login_Success_phone_otp" &&
      error === false
    ) {
      console.log("messagemessage", message, localMessage, error);
      router.push(`/login/verify-phone?code=${code}&phone=${phone}`);
    }
  }, [message, localMessage, error]);

  function onCodeChange(number, code) {
    console.log("code", code);
    setPhone(number);
    setCode(code?.dialCode);
  }

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
          <div className="mt-14">
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
        )}

        {active === "email" && (
          <InputField
            onChange={(e) => setEmail(e)}
            placeholder="Email address"
            heading="Email"
            style="mt-8"
            icon={<AiOutlineMail className="color-purpul text-xl" />}
          />
        )}
        {active === "email" && (
          <InputField
            onChange={(e) => setPassword(e)}
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
        )}

        <div className=" flex flex-row justify-end w-full py-3">
          <a
            onClick={() => router.push("/login/forget-password")}
            className="text-sm color-purpul hover:underline cursor-pointer duration-300"
          >
            Forgot Password ?
          </a>
        </div>
        <Button
          //  onClick={() => router.push("/login/forget-password")}

          onClick={() => SignIn()}
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
          <span
            className="font-semibold cursor-pointer hover:underline duration-200 mx-1"
            onClick={() => router.push("/signup")}
          >
            Create an account
          </span>
        </a>
      </div>
    </AuthTemplate>
  );
}
export default Login;
