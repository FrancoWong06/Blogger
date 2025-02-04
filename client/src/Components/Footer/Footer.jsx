import React from "react";

import { NavLink } from "react-router-dom";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="slogan">
          <h2>ModernBlog</h2>
          <p>Share your thoughts with the world</p>
        </div>
        <div className="footer-nav-div">
          <div className="footer-nav">
            <NavLink to='/about' className="footer-about">About</NavLink>
            <NavLink to='/contact' className="footer-about">Contact</NavLink>
            <NavLink to='privacy-policy' className="footer-about">Privacy Policy</NavLink>
          </div>
          <div className="rights">
            <p>© 2025 ModernBlog. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
