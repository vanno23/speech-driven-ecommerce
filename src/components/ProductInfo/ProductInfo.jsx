import React, { useState } from "react";
import "./ProductInfo.css";
import { useCart } from "../../useContext/CartContext";
import ProductInfoVoice from "../../voice/ProductInfoVoice";

const ProductInfo = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1); // Initial quantity set to 1

  const { cart, setCart, addToCart } = useCart();

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  const handleAddToCart = () => {
    const { id, name, price, image, category, description } = product;
    const existingProductIndex = cart.findIndex((item) => item.id === id);

    if (existingProductIndex !== -1) {
      const updatedCartItems = [...cart];
      updatedCartItems[existingProductIndex].quantity += quantity;
      setCart(updatedCartItems);
    } else {
      addToCart({
        id,
        name,
        price,
        image,
        category,
        description,
        selectedSize,
        selectedColor,
        quantity,
      });
    }
  };

  const increaseQuantity = (amount = 1) => {
    setQuantity((prevQuantity) => prevQuantity + amount);
  };

  const decreaseQuantity = (amount = 1) => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - amount, 1));
  };

  return (
    <div className="ProductInfo">
      <div className="productInfoImage">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="productInfoDetails">
        <h3>{product.name}</h3>
        <p className="productInfoPrice">${product.price.toFixed(2)}</p>

        <ProductInfoVoice
          product={product}
          setSelectedSize={setSelectedSize}
          setSelectedColor={setSelectedColor}
          addToCart={handleAddToCart}
          increaseQuantity={increaseQuantity} // Pass increaseQuantity function
          decreaseQuantity={decreaseQuantity} // Pass decreaseQuantity function
          setQuantity={setQuantity} // Pass setQuantity function
        />

        <div className="product_colors">
          <p className="size_title">Available Colors</p>
          <div className="color_buttons">
            {product.colors.map((color) => (
              <div
                key={color}
                className={`colorBorder ${
                  selectedColor === color ? "selectedColor" : ""
                }`}
              >
                <button
                  className={`productInfo_color`}
                  style={{ backgroundColor: color }}
                  onClick={() => handleColorSelection(color)}
                ></button>
              </div>
            ))}
          </div>
        </div>
        <div className="product_size">
          <p className="size_title">SELECT SIZE</p>
          {product.sizes.map((size) => (
            <button
              key={size}
              className={`productInfo_size ${
                selectedSize === size ? "selectedSize" : ""
              }`}
              onClick={() => handleSizeSelection(size)}
            >
              {size}
            </button>
          ))}
        </div>
        <div className="productInfo_quantity">
          <p className="quantity_title">Quantity</p>
          <div className="quantity_buttons">
            <i onClick={decreaseQuantity} class="fa-solid fa-minus"></i>{" "}
            <p>{quantity}</p>
            <i onClick={increaseQuantity} class="fa-solid fa-plus"></i>
          </div>
        </div>
        <button className="add_to_cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
