import Navbar from "../../components/layout/Navbar";
import Hero from "./sections/Hero";
import Features from "../../components/sections/Features";
import HowItWorks from "../../components/sections/HowItWorks";
import WhyLumora from "../../components/sections/WhyLumora";

import "./Welcome.css";

function Welcome() {
  return (
    <main className="welcome-page">

      <Navbar/>  

      <Hero />

      <Features />

      <HowItWorks />

      <WhyLumora />

    </main>
  );
}

export default Welcome;