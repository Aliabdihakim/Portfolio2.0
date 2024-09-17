"use client";
import React, { useState, useEffect } from "react";
import { PageWrapper } from "../components/PageWrapper";
import Image from "next/image";
import clsx from "clsx";

const Hero = () => {
  const words = [
    {
      text: "amazing",
      gradient: "bg-gradient-to-r from-[#ff1835] to-[#ffc900]",
    },
    {
      text: "fantastic",
      gradient: "bg-gradient-to-r from-[#7f00de] to-[#ff007f]",
    },
    {
      text: "stunning",
      gradient: "bg-gradient-to-r from-[#0077ff] to-[#00e7df]",
    },
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="pt-40">
      <PageWrapper>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl leading-[50px] w-full md:max-w-xl">
              I'm Ali, a Full Stack Developer creating{" "}
              <span
                className={clsx(
                  "bg-clip-text text-transparent inline-block transition-all duration-1000",
                  words[currentWordIndex].gradient
                )}
                style={{ width: "144px", display: "inline-block" }} // Adjust width as per longest word
              >
                {words[currentWordIndex].text}
              </span>{" "}
              websites using React
            </h1>
            <p className="text-gray-500 text-base">Stockholm • UTC/GMT +2</p>
          </div>

          <div className="max-md:hidden relative">
            <Image
              width={112}
              height={112}
              alt="Logo icon"
              src="/icons/logo.png"
              className="rounded-full shadow-gradient z-20 relative"
            />
            <div className="absolute z-10 rounded-full -inset-2 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 opacity-75 blur-lg" />
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};

export default Hero;
