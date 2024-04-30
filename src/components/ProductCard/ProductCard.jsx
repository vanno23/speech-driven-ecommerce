import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <Link to={`product/${item.id}`}>
      <div className="product_card">
        <div className="product_img">
          <img src={item.image} alt={item.name} />
        </div>
        <h3 className="product_card_title">{item.name}</h3>
        <div className="prudct_card_details">
          <p className="prudct_card_stock">
            {item.inStock ? "In Stock" : "Out of Stock"}
          </p>
          <p className="product_cart_price">${item.price.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
