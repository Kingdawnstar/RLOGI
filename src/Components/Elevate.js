import React from "react";
import "./Elevate.css";
import star from "../Assets/stars.png";

const Elevate = () => {
  return (
    <div className="Elevate">
      <div className="elevator">
        <img src={star} alt="" />
        <h3>Ready to Elevate Your Leadership Journey?</h3>
        <p>
          Dive deeper into topics that matter. Our comprehensive articles and
          guide are crafted to provide you with the tools and insights for
          unparalleled growth
        </p>
        <button>Start Your Transformation Today</button>
      </div>
    </div>
  );
};

export default Elevate;
