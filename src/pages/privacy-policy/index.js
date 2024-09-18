import { Template1 } from "@/app/components/layouts";
import {
  Feachers,
  TopTrends,
  Pricing,
  Download,
  HomeSection,
  TextSection,
  Contact,
} from "@/app/components/sections";
import { Link as ScrollLink, Element } from "react-scroll";
export default function Home() {
  return (
    <Element name="home">
      <Template1>
        <div className="py-10 md:py-20  px-4 sm:px-6 md:px-10 lg:px-14 xl:px-24 ">
          <div className="items-center justify-center flex text-3xl mb-10 text-center">
            <h1>Privacy Policy</h1>
          </div>
          <Paragraph dis='Halla (the "App" or "We") is committed to protecting the privacy and security of its users. This Privacy Policy explains how we collect, use, and disclose personal information when you use our App. By using our App, you agree to the collection, use, and disclosure of your personal information as described in this Privacy Policy.' />
          <Paragraph
            heading="Personal Information We Collect"
            dis="We collect the following types of personal information:"
          />

          <div>
            <ol className="list-decimal text-sm text-gray-700 ml-10 md:ml-20 py-2 space-y-2">
              {listItems.map((item, index) => (
                <OrderList heading={item.heading} dis={item.des} />
              ))}
            </ol>
          </div>

          <Paragraph
            heading="How We Use Your Personal Information"
            dis="We use your personal information for the following purposes:"
          />

          <div>
            <ol className="list-decimal text-sm text-gray-700 ml-10 md:ml-20 py-2 space-y-2">
              {listItems.map((item, index) => (
                <OrderList heading={item.heading} dis={item.des} />
              ))}
            </ol>
          </div>

          <Paragraph
            heading="Disclosure of Personal Information"
            dis="We may disclose your personal information to the following parties:"
          />

          <div>
            <ol className="list-decimal text-sm text-gray-700 ml-10 md:ml-20 py-2 space-y-2">
              {listItems3.map((item, index) => (
                <OrderList heading={item.heading} dis={item.des} />
              ))}
            </ol>
          </div>
          <Paragraph
            heading="Security of Personal Information"
            dis="We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. We use encryption and other security measures to protect your personal information."
          />
          <Paragraph
            heading="Your Rights"
            dis="You have the following rights with respect to your personal information:"
          />

          <div>
            <ol className="list-decimal text-sm text-gray-700 ml-10 md:ml-20 py-2 space-y-2">
              {listItems4.map((item, index) => (
                <OrderList heading={item.heading} dis={item.des} />
              ))}
            </ol>
          </div>

          <Paragraph
            heading="Changes to This Privacy Policy"
            dis="We may update this Privacy Policy from time to time. If we make changes to this Privacy Policy, we will notify you by posting the updated policy on our App."
          />
          <Paragraph
            heading="Compliance with Saudi Laws and Regulations"
            dis="We comply with all applicable laws and regulations in Saudi Arabia, including the Personal Data Protection Law (PDPL) and the Anti-Cybercrime Law. We are committed to protecting the privacy and security of our users' personal information."
          />

          <Paragraph
            heading="Contact Us"
            dis="If you have any questions or concerns regarding this Privacy Policy, please don’t hesitate to contact us at info@halla.sa"
          />
        </div>
      </Template1>
    </Element>
  );
}

function Paragraph({ heading, dis }) {
  return (
    <div className="mt-2">
      <div className="text-md font-semibold">{heading}</div>
      <p className="text-sm text-gray-700 mt-1 leading-7">{dis}</p>
    </div>
  );
}

function OrderList({ heading, dis }) {
  return (
    <li className="text-sm text-gray-700 mt-1 leading-7 ">
      <span className="font-semibold text-md text-gray-900">{heading}</span>
      {" " + dis}
    </li>
  );
}

// Define the list items
const listItems4 = [
  {
    heading: "Access:",
    des: "You have the right to access your personal information and to request a copy of your personal information.",
  },
  {
    heading: "Correction:",
    des: "You have the right to correct your personal information if it is inaccurate or incomplete.",
  },
  {
    heading: "Deletion:",
    des: "You have the right to request the deletion of your personal information.",
  },
  {
    heading: "Objection:",
    des: "You have the right to object to the processing of your personal information.",
  },
];
const listItems3 = [
  {
    heading: "Service Providers:",
    des: "We may disclose your personal information to our service providers, who help us to operate and improve our App.",
  },
  {
    heading: "Law Enforcement:",
    des: "We may disclose your personal information to law enforcement agencies in Saudi Arabia, if required by law or in response to a valid legal request.",
  },
  {
    heading: "Business Transfers:  ",
    des: "We may disclose your personal information in connection with a merger, acquisition, or sale of our business.",
  },
];
const listItems = [
  {
    heading: "Registration Information:",
    des: "When you create an account, we collect your name, email address, and password.",
  },
  {
    heading: "Invitation Information:",
    des: "When you create and send an online invitation, we collect the recipient's name and email address.",
  },
  {
    heading: "Device Information: ",
    des: "We collect information about the device you use to access our App, including the device type, operating system, and IP address.",
  },
  {
    heading: "Usage Information:",
    des: "We collect information about how you use our App, including the pages you visit, the features you use, and the frequency of your visits.",
  },
];
const listItems2 = [
  {
    heading: "Providing the App: ",
    des: "We use your personal information to provide you with access to our App and to enable you to create and send online invitations.",
  },
  {
    heading: "Improving the App:",
    des: "We use your personal information to improve the performance and functionality of our App.",
  },
  {
    heading: "Communicating with You:",
    des: "We use your personal information to communicate with you about our App, including sending you notifications and updates.",
  },
  {
    heading: "Compliance with Laws and Regulations:",
    des: "We use your personal information to comply with applicable laws and regulations in Saudi Arabia.",
  },
];
