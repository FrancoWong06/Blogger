import React, { useState } from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";



export default function Card() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([
    {
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=2000&h=1200&s=1",
      title: "The Future of AI in Business",
      description:
        "Explore how artificial intelligence is reshaping the business landscape...",
      author: "By Tech Visionary",
      date: "06/15/2023",
    },
    {
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=2000&h=1200&s=1",
      title: "The Rise of Quantum Computing",
      description:
        "Quantum computing is set to revolutionize problem-solving in various industries...",
      author: "By Science Explorer",
      date: "07/10/2023",
    },
    {
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=2000&h=1200&s=1",
      title: "The Rise of Quantum Computing",
      description:
        "Quantum computing is set to revolutionize problem-solving in various industries...",
      author: "By Science Explorer",
      date: "07/10/2023",
    },
    {
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=2000&h=1200&s=1",
      title: "The Rise of Quantum Computing",
      description:
        "Quantum computing is set to revolutionize problem-solving in various industries...",
      author: "By Science Explorer",
      date: "07/10/2023",
    },
    {
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=2000&h=1200&s=1",
      title: "The Rise of Quantum Computing",
      description:
        "Quantum computing is set to revolutionize problem-solving in various industries...",
      author: "By Science Explorer",
      date: "07/10/2023",
    },
  ]);

  const handleReadMoreClick = () => {
    navigate('/123');
  }

  return (
    <div className="card-container">
      {blogs.map((blog, index) => (
        <div key={index} className="card">
          <div className="front-img-div">
            <img src={blog.img} alt={blog.title} className="front-img" />
          </div>
          <div className="blog-info">
            <h2>{blog.title}</h2>
            <p>{blog.description}</p>
            <p className="blog-meta">
              {blog.author} | {blog.date}
            </p>
            <button onClick={handleReadMoreClick}>Read More</button>
          </div>
        </div>
      ))}
    </div>
  );
}
