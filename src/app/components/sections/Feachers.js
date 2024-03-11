import React from "react";
import { FeachersCard } from "../atoms";
import Gear from "@/assets/svgs/gear.svg";
import Message from "@/assets/svgs/message.svg";
import Location from "@/assets/svgs/location.svg";
import Notification from "@/assets/svgs/notification.svg";
import Recycle from "@/assets/svgs/recycle.svg";

function Feachers() {
  return (
    <div className="my-14 md:px-14 px-2  w-full">
      <div className=" text-center  color-black  ">
        <a className="text-2xl font-semibold color-purpul">
          Powerful Features to Fully Customize <br /> Your Online Cards and
          Invitations
        </a>
      </div>
      <div className="flex flex-wrap mt-5">
        <FeachersCard icon={Gear} text="24/7 Service" />
        <FeachersCard icon={Message} text="Messages" />
        <FeachersCard icon={Location} text="Invite Wde Range" />
        <FeachersCard icon={Notification} text="Alerts" />
        <FeachersCard icon={Recycle} text="Design Cards" />
      </div>
    </div>
  );
}
export default Feachers;
