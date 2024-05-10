// CartVoice.js
import React from "react";
import annyang from "annyang";

const CartVoice = ({
  cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}) => {
  const addVoiceCommands = () => {
    const commands = {};

    cart.forEach((item) => {
      commands[`remove ${item.name}`] = () => removeFromCart(item.name);
      commands[`increase ${item.name}`] = () => increaseQuantity(item.name);
      commands[`decrease ${item.name}`] = () => decreaseQuantity(item.name);
    });

    annyang.addCommands(commands);
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
