import React from "react";
import "./Footer.css";       // ← Make sure this line is added
import img1 from "./Assets/bg2.png";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="wave">
        <img src={img1} alt="wave background" className="wave-img" />
      </div>
    </div>
  );
}