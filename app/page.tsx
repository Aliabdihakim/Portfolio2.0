import React from "react";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Timeline from "./sections/Timeline";
import BlobGradient from "./components/BlobGradient";

const Home = () => {
  return (
    <div>
      <BlobGradient />
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Timeline />
    </div>
  );
};

export default Home;
