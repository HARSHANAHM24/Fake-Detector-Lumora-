import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import Hero from "./sections/Hero";
import Features from "../../components/sections/Features";
import HowItWorks from "../../components/sections/HowItWorks";
import WhyLumora from "../../components/sections/WhyLumora";
import FAQ from "../../components/sections/FAQ";

import "./Welcome.css";

function Welcome() {
  return (
    <main className="welcome-page">
      <Navbar />

      <Hero />

      <Features />

      <HowItWorks />

      <WhyLumora />

      <FAQ />

      <Footer />
    </main>
  );
}

export default Welcome;