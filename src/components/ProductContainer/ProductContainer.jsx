import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductContainer.css";
const ProductContainer = ({ Data }) => {
  return (
    <div className="ProductContainer">
      <div className="ProductContainerHeader">
        <p>SHOW NOW</p>
        <h3>Best Selling</h3>
      </div>
      <div className="ProductItems">
        {Data?.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductContainer;
