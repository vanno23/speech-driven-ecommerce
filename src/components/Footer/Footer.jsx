import React from "react";
import "./Footer.css";
import footerImage from "../../images/Footer.png";
import githubImage from "../../images/Github.png";
import instagramImage from "../../images/Instagram.png";
import youtubeImage from "../../images/Youtube.png";
import amexImage from "../../images/Amex.png";
import visaImage from "../../images/Visa.png";
import mastercardImage from "../../images/Mastercard.png";

const Footer = () => {
  return (
  <div className="footer">
    <div className="top">
      <div className="left">
        <img src={footerImage} alt="" />
        <p>Speech-driven website is a new solution for people with disabilities</p>
        <div className="icons">
          <a href="https://github.com/"><img src={githubImage} alt="" /></a>
          <a href="https://www.instagram.com/"><img src={instagramImage} alt="" /></a>
          <a href="https://www.youtube.com/"><img src={youtubeImage} alt="" /></a>
        </div>
      </div>
      <div className="mid">
        <div className="support">
          <h3>SUPPORT</h3>
          <p>FAQ</p>
          <p>Terms of use</p>
          <p>Privacy Policy</p>
        </div>
        <div className="company">
          <h3>COMPANY</h3>
          <p>About Us</p>
          <p>Contact</p>
          <p>Careers</p>
        </div>
        <div className="shop">
          <h3>SHOP</h3>
          <p>My Account</p>
          <p>Chechkout</p>
          <p>Cart</p>
        </div>
      </div>
      <div className="right">
        <h3>ACCEPTED PAYMENTS</h3>
        <div className="payments">
          <img src={mastercardImage} alt="" />
          <img src={amexImage} alt="" />
          <img src={visaImage} alt="" />
        </div>
      </div>
    </div>
    <div className="bot">
      <hr />
      <p>2024 All rights reserved.</p>
    </div>
  </div>
  
  );
};

export default Footer;
