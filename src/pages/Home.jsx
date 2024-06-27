import React from "react";
import Hero from "../components/Hero/Hero";
import BestSelling from "../components/BestSelling/BestSelling";
import ProductVoiceNavigation from "../ProductVoiceNavigation";
import VoiceNavigation from "../VoiceNavigation";

const home = () => {
  return (
    <div>
      <VoiceNavigation />
      <Hero />
      <BestSelling />
      <ProductVoiceNavigation />
    </div>
  );
};

export default home;
