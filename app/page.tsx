import React from "react";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Timeline from "./sections/Timeline";

const Home = () => {
  return (
    <div>
      <div className="w-full max-w-3xl h-[20vh] absolute top-0 left-1/2 -translate-x-1/2 rounded-b-full bg-gradient-to-r from-red-500 via-blue-500 to-purple-500 blur-3xl opacity-70" />
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Timeline />
    </div>
  );
};

export default Home;
