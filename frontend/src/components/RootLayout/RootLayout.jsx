import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Service from "../Services/ServiceMainPage/Service";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Service />
      <Footer />
    </>
  );
};

export default RootLayout;
