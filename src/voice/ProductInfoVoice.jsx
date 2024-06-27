import React, { useEffect } from "react";
import annyang from "annyang";
import { useNavigate } from "react-router-dom";

const ProductInfoVoice = ({
  product,
  setSelectedSize,
  setSelectedColor,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  setQuantity,
  setChangeDetail,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    const commands = {};

    product.sizes.forEach((size) => {
      commands[`select ${size} size`] = () => setSelectedSize(size);
    });

    product.colors.forEach((color) => {
      commands[`select ${color} color`] = () => setSelectedColor(color);
    });

    commands["go to home"] = () => navigate("/");
    commands["go to about"] = () => navigate("/about");
    commands["go to categories"] = () => navigate("/categories");
    commands["go to contact"] = () => navigate("/contact");
    commands["go to cart"] = () => navigate("/cart");

    commands["scroll down"] = () =>
      window.scrollBy({ left: 0, top: 400, behavior: "smooth" });
    commands["scroll up"] = () =>
      window.scrollBy({ left: 0, top: -400, behavior: "smooth" });

    commands["add to cart"] = () => addToCart();

    commands["increase quantity"] = increaseQuantity;
    commands["decrease quantity"] = decreaseQuantity;

    commands["increase by *quantity"] = (quantity) => {
      const parsedQuantity = parseInt(quantity);
      if (!isNaN(parsedQuantity)) {
        increaseQuantity(parsedQuantity);
      }
    };

    commands["decrease by *quantity"] = (quantity) => {
      const parsedQuantity = parseInt(quantity);
      if (!isNaN(parsedQuantity)) {
        decreaseQuantity(parsedQuantity);
      }
    };

    annyang.addCommands(commands);
    annyang.start();

    return () => {
      annyang.removeCommands();
      annyang.abort();
    };
  }, [
    setChangeDetail,
    product,
    setSelectedSize,
    setSelectedColor,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    setQuantity,
    navigate,
  ]);

  return <></>;
};

export default ProductInfoVoice;
