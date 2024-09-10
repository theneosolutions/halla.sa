import React from "react";
import Header from "./header";
import Footer from "./footer";
function Template1({ children }) {
  return (
    <div className="w-full">
      <Header />
      <div className="pt-20 sm:pt-0 ">{children}</div>

      <Footer />
    </div>
  );
}
export default Template1;
