import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="logo">
          <NavLink to="/" className="nav-home-logo">
            ModernBlog
          </NavLink>
        </div>
        <div className="main-nav">
          <NavLink to="/" className="nav-home">
            Home
          </NavLink>
          <NavLink to="/login" className="nav-login">
            Login
          </NavLink>
          <NavLink to="/sign-up" className="nav-signup">
            Sign Up
          </NavLink>
        </div>
      </div>
    </div>
  );
}