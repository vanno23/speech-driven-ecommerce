import React from "react";
import "./OrderSummary.css";
import { useCart } from "../../useContext/CartContext";
import { Link } from "react-router-dom";

const OrderSummary = () => {
  const { cart } = useCart();

  const subtotal = cart.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  const totalQuantity = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const taxRate = 0.05;
  const tax = subtotal * taxRate;

  return (
    <div className="ordersummary">
      <p className="ordersummary_title">Order Summary</p>
      <div className="ordersummarydata">
        <span>Subtotal:</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="ordersummarydata">
        <span>Shipping:</span>
        <span>Free</span>
      </div>
      <div className="ordersummarydata">
        <span>Tax:</span>
        <span>${(tax * totalQuantity).toFixed(2)}</span>
      </div>

      <div className="ordersummarydata">
        <span>Total:</span>
        <span>${(subtotal + tax * totalQuantity).toFixed(2)}</span>
      </div>

      <Link to={"/"} className="checkout">
        Checkout
      </Link>
    </div>
  );
};

export default OrderSummary;
