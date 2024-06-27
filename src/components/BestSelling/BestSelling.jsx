import React, { useEffect, useState } from "react";
import ProductContainer from "../ProductContainer/ProductContainer";
import BestSellingData from "./BestSellingData";
const BestSelling = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(BestSellingData.BestSelling);
  }, []);
  return (
    <div>
      <ProductContainer Data={products} />
    </div>
  );
};

export default BestSelling;
