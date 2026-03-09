import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./ModernBoxes.css";
import box1 from "./Assets/box1.png";
import box2 from "./Assets/box2.jpg";
import box3 from "./Assets/box3.png";

export default function ModernBoxes() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="boxes-container">

      <div className="big-box">

        <img src={box1} alt="profile" className="big-image" />

        <h1 className="section-heading" style={{ color: "black" }}>
          Certification And Diploma
        </h1>

        <div className="diploma-container">

          <div className="diploma-card">
            <h3>AutoCAD (2D + 3D)</h3>
            <p>6-Month Diploma</p>
            <span>Pakcon Technical College - Pakistan</span>
          </div>

          <div className="diploma-card">
            <h3>MS Office</h3>
            <p>6-Month Diploma</p>
            <span>Pakcon Technical College - Pakistan</span>
          </div>

          <div className="diploma-card">
            <h3>Adobe Photoshop</h3>
            <p>3-Month Diploma</p>
            <span>Pakcon Technical College - Pakistan</span>
          </div>

        </div>

      </div>

      <div className="small-boxes">

        <div className="small-box">
          <img src={box2} alt="project" />
          <h1 className="section-heading" style={{ color: "white" }}>
            Approval
          </h1>
          <p>Approved by Neom as Project Civil Engineer. site supervision.</p>
        </div>

        <div className="small-box">
          <img src={box3} alt="project" />
          <h1 className="section-heading" style={{ color: "white" }}>
            Training
          </h1>
          <p>
            Fire Safety Training - Confined space Training - Excavation Training -
            Work Permit System - Equipment Safety - Adverse Weather Conditions
          </p>
        </div>

      </div>

    </div>
  );
}