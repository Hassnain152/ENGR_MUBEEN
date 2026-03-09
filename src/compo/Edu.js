import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Edu() {
   useEffect(() => {
            Aos.init({ duration: 2000 });
          }, []);
  return (
    <>
    <div className="text-center mt-3">
        <h1 data-aos="zoom-in">Educational Background</h1>
        <p className="Aftr">WHY CHOOSE ME</p>
      </div>


      <div className="education-section">

      <h2 className="education-title">Education</h2>

      <div className="education-container">

        <div className="education-card">
          <h3>Bachelor of Civil Engineering (B.S.C)</h3>
          <p>Imperial College Of Business Studies</p>
          <span>Lahore - Pakistan</span>
        </div>

        <div className="education-card">
          <h3>D.A.E - Associate Engineering Civil Technology</h3>
          <p>Punjab Board of Technical Education</p>
          <span>Lahore - Pakistan</span>
        </div>

      </div>

    </div>

    
    </>
  )
}

export default Edu
