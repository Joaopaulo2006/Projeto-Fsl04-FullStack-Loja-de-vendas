import React, { children } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />

      {children}

      <Footer />
    </div>
  );
};
export default Layout;
