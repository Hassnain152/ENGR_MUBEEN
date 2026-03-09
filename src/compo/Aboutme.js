import React, { useEffect } from "react";
import "./Aboutme.css";
import img8 from "./Assets/picaa.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";

export default function AboutMe() {

  useEffect(() => {
     Aos.init({ duration: 2000 });
   }, []);

  return (
    <>
      <div className="text-center mt-3">
        <h1 data-aos="zoom-in">ABOUT ME</h1>
        <p className="Aftr">WHY CHOOSE ME</p>
      </div>

      <div className="container mt-5 mb-5 w-75">
        <div className="row align-items-center">

          <div className="col-md-6 mb-4 mb-md-0">
            <img src={img8} alt="About Me" className="img-fluid rounded" />
          </div>

          <div className="col-md-6">
            <div className="card">
              <div className="card-body">

                <p>
                  I am a Civil Engineer with experience in construction planning,
                  site management, and structural design, along with a knack for
                  delivering projects efficiently and safely. Strong professional
                  with a BSc in Civil Engineering, willing to be an asset for an organization.
                </p>

                <h5 className="mt-4">Here are a few highlights:</h5>

                <ul>
                  <li>Goal-oriented and deadline-focused</li>
                  <li>Site supervision and quality control</li>
                  <li>Strong conceptual and analytical skills</li>
                  <li>Proficient in AutoCAD and structural tools</li>
                  <li>Excellent problem-solving abilities</li>
                </ul>

                <div className="text-center mt-4">
                  <a href="Engineer Mubeen.pdf" download>
                    <button className="abt-btn">
                      Get Resume
                    </button>
                  </a>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}