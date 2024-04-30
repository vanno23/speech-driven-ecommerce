import React from "react";
import Hero from "../components/Hero/Hero";
import BestSelling from "../components/BestSelling/BestSelling";
import ProductVoiceNavigation from "../ProductVoiceNavigation";

const home = () => {
  return (
    <div>
      <Hero />
      <BestSelling />
      <ProductVoiceNavigation />
    </div>
  );
};

export default home;
