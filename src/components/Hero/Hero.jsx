import React from "react";
import HeroImg from "../../images/Hero.svg";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_inside">
        <div className="hero_details">
          <h2>Fresh Arrivals Online</h2>
          <p>Discover Our Newest Collection Today.</p>
          <div className="button">
            <button>
              View Collection
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <div className="hero_img">
          <div className="circle"></div>
          <img src={HeroImg} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
