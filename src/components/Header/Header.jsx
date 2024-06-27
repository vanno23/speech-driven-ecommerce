import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import headerImage from "../../images/Header.png";
import { useCart } from "../../useContext/CartContext";
import { useSearch } from "../../useContext/SearchContext";
import InputVoice from "../../voice/InputVoice";

const Header = () => {
  const { cart } = useCart();
  const { setSearchInput } = useSearch();
  const [inputValue, setInputValue] = useState("");
  const [voiceTriggered, setVoiceTriggered] = useState(false);
  const navigate = useNavigate();

  const clearInput = () => {
    setInputValue("");
    setSearchInput("");
  };

  InputVoice(setInputValue, setVoiceTriggered, clearInput);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setSearchInput(inputValue);
      navigate("/categories");
    }
  };

  useEffect(() => {
    if (voiceTriggered) {
      setSearchInput(inputValue);
      navigate("/categories");
      setVoiceTriggered(false);
    }
  }, [voiceTriggered, inputValue, navigate, setSearchInput]);

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={headerImage} alt="" />
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="header-right">
        <div className="search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            className="header_search"
            type="text"
            placeholder="Search products"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>
        <div className="headerIcons">
          <Link to="cart" className="cartIcon">
            <p>{cart.length}</p>
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
          <i className="fa-regular fa-user"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
