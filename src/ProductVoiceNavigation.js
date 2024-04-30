import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import annyang from "annyang";
import BestSellingData from "./components/BestSelling/BestSellingData.json";

const ProductVoiceNavigation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const commands = {};

    BestSellingData.BestSelling.forEach((item) => {
      const command = item.name.toLowerCase();
      commands[command] = () => navigate(`/product/${item.id}`);
    });

    annyang.addCommands(commands);

    annyang.addCallback("result", (phrases) => {
      const speech = phrases[0];
      console.log(`Product Navigation - Recognized speech: ${speech}`);
    });

    annyang.start();

    return () => {
      annyang.removeCommands();
      annyang.abort();
    };
  }, [navigate]);

  return <></>;
};

export default ProductVoiceNavigation;
