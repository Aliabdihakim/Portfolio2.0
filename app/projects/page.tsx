import React from "react";
import { PageWrapper } from "../components/PageWrapper";
import Navbar from "../components/Navbar";
import BlobGradient from "../components/BlobGradient";
import { Description } from "../components/Description";

const page = () => {
  return (
    <div>
      <BlobGradient />
      <Navbar />
      <div className="pt-32 border-b border-gray-300 pb-12">
        <PageWrapper>
          <Description
            title={<h1 className="text-4xl font-bold md:text-5xl">Projects</h1>}
            description={
              <p className="text-base text-gray-600">
                The list of my projects. Everything was made with ❤️.
              </p>
            }
            gap={4}
          />
        </PageWrapper>
      </div>
    </div>
  );
};

export default page;
