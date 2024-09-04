import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/app/components/atoms";
import { AuthTemplate } from "@/app/components/layouts";
import { useSearchParams } from "next/navigation";
import * as action from "../../redux/reducer";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

function Verify() {
  const dispatch = useDispatch();
  const router = useRouter();

  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const message = useSelector((state) => state.message);
  const localMessage = useSelector((state) => state.localMessage);
  const error = useSelector((state) => state.error);
  const [secondsLeft, setSecondsLeft] = useState(60);

  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [inputs, setInputs] = useState(["", "", "", ""]);

  const handleInput = (index, e) => {
    const value = e.target.value;
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);

    const maxLength = parseInt(e.target.getAttribute("maxlength"), 10);
    const currentLength = value.length;

    if (e.nativeEvent.inputType === "deleteContentBackward") {
      // Handle backspace press
      if (currentLength === 0 && index > 0) {
        // If current input is empty and not the first input, move focus to the previous input
        inputRefs[index - 1].current.focus();
      }
    } else {
      // Handle regular input
      if (currentLength >= maxLength) {
        // If input is filled
        if (index < inputRefs.length - 1) {
          // If not the last input, move focus to the next input
          inputRefs[index + 1].current.focus();
        }
      }
    }
  };
  useEffect(() => {
    inputRefs[0].current.focus();
  }, []);
  function Verify() {
    if (inputs.every((input) => input.trim() !== "")) {
      const all = inputs.join("");

      dispatch({
        type: "VERIFY_SIGNIN_EMAIL_OTP",
        payload: {
          email: email,
          otp: parseInt(all),
        },
      });
    }
  }

  useEffect(() => {
    if (
      message === "Login Successfull" &&
      localMessage === "Login_Success" &&
      error === false
    ) {
      console.log("messagemessage", message, localMessage, error);
      router.push("/dashboard");
    }
  }, [message, localMessage, error]);

  useEffect(() => {
    if (!secondsLeft) return;
    const intervalId = setInterval(() => {
      setSecondsLeft(secondsLeft - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [secondsLeft]);
  function ResendCode() {
    // setSecondsLeft(60);
    // const data = {
    //   callingCode: "+" + Code,
    //   phoneNumber: phone,
    // };
    // console.log("helo", data);
    // dispatch({
    //   type: "SIGN_UP_WITH_PHONE",
    //   payload: data,
    // });
  }
  return (
    <AuthTemplate>
      <div className="md:my-8 my-44 items-center flex flex-col md:w-4/6	">
        <a className="text-4xl  font-bold">Verify</a>
        <a className="text-sm mt-6 text-gray-500 justify-center text-center ">
          Please enter the verification code <br /> sent to your Email
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

            {secondsLeft > 0 ? (
              <div className="  text-sm  opacity-70">
                {"  Expired after"}
                <a className="text-blue-600 px-1">
                  {secondsLeft < 60 ? `00:${secondsLeft}` : secondsLeft}
                </a>
              </div>
            ) : (
              <a
                className="text-blue-600 hover:underline cursor-pointer"
                onClick={() => ResendCode()}
              >
                {"Resend"}
              </a>
            )}
          </div>
        </div>

        <Button
          onClick={() => Verify()}
          value="Confirm"
          style="w-full  font-primary backgroud-secondary mt-10"
        />
      </div>
    </AuthTemplate>
  );
}
export default Verify;
