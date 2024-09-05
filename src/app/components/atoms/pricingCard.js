import React from "react";
import Button from "./button";

function PricingCard({ data }) {
  return (
    <div className="w-full md:w-1/3  p-3 justify-center flex ">
      <div className=" backgroud-3rd   flex flex-col rounded-md w-full md:w-9/12	justify-between">
        <div className=" py-7">
          <ul className="list-disc ml-4 color-purpul text-sm  px-4 space-y-3">
            {data?.map((v, k) => {
              return <li key={k}>{v}</li>;
            })}
          </ul>
        </div>
        <Button
          value="Basic Package"
          style="w-full	 backgroud-primary font-4rth"
        />
      </div>
    </div>
  );
}
export default PricingCard;
