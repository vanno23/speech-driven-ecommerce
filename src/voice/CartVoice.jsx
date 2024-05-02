// CartVoice.js
import React from "react";
import annyang from "annyang";

const CartVoice = ({ removeFromCart, increaseQuantity, decreaseQuantity }) => {
  const addVoiceCommands = () => {
    annyang.addCommands({
      "remove :name": (name) => removeFromCart(name),
      "increase :name": (name) => increaseQuantity(name),
      "decrease :name": (name) => decreaseQuantity(name),
    });
    annyang.start();
  };

  React.useEffect(() => {
    addVoiceCommands();
    return () => {
      annyang.removeCommands();
      annyang.abort();
    };
  }, []);

  return null;
};

export default CartVoice;
