import React from "react";
import "./Checkout.css";
import AfterPayment from "../images/AfterPayment.png";
// import mailImage from "../images/mail.png";
// import callImage from "../images/call.png";
// import checkouticon from "../images/Frame11.png";

const Checkout = () => {
  return (
    <>
      <div className="checkout_breadcrumb">
        <div className="Breadcrumb_item">
          <h4>Succsessful Order</h4>
          <div>
            <span>Ecommerce</span>
            <i className="fa-solid fa-angle-right"></i>
            <span>Succsessful Order</span>
          </div>
        </div>
      </div>
      <div className="checkout-container">
        <div className="form-container">
          <img src={AfterPayment} alt="" />
          <div>
            <h2>Thank you for shopping</h2>
          </div>
          <div>
            <span>
              Your order has been sucsessfuley placed and now is <br /> being
              processed.
            </span>
          </div>
          <div>
            <button className="go-to-home">Go to home →</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
