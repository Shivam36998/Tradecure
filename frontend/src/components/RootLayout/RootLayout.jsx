import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Home1/Navbar/Navbar";
import Footer from "../Home1/Footer/Footer";
import Service from "../Home1/Services/ServiceMainPage/Service";
import Consulting from "../Home1/Consulting/Consulting";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Service />
      <Consulting />
      <Footer />
    </>
  );
};

export default RootLayout;
