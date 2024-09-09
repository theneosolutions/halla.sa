import React from "react";
import { FeachersCard } from "../atoms";

import Location from "@/assets/svgs/c1_location.png";
import Tracking from "@/assets/svgs/c2_tracking.png";
import Invite from "@/assets/svgs/c3_invite.png";
import Guest from "@/assets/svgs/c4_guest.png";
import Message from "@/assets/svgs/c5_message.png";
import Qr from "@/assets/svgs/c6_qr.png";
import { Link as ScrollLink, Element } from "react-scroll";
function Feachers() {
  return (
    <Element name="feachers">
      <div className="my-14 md:px-14 px-2  w-full">
        <div className=" text-center  color-black  ">
          <a className="text-2xl font-semibold color-purpul">
            Powerful Features to Fully Customize <br /> Your Online Cards and
            Invitations
          </a>
        </div>
        <div className="flex flex-wrap mt-5">
          <FeachersCard icon={Location} text="Address Validation" />
          <FeachersCard icon={Tracking} text="RSVP Tracking" />
          <FeachersCard icon={Invite} text="Invite Reminders" />
          <FeachersCard icon={Guest} text="Guest Listing" />
          <FeachersCard icon={Message} text="Proper Messaging" />
          <FeachersCard icon={Qr} text="Scan Codes" />
        </div>
      </div>
    </Element>
  );
}
export default Feachers;
