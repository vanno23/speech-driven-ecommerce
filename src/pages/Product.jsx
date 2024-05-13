import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductInfo from "../components/ProductInfo/ProductInfo";
import BestSellingData from "../components/BestSelling/BestSellingData.json";
import { ProductDetails } from "../components/ProductDetails/ProductDetails";
import annyang from "annyang";

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  const [changeDetail, setChangeDetail] = useState(true);

  useEffect(() => {
    const addVoiceCommands = () => {
      annyang.addCommands({
        "show details": () => setChangeDetail(true),
        "show comments": () => setChangeDetail(false),
      });
      annyang.start();
    };

    addVoiceCommands();

    return () => {
      annyang.removeCommands();
      annyang.abort();
    };
  }, []);

  useEffect(() => {
    const foundProduct = BestSellingData.BestSelling.find(
      (item) => item.id === parseInt(productId)
    );
    setProduct(foundProduct);
  }, [productId]);

  return (
    <div>
      <div className="Breadcrumb_item">
        <span>Ecommerce</span>
        <i class="fa-solid fa-angle-right"></i>
        <span>Product</span>
      </div>
      {product ? <ProductInfo product={product} /> : <p>Loading...</p>}
      <ProductDetails
        changeDetail={changeDetail}
        setChangeDetail={setChangeDetail}
        product={product}
      />
    </div>
  );
};

export default Product;
