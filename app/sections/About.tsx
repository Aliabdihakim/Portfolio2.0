"use client";
import React from "react";
import Globe from "../components/Globe";
import { PageWrapper } from "../components/PageWrapper";
import StacksCard from "../components/StacksCard";

const About = () => {
  return (
    <PageWrapper className="my-24">
      <h1 className="text-4xl mb-12 flex justify-center">About me</h1>
      <div className="grid grid-cols-2 gap-4">
        <Globe />
        <StacksCard />
      </div>
    </PageWrapper>
  );
};

export default About;
