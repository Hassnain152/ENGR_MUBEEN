import React from "react";
import "./Profile.css";
import { faWhatsapp, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typical from "react-typical";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">

        <div className="profile-details">

          <div className="colz">
            <div className="colz-icon">

              <a href="https://wa.me/+966597038278" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} className="social-icon whatsapp"/>
              </a>

              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="social-icon facebook"/>
              </a>

              <a href="mailto:your@email.com">
                <FontAwesomeIcon icon={faEnvelope} className="social-icon email"/>
              </a>

            </div>
          </div>

          <div className="profile-detials-name">
            <span className="primary-text">
              Hello I'M <span className="highlightes-text">Engineer Mubeen Tahir</span>
            </span>
          </div>

          <div className="profile-detials-role">
            <h2>
              <Typical
                steps={[
                  "Engr Mubeen 🔴",2000,
                  "Civil Engineer 🏗",2000,
                  "Project Engineer 👷",2000,
                  "Site Engineer 🚧",2000,
                  "Project Management",2000,
                ]}
                loop={Infinity}
              />
            </h2>

            <span className="profile-role-tagline">
              “Knack of Building Strong Infrastructure with Modern Civil Engineering Techniques.”
            </span>
          </div>

          <div className="profile-option d-flex justify-content-center gap-3">
            <button className="hirebtn">Hire Me</button>

            <a href="Engineer Mubeen.pdf" download="Engineer Mubeen.pdf">
              <button className="Cvbtn">Get Resume</button>
            </a>
          </div>

        </div>

        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>

      </div>
    </div>
  );
}