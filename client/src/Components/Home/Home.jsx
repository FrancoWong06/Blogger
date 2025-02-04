import React from "react";

import './Home.css'

import Hero from "../Hero/Hero";
import Blogs from "../Blogs/Blogs";
import Footer from "../Footer/Footer";

export default function Home () {
  return (
    <div>
      <Hero/>
      <Blogs/>
      <Footer/>
    </div>
  )
}