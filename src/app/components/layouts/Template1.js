import React from "react";
import Header from "./header";
import Footer from "./footer";
function Template1({ children }) {
  return (
    <div className="w-full">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
export default Template1;
