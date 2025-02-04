import React, { useState } from "react";

import "./Hero.css";

export default function Hero() {

  const [search , setSearch] = useState("")

  const handleChange = (e) => {
    setSearch(e.target.value)
    console.log(search)
  }

  return (
    <div className="hero">
      <div className="hero-container">
        <h1>Welcome to ModernBlog</h1>
        <p>
          Discover stories, thinking, and expertise from writers on any topic.
        </p>
        <form className="search-form">
          <input
            type="text"
            placeholder="Search articles..."
            className="search-input"
            onChange={handleChange}
          />
        </form>
      </div>
    </div>
  );
}
