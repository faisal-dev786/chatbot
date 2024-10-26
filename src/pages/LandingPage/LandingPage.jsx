import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Landing from "../../components/LandingPage/Landing";
import LandingNav from "../../components/LandingPage/LandingNav";
const LandingPage = () => {
  return (
    <>
      <LandingNav/>
 <Landing/>
      <Footer />
    </>
  );
};

export default LandingPage;
