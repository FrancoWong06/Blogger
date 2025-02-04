import React, { useState } from "react";

import "./Blogs.css";

import Card from "../Card/Card";

export default function Blogs() {
  const [activeButton, setActiveButton] = useState(null);
  const [displayFilter, setDisplayFilter] = useState("Random");
  const topics = [
    "Latest",
    "Business",
    "Study",
    "Coding",
    "Life Hacks",
    "Tech",
    "Design",
    "Productivity",
  ];

  const handleButtonClicked = (index) => {
    setActiveButton(index);
    if (index === 0) {
      setDisplayFilter("Latest Posts")
    }
    if (index === 1) {
      setDisplayFilter("Business Insights")
    }
    if (index === 2) {
      setDisplayFilter("Study Tips")
    }
    if (index === 3) {
      setDisplayFilter("Coding Tips")
    }
    if (index === 4) {
      setDisplayFilter("Life Hacks")
    }
    if (index === 5) {
      setDisplayFilter("Tech Trends")
    }
    if (index === 6) {
      setDisplayFilter("Design")
    }
    if (index === 7) {
      setDisplayFilter("Productivity Boosters")
    }
  };

  return (
    <div className="blog-home">
      <div className="filter-topic">
        {topics.map((topic, index) => (
          <button
            key={index}
            className={activeButton === index ? "active" : ""}
            onClick={() => handleButtonClicked(index)}
          >
            {topic}
          </button>
        ))}
      </div>
      <div className="filter-title">
        <h1>{displayFilter}</h1>
      </div>
      <div className="blog-list">
        <Card/>
      </div>
    </div>
  );
}
