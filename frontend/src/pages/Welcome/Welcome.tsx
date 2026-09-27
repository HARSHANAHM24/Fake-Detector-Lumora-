import { useState } from "react";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import Hero from "./sections/Hero";
import Features from "../../components/sections/Features";
import HowItWorks from "../../components/sections/HowItWorks";
import WhyLumora from "../../components/sections/WhyLumora";
import FAQ from "../../components/sections/FAQ";

import Analyze from "../Analyze/Analyze";

import "./Welcome.css";

function Welcome() {
  const [showInvestigation, setShowInvestigation] = useState(false);

  const handleStartInvestigation = () => {
    setShowInvestigation(true);

    setTimeout(() => {
      document
        .getElementById("investigation-area")
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }, 100);
  };

  return (
    <main className="welcome-page">

      <Navbar />

      <Hero
        onStartInvestigation={handleStartInvestigation}
      />


      {showInvestigation && (
        <div id="investigation-area">
          <Analyze />
        </div>
      )}


      <Features />

      <HowItWorks />

      <WhyLumora />

      <FAQ />

      <Footer />

    </main>
  );
}

export default Welcome;