import { IoPersonSharp } from "react-icons/io5";
import { PiMoneyDuotone } from "react-icons/pi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { MdOutlineEmojiEvents } from "react-icons/md";
import { SiLetsencrypt } from "react-icons/si";
import { MdPayment } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { BsCurrencyExchange } from "react-icons/bs";
import { LiaAmericanSignLanguageInterpretingSolid } from "react-icons/lia";
import { IoLinkOutline } from "react-icons/io5";
import { LiaSignOutAltSolid } from "react-icons/lia";

const HomeData = [
  {
    route: "/dashboard/profile",
    name: "Profile",
    icon: <IoPersonSharp />,
  },
  {
    route: "/dashboard/earning",
    name: "Earning",
    icon: <PiMoneyDuotone />,
  },
  {
    route: "/dashboard/favourite",
    name: "Favourite",
    icon: <MdOutlineFavoriteBorder />,
  },
  {
    route: "/dashboard/events",
    name: "Events",
    icon: <MdOutlineEmojiEvents />,
  },
  {
    route: "/dashboard/change-password",
    name: "Change Password",
    icon: <SiLetsencrypt />,
  },
  {
    route: "/dashboard/payment",
    name: "Payment",
    icon: <MdPayment />,
  },
  {
    route: "/dashboard/text-messages",
    name: "Text Messages",
    icon: <FiMessageSquare />,
  },
  {
    route: "/dashboard/currency",
    name: "Currency",
    icon: <BsCurrencyExchange />,
  },
  {
    route: "/dashboard/language",
    name: "Language",
    icon: <LiaAmericanSignLanguageInterpretingSolid />,
  },
  {
    route: "/dashboard/linked-accounts",
    name: "Linked Accounts",
    icon: <IoLinkOutline />,
  },
  {
    route: "/login",
    name: "Sign Out",
    icon: <LiaSignOutAltSolid />,
  },
];

export default HomeData;
