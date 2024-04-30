// ProductInfo.js
import React, { useState } from "react";
import "./ProductInfo.css";
import { useCart } from "../../useContext/CartContext";

const ProductInfo = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const { addToCart } = useCart();

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  const handleAddToCart = () => {
    const { id, name, price, image, category, description } = product;
    const selectedProduct = {
      id,
      name,
      price,
      image,
      category,
      description,
      selectedSize,
      selectedColor,
    };
    addToCart(selectedProduct);
  };

  return (
    <div className="ProductInfo">
      <div className="productInfoImage">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="productInfoDetails">
        <h3>{product.name}</h3>
        <p>${product.price.toFixed(2)}</p>

        <div className="product_colors">
          <p className="size_title">Available Colors</p>
          {product.colors.map((color) => (
            <button
              key={color}
              className={`productInfo_color ${
                selectedColor === color ? "selected" : ""
              }`}
              style={{ backgroundColor: color }}
              onClick={() => handleColorSelection(color)}
            ></button>
          ))}
        </div>
        <div className="product_size">
          <p className="size_title">SELECT SIZE</p>
          {product.sizes.map((size) => (
            <button
              key={size}
              className={`productInfo_size ${
                selectedSize === size ? "selected" : ""
              }`}
              onClick={() => handleSizeSelection(size)}
            >
              {size}
            </button>
          ))}
        </div>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductInfo;
