import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import CountUp from "react-countup";
import "./Mydata.css";

export default function Stats() {
   useEffect(() => {
              Aos.init({ duration: 2000 });
            }, []);
  return (
    <div className="stats-section">
      <h2 className="stats-title" data-aos="zoom-in">My Achievements</h2>

      <div className="stats-container">

        <div className="stat-box">
          <h1>
            <CountUp end={120} duration={3} />+
          </h1>
          <p>Projects Completed</p>
        </div>

        <div className="stat-box">
          <h1>
            <CountUp end={10} duration={3} />+
          </h1>
          <p>Years Experience</p>
        </div>

        <div className="stat-box">
          <h1>
            <CountUp end={60} duration={3} />+
          </h1>
          <p>Happy Clients</p>
        </div>

        <div className="stat-box">
          <h1>
            <CountUp end={15} duration={3} />+
          </h1>
          <p>Major Projects</p>
        </div>

      </div>
    </div>
  );
}