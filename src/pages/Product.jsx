import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductInfo from "../components/ProductInfo/ProductInfo";
import BestSellingData from "../components/BestSelling/BestSellingData.json";
import { useCart } from "../useContext/CartContext";
const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = BestSellingData.BestSelling.find(
      (item) => item.id === parseInt(productId)
    );
    setProduct(foundProduct);
  }, [productId]);

  const { cart } = useCart();

  // Log the cart data to the console
  console.log("Cart Data:", cart);
  return (
    <div>
      <h2>Product Details</h2>
      {/* <p>{product.name}</p> */}
      {product ? <ProductInfo product={product} /> : <p>Loading...</p>}
    </div>
  );
};

export default Product;
