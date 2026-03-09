import React from "react";
import "./Foooter.css";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";


export default function Foooter() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* About / Company */}
        <div className="footer-section">
          <h3>About Me</h3>
          <p>
            Experienced Civil Engineer & Superintendent with expertise in large-scale projects, 
            delivering quality work with precision and efficiency.
          </p>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p><FaPhone /> +966 59 703 8278 / +966 51 147 2751</p>
          <p><FaEnvelope /> mubeentahir1201@gmail.com</p>
          <p>Al Hafuf-Dammam, Saudi Arabia</p>
        </div>

        {/* Social Links */}
        <div className="footer-section">
          <h3>Follow Me</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Code&Craft. All rights reserved.</p>
        <p>Your Website Is One Call Away +966503045722</p>
      </div>
    </footer>
  );
}