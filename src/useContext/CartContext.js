// CartContext.js
import React, { createContext, useState, useContext } from "react";

// Step 1: Create context
const CartContext = createContext();

// Step 2: Provider component
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Step 3: Custom hook to use context
const useCart = () => {
  return useContext(CartContext);
};

export { CartProvider, useCart };
