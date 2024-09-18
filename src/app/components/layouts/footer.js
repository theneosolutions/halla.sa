import React from "react";
import { useRouter } from "next/router";
function Footer() {
  const router = useRouter();
  return (
    <div className="backgroud-primary px-5  md:px-10 lg:px-14 xl:px-24 py-14 color-secondary ">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <h1 className="font-4rth">Subscribe to Our Newsletter!</h1>
          <div className="flex flex-row items-center mt-2">
            <input
              placeholder="Your email address"
              className="py-2 px-3 rounded-l-md w-9/12	"
            />
            <a className="font-4rth px-3"> Subscribe</a>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-between mt-10 md:mt-0">
          <div className="flex flex-col space-y-4 ">
            <a className="font-4rth px-3"> Quick Links</a>
            <a
              onClick={() => router.push("/termsandconditions")}
              className="font-5th px-3 cursor-pointer hover:underline w-max"
            >
              Terms & Conditions
            </a>
            <a
              onClick={() => router.push("/privacy")}
              className="font-5th px-3 cursor-pointer hover:underline w-max"
            >
              Privacy
            </a>
            {/* <a className="font-5th px-3 cursor-pointer hover:underline w-max">
              Home
            </a>
            <a className="font-5th px-3 cursor-pointer hover:underline w-max">
              Features
            </a>
            <a className="font-5th px-3 cursor-pointer hover:underline w-max">
              Pricing
            </a>
            <a className="font-5th px-3 cursor-pointer hover:underline w-max">
              Contact Us
            </a> */}
          </div>
          <div className="flex flex-col space-y-4 md:mt-0 mt-10">
            <a className="font-4rth px-3"> Support</a>

            <a className="font-5th px-3 cursor-pointer hover:underline w-max">
              FAQ
            </a>
            <a className="font-5th px-3 cursor-pointer hover:underline w-max">
              Call Center
            </a>
          </div>
          <div className="flex flex-col space-y-4 md:mt-0 mt-10">
            <a className="font-4rth px-3"> Follows Us</a>
            <a
              className="font-5th px-3 cursor-pointer hover:underline w-max"
              onClick={() =>
                window.open(
                  "https://www.facebook.com/hallainvitesofficial/",
                  "_blank",
                  "noreferrer"
                )
              }
            >
              Facebook
            </a>
            <a
              className="font-5th px-3 cursor-pointer hover:underline w-max"
              onClick={() =>
                window.open(
                  "https://twitter.com/hallainvites",
                  "_blank",
                  "noreferrer"
                )
              }
            >
              Twitter
            </a>
            <a
              className="font-5th px-3 cursor-pointer hover:underline w-max"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/hallainvitesofficial",
                  "_blank",
                  "noreferrer"
                )
              }
            >
              Instagram
            </a>
            <a
              className="font-5th px-3 cursor-pointer hover:underline w-max"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/company/hallainvitesofficial/",
                  "_blank",
                  "noreferrer"
                )
              }
            >
              Linedin
            </a>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h1 className="font-5th mt-20">HALLA 2024. All rights reserved.</h1>
      </div>
    </div>
  );
}
export default Footer;
