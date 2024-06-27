// Product.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductInfo from "../components/ProductInfo/ProductInfo";
// import BestSellingData from "../components/BestSelling/BestSellingData.json";
import { ProductDetails } from "../components/ProductDetails/ProductDetails";
import VoiceNavigation from "../VoiceNavigation";
import ChangeDetail from "../voice/ChangeDetail";
import { useChangeDetail } from "../useContext/ChangeDetailContext";
import CategoriesData from "../pages/CategoriesData.json";

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { setChangeDetail } = useChangeDetail();

  useEffect(() => {
    const foundProduct = CategoriesData.Categories.find(
      (item) => item.id === parseInt(productId)
    );
    setProduct(foundProduct);
  }, [productId]);

  return (
    <div>
      <VoiceNavigation />
      <ChangeDetail setChangeDetail={setChangeDetail} />

      <div className="Breadcrumb_item">
        <span>Ecommerce</span>
        <i className="fa-solid fa-angle-right"></i>
        <span>Product</span>
      </div>
      {product ? <ProductInfo product={product} /> : <p>Loading...</p>}
      <ProductDetails product={product} />
    </div>
  );
};

export default Product;
