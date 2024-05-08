// VoiceNavigation.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import annyang from "annyang";

const VoiceNavigation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const commands = {
      "go to home": () => navigate("/"),
      "go to about": () => navigate("/about"),
      "go to categories": () => navigate("/categories"),
      "go to contact": () => navigate("/contact"),
      "go to cart": () => navigate("/cart")
    };

    annyang.addCommands(commands);
    annyang.start();

    return () => {
      annyang.removeCommands();
      annyang.abort();
    };
  }, [navigate]);

  return <></>;
};

export default VoiceNavigation;
