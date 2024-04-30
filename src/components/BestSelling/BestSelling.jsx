import React from "react";
import Product from "../ProductContainer/ProductContainer";
import BestSellingData from "./BestSellingData";
const BestSelling = () => {
  return (
    <div>
      <Product Data={BestSellingData.BestSelling} />
    </div>
  );
};

export default BestSelling;
