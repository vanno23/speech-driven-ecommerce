import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import headerImage from "../../images/Header.png";

const Header = () => {
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
          <Link to="/about">About</Link>
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
          />
        </div>
        <div className="headerIcons">
          <Link to="cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
          <i className="fa-regular fa-user"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
