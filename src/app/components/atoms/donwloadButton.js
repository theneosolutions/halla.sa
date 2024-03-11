import React from "react";

function Download({ icon, text }) {
  return (
    <div className=" md:w-max mt-2 ">
      <div className=" backgroud-primary justify-between rounded-xl py-2 px-4 space-x-5 items-center md:justify-center flex flex-row">
        <div className="flex flex-col color-secondary">
          <a className="text-sm">Get It On</a>
          <a>{text}</a>
        </div>
        <div>{icon}</div>
      </div>
    </div>
  );
}
export default Download;
