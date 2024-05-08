import React from "react";
import { useCart } from "../useContext/CartContext";
import "./Cart.css";
import CartVoice from "../voice/CartVoice";

const Cart = () => {
  const { cart } = useCart();

  const removeFromCart = (name) => {
    console.log(`Removing ${name} from cart`);
  };

  const increaseQuantity = (name) => {
    // Logic to increase quantity of item in cart
    console.log(`Increasing quantity of ${name}`);
  };

  const decreaseQuantity = (name) => {
    // Logic to decrease quantity of item in cart
    console.log(`Decreasing quantity of ${name}`);
  };

  return (
    <div className="cartpage">
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <h3>Your Cart</h3>
          <ul className="cartInfo">
            {cart.map((item) => (
              <li key={item.id} className="cartLIst">
                <div className="cartImage">
                  <img src={item.image} alt={item.name} />
                </div>
                <div>
                  <h4>{item.name}</h4>
                  <div className="cartAttribute">
                    <div className="cartAttributeChild">
                      <p>Color: </p>
                      <div
                        className="cartColor"
                        style={{ backgroundColor: item.selectedColor }}
                      ></div>
                    </div>
                    <p>-</p>
                    <div className="cartAttributeChild">
                      <p className="cartSize">Size: </p>
                      <div>{item.selectedSize}</div>
                    </div>
                  </div>
                </div>
                <div className="cartPrice">
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <p>{item.quantity}</p>
                  <button onClick={() => removeFromCart(item.name)}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      <CartVoice
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />
    </div>
  );
};

export default Cart;
