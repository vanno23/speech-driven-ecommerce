import React, { useEffect } from "react";
import annyang from "annyang";
import { useNavigate } from "react-router-dom";
import CategoriesData from "../pages/CategoriesData.json";

const CategoriesVoice = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const commands = {};

    CategoriesData.Categories.forEach((item) => {
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

export default CategoriesVoice;
