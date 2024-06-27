import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./CategoriesProduct.css";
const CategoriesProducts = ({ Data }) => {
  return (
    <div className="CategoriesProduct">
      {Data?.map((item) => (
        <ProductCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default CategoriesProducts;
