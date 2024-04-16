import React, { useState } from "react";
import Image from "next/image";
import { Model } from "@/app/components/layouts";
import { Button } from "@/app/components/atoms";

import Trend from "@/assets/svgs/trend1.svg";
import Hamd from "@/assets/svgs/hamd.svg";
import Logo from "@/assets/svgs/logo2.svg";
import Check from "@/assets/svgs/check.svg";
import { useRouter } from "next/router";
function PickCard({ CreateEvent }) {
  const [model1, setModel1] = useState(false);
  const [model2, setModel2] = useState(false);
  const router = useRouter();
  return (
    <>
      <a className="text-3xl  font-bold">Pick Card</a>
      <div className="my-14 md:px-4 px-2 w-full">
        <div className="relative mt-4">
          <div className="flex flex-wrap">
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => {
              return (
                <div className="w-full items-center flex flex-row  justify-center md:w-1/2 lg:w-1/3 xl:w-1/5 p-2">
                  <div className=" flex flex-row items-center justify-center">
                    <Image
                      src={Trend}
                      alt={`Trend bg-green-400 `}
                      onClick={() => setModel1(!model1)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Model isOpen={model1} onclose={() => setModel1(false)}>
        <div className=" w-full flex flex-row justify-between">
          <div className="w-1/2 px-10">
            <Image src={Hamd} className="w-min " />
            <div>
              <Button
                onClick={() => (
                  setModel1(false), setModel2(false), CreateEvent()
                )}
                value="Confirm"
                style="w-full  font-primary backgroud-secondary mt-5"
              />
            </div>
          </div>
          <div className=" w-1/2 items-center justify-center flex">
            <Image src={Logo} className="max-h-64" />
          </div>
        </div>
      </Model>
      <Model isOpen={model2} onclose={() => setModel2(false)}>
        <div className=" w-full flex flex-row justify-between">
          <div className="w-1/2 px-10 flex flex-col items-center ">
            <Image src={Check} className="w-min " />
            <a className="text-white text-lg mt-5">All Done</a>
            <a className="text-xs text-white opacity-80">
              Try to login for next step.
            </a>

            <Button
              onClick={() => (
                setModel2(false),
                router.push("/dashboard/events/create-event/share")
              )}
              value="Share"
              style="w-full  font-primary backgroud-secondary mt-5"
            />
          </div>
          <div className=" w-1/2 items-center justify-center flex">
            <Image src={Logo} className="max-h-64" />
          </div>
        </div>
      </Model>
    </>
  );
}
export default PickCard;
