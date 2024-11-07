"use client";
import React from "react";
import { PageWrapper } from "../components/PageWrapper";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        duration: 0.8,
        bounce: 0.4,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="pt-40">
      <PageWrapper>
        <motion.div
          className="flex justify-between items-center"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl leading-[50px] w-full md:max-w-xl">
              I’m Ali, a Full Stack Developer creating stunning web apps using
              <div className="inline">
                <p className="bg-clip-text text-transparent inline-block bg-gradient-to-r from-[#0077ff] to-[#00e7df] px-2">
                  React,
                </p>
                <p className="bg-clip-text text-transparent inline-block bg-gradient-to-r from-[#42424a] to-[#191919] dark:from-[#EBEFF4] dark:to-[#CED4DA] pr-2">
                  Next,
                </p>
                <p className="bg-clip-text text-transparent inline-block bg-gradient-to-r from-[#339933] to-[#66cc33] pr-2">
                  Node
                </p>
                <p className="bg-clip-text text-transparent inline-block bg-gradient-to-r from-[#747b8a] to-[#495361] pr-2">
                  &
                </p>
                <p className="bg-clip-text text-transparent inline-block bg-gradient-to-r from-[#3178c6] to-[#235a97]">
                  Typescript
                </p>
              </div>
            </h1>
            <p className="text-gray-500 text-base">Stockholm • UTC/GMT +2</p>
          </div>

          <motion.div
            className="max-md:hidden relative"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <Image
              width={112}
              height={112}
              alt="Logo icon"
              src="/icons/logo.png"
              className="rounded-full shadow-gradient z-20 relative"
            />
            <div className="absolute z-10 rounded-full -inset-2 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 opacity-75 blur-lg" />
          </motion.div>
        </motion.div>
      </PageWrapper>
    </div>
  );
};

export default Hero;
