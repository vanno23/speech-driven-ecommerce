import React, { useEffect } from "react";
import annyang from "annyang";

const ProductInfoVoice = ({
  product,
  setSelectedSize,
  setSelectedColor,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  setQuantity,
}) => {
  useEffect(() => {
    const commands = {};

    product.sizes.forEach((size) => {
      commands[`select ${size} size`] = () => setSelectedSize(size);
    });

    product.colors.forEach((color) => {
      commands[`select ${color} color`] = () => setSelectedColor(color);
    });

    commands["add to cart"] = () => addToCart();

    commands["increase quantity"] = increaseQuantity;
    commands["decrease quantity"] = decreaseQuantity;

    commands["increase by *quantity"] = (quantity) => {
      increaseQuantity(parseInt(quantity));
    };

    commands["decrease by *quantity"] = (quantity) => {
      decreaseQuantity(parseInt(quantity));
    };

    annyang.addCommands(commands);
    annyang.start();

    return () => {
      annyang.removeCommands();
      annyang.abort();
    };
  }, [
    product,
    setSelectedSize,
    setSelectedColor,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    setQuantity,
  ]);

  return <></>;
};

export default ProductInfoVoice;
