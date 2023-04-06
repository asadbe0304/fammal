import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./../components/Main/index";
import Call from "./../components/Call";
import Footer from "./../components/Footer";
import Header from "./../components/Header"
const route = () => {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Call />
      <Footer />
    </>
  );
};

export default route;
