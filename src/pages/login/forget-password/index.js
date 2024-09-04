import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { Button } from "@/app/components/atoms";
import { AuthTemplate } from "@/app/components/layouts";
import { useRouter } from "next/router";
import { MdOutlineLocalPhone } from "react-icons/md";
import { SelectLogin } from "@/app/components/orgasms";

function Login() {
  const router = useRouter();
  const [active, setActive] = useState("email");

  function NavigateFunction() {
    if (active === "email") {
      router.push("/login/forget-password/email");
    } else {
      router.push("/login/forget-password/phone");
    }
  }
  return (
    <AuthTemplate>
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
          onClick={() => NavigateFunction()}
          value="Send request"
          style="w-full  font-primary backgroud-secondary mt-10"
        />
      </div>
    </AuthTemplate>
  );
}
export default Login;
