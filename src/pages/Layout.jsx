import React, { Children } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Layout = ({ Children }) => {
  return (
    <div>
      <Header />

      {Children}

      <Footer />
    </div>
  );
};
export default Layout;
