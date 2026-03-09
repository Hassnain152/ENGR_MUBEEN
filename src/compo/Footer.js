import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Phone: +966 59 703 8278</p>
          <p>Email: mubeentahir1201@gmail.com</p>
        </div>

        {/* Social Links */}
        <div className="footer-section">
          <h3>Follow Me</h3>
          <div className="social-icons">
            <a 
              href="https://www.facebook.com/mubeen.tahir.bhatti" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Craft&Code. All rights reserved.</p>
        <p>Your Website Is Call Away</p>
        <p>+966503045722</p>
      </div>
    </footer>
  );
}