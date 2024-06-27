import React, { useEffect } from "react";
import { useCart } from "../useContext/CartContext";
import "./Cart.css";
import CartVoice from "../voice/CartVoice";
import OrderSummary from "../components/OrderSummary/OrderSummary";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import VoiceNavigation from "../VoiceNavigation";
import { useNavigate } from "react-router-dom";
import annyang from "annyang";

const Cart = () => {
  const { cart, setCart } = useCart();

  const navigate = useNavigate();

  useEffect(() => {
    const commands = {
      "check out": () => {
        setCart([]);
        navigate("/checkout");
      },
    };

    annyang.addCommands(commands);
    annyang.start();

    return () => {
      annyang.removeCommands();
      annyang.abort();
    };
  }, [navigate, setCart]);

  const removeFromCart = (name) => {
    const lowerCaseName = name.toLowerCase();
    setCart((prevCart) => {
      const updatedCart = prevCart.filter(
        (item) => item.name.toLowerCase() !== lowerCaseName
      );
      return updatedCart;
    });
  };

  const increaseQuantity = (name) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item.name.toLowerCase() === name.toLowerCase()) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      return updatedCart;
    });
  };

  const decreaseQuantity = (name) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item.name.toLowerCase() === name.toLowerCase()) {
          const newQuantity = Math.max(item.quantity - 1, 1);
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
      return updatedCart;
    });
  };

  return (
    <>
      <VoiceNavigation />
      <Breadcrumb page={"Cart"} />
      <div className="cartpage">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="cartContainer">
            <div>
              <h3 className="cartContainer_title">Your Cart</h3>
              <ul className="cartInfo">
                {cart.map((item) => (
                  <li key={item.id} className="cartLIst">
                    <div className="cartListLeft">
                      <div className="cartImage">
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div>
                        <h4 className="cart_item_name">{item.name}</h4>
                        <div className="cartAttribute">
                          <div className="cartAttributeChild">
                            <p className="cart_item_color">Color: </p>
                            <div
                              className="cartColor"
                              style={{ backgroundColor: item.selectedColor }}
                            ></div>
                          </div>
                          <p>-</p>
                          <div className="cartAttributeChild">
                            <p className="cartSize">Size: </p>
                            <div className="cartSizeData">
                              {item.selectedSize}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cartPrice">
                      <p>${item.price.toFixed(2)}</p>
                      <p>{item.quantity}</p>
                      <button onClick={() => removeFromCart(item.name)}>
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <OrderSummary />
          </div>
        )}
        <CartVoice
          cart={cart}
          removeFromCart={removeFromCart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />
      </div>
    </>
  );
};

export default Cart;
