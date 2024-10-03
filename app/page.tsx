"use client";
import React, { useRef, useEffect } from "react";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Timeline from "./sections/Timeline";
import BlobGradient from "./components/BlobGradient";
import GetInTouch from "./sections/GetInTouch";

const Home = () => {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const handleHashChange = () => {
    const hash = window.location.hash;

    if (hash === "#about" && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }

    if (hash === "#timeline" && timelineRef.current) {
      timelineRef.current.scrollIntoView({ behavior: "smooth" });
    }

    if (hash === "#contact" && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="relative">
      <BlobGradient />
      <Navbar
        aboutRef={aboutRef}
        timelineRef={timelineRef}
        contactRef={contactRef}
      />
      <Hero />
      <Projects />
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={timelineRef}>
        <Timeline />
      </div>
      <div ref={contactRef}>
        <GetInTouch />
      </div>
      <div className="pt-48">
        <BlobGradient position="bottom" />
      </div>
    </div>
  );
};

export default Home;
