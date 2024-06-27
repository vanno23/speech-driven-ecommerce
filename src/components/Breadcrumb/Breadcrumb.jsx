import React from "react";
import "./Breadcrumb.css";
const Breadcrumb = ({ page }) => {
  return (
    <div className="Breadcrumb">
      <div className="Breadcrumb_item">
        <h4>{page}</h4>
        <div>
          <span>Ecommerce</span>
          <i className="fa-solid fa-angle-right"></i>
          <span>{page}</span>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
