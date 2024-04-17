import React, { useState, useRef } from "react";
import { Button, InputField } from "@/app/components/atoms";
import { AuthTemplate } from "@/app/components/layouts";
import { useRouter } from "next/router";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import AllDoneImage from "@/assets/svgs/allDone.svg";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { ForgetPasswordPhoneOtp, ResetPhonePassword } from "@/redux/services";
import { IoCaretBackCircleOutline } from "react-icons/io5";

function Login() {
  const router = useRouter();
  const [state, setState] = useState(1);
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [otp, setOtp] = useState("");

  function SendOtpToPhone_forgetPassword() {
    console.log("phone", phone, code);
    if (code !== "" && phone !== "") {
      ForgetPasswordPhoneOtp({
        callingCode: "+" + code,
        phoneNumber: phone,
      })
        .then((response) => {
          if (response?.id) {
            setState(2);
          } else {
            alert("Invalid Mobile Number");
          }
        })
        .catch((error) => {
          console.log("Error", error);
        });
    }
  }
  function ResetNewPassword(password) {
    console.log("reset pASSWORD", phone, password, otp);
    var object = {
      password1: password,
      password2: password,
      callingCode: "+" + code,
      phoneNumber: phone,
      otp: otp,
    };

    ResetPhonePassword(object)
      .then((response) => {
        console.log("response", response?.id);
        if (response?.id) {
          setState(4);
        } else {
          alert(response[0]);
        }
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }
  return (
    <AuthTemplate>
      {state === 1 ? (
        <ForgetEmailOrPhone
          onClick={() => SendOtpToPhone_forgetPassword()}
          setPhone={(e) => setPhone(e)}
          setCode={(e) => setCode(e)}
          phone={phone}
        />
      ) : state === 2 ? (
        <div className="w-full  flex justify-center">
          <IoCaretBackCircleOutline
            className="text-3xl cursor-pointer"
            onClick={() => setState(state - 1)}
          />
          <Otp onClick={(otp) => (setOtp(otp), setState(3))} />
        </div>
      ) : state === 3 ? (
        <div className="w-full  flex justify-center">
          <IoCaretBackCircleOutline
            className="text-3xl cursor-pointer"
            onClick={() => setState(state - 1)}
          />
          <ResetPassword
            onClick={() => setState(4)}
            ResetNewPassword={(e) => ResetNewPassword(e)}
          />
        </div>
      ) : (
        <AllDone />
      )}
    </AuthTemplate>
  );
}
export default Login;

function AllDone() {
  const router = useRouter();
  return (
    <div className="md:my-8 my-44 items-center flex flex-col md:w-4/6	">
      <Image src={AllDoneImage} />
      <a className="text-4xl  font-bold my-10">Password Changed!</a>

      <Button
        onClick={() => router.push("/login")}
        value="Continue"
        style="w-full  font-primary backgroud-secondary mt-14"
      />
    </div>
  );
}
function ResetPassword({ ResetNewPassword }) {
  const [eye, setEye] = useState(false);

  const [eye2, setEye2] = useState(false);
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const VerifyPassword = () => {
    console.log("VerifyPassword", password1, password2);
    if (password1 != password2) {
      alert("Both Passwords Not Matching");
    } else if (password1 === password2) {
      ResetNewPassword(password1);
    }
  };
  return (
    <div className="md:my-8 my-44 items-center flex flex-col md:w-4/6	">
      <a className="text-4xl  font-bold">Reset Password</a>
      <a className="text-sm mt-6 text-gray-500 justify-center text-center ">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do <br />{" "}
        amet sintvelit officia consequat duis enim velit mollit.
      </a>

      <InputField
        value={password1}
        onChange={(e) => setPassword1(e)}
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
        value={password2}
        onChange={(e) => setPassword2(e)}
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
        onClick={() => VerifyPassword()}
        value="Continue"
        style="w-full  font-primary backgroud-secondary mt-14"
      />
    </div>
  );
}
function Otp({ onClick }) {
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
  function SendVerification() {
    if (inputs.every((input) => input.trim() !== "")) {
      var temp = inputs.join("");
      onClick(parseInt(temp));
    } else {
      alert("Invalid Otp");
    }
  }
  return (
    <div className="md:my-8 my-44 items-center flex flex-col md:w-4/6 	">
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
        onClick={() => SendVerification()}
        value="Send verification"
        style="w-full  font-primary backgroud-secondary mt-10"
      />
    </div>
  );
}

function ForgetEmailOrPhone({ onClick, setPhone, setCode, phone }) {
  function onCodeChange(number, code) {
    console.log("code", code, number);
    setPhone(number);
    setCode(code?.dialCode);
  }
  return (
    <>
      <div className="md:my-8 my-44 items-center flex flex-col md:w-4/6	">
        <a className="text-4xl  font-bold">Forgot password?</a>
        <a className="text-sm mt-6 text-gray-500 justify-center text-center ">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do <br />
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
          placeholder="Phone Number"
          heading="Phone"
          style="mt-8"
          icon={<MdOutlineLocalPhone className="color-purpul text-xl" />}
        /> */}
        <a className="text-xs w-full mt-2 text-gray-500">
          We will send you a message to set or reset new password
        </a>
        <Button
          onClick={() => onClick("phone")}
          value="Continue"
          style="w-full  font-primary backgroud-secondary mt-10"
        />
      </div>
    </>
  );
}
