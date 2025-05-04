import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";

function App() {
  return (
      <>
        <Navbar />
        <HeroSection/>
        <Features/>
        <HowItWorks/>
        <Pricing/>
        <Contact/>
      </>
      );
}

export default App
