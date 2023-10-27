import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Home1/Navbar/Navbar";
import Footer from "../Home1/Footer/Footer";
import Service from "../Home1/Services/ServiceMainPage/Service";
import Consulting from "../Home1/Consulting/Consulting";
import MarketArea from "../Home1/MarketArea/MarketArea";
import NewsArea from "../Home1/NewsArea/NewsArea";
import Testimonials from "../Home1/Testimonials/Testimonials";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Service />
      <Consulting />
      <MarketArea/>
      <NewsArea/>
      <Testimonials/>
      <Footer />
    </>
  );
};

export default RootLayout;
