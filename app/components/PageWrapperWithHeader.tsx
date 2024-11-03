"use client";
import React from "react";
import { PageWrapper } from "../components/PageWrapper";
import BlobGradient from "../components/BlobGradient";
import Navbar from "../components/Navbar";
import { Description } from "../components/Description";
import { motion } from "framer-motion";

type PageWrapperWithHeaderProps = {
  title: React.ReactNode;
  description: React.ReactNode;
  children: React.ReactNode;
  borderBottom?: boolean;
  paddingBottom?: boolean;
};

const descriptionVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      duration: 0.5,
      ease: "easeOut",
      delay: 0.2,
    },
  },
};

const PageWrapperWithHeader: React.FC<PageWrapperWithHeaderProps> = ({
  title,
  description,
  children,
  borderBottom = true,
  paddingBottom = true,
}) => {
  return (
    <div>
      <BlobGradient />
      <Navbar />
      <div
        className={`pt-32 ${borderBottom ? "border-b border-gray-300" : ""} ${
          paddingBottom ? "pb-12" : ""
        }`}
      >
        <PageWrapper>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={descriptionVariants}
          >
            <Description title={title} description={description} gap={4} />
          </motion.div>
        </PageWrapper>
      </div>
      <PageWrapper className="my-20">{children}</PageWrapper>
    </div>
  );
};

export default PageWrapperWithHeader;
