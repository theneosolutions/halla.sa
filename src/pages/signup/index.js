import React from "react";
import Image from "next/image";
import hallaLogo from "@/assets/svgs/hallaLogo.svg";
import { Button } from "@/app/components/atoms";
import { AuthTemplate } from "@/app/components/layouts";
import { useRouter } from "next/router";
function Signup() {
  const router = useRouter();
  return (
    <AuthTemplate>
      <div className="md:my-8 my-44 items-center flex flex-col w-full">
        <Image src={hallaLogo} className="px-2" />
        <div className="space-y-6 mt-10 w-full items-center flex flex-col">
          <Button
            onClick={() => router.push("/signup/number")}
            value="Sign Up with Phone"
            style="w-full md:w-96  font-primary backgroud-secondary "
          />
          <Button
            onClick={() => router.push("/signup/email")}
            value="Sign Up Wit Gmail"
            style="w-full md:w-96 font-primary backgroud-secondary "
          />
          <Button
            value="Sign Up with AppleEE"
            style="w-full md:w-96 font-primary backgroud-secondary "
          />
        </div>
      </div>
    </AuthTemplate>
  );
}
export default Signup;
