import React from "react";
import { PageWrapper } from "../components/PageWrapper";
import BlobGradient from "../components/BlobGradient";
import Navbar from "../components/Navbar";
import { Description } from "../components/Description";

type PageWrapperWithHeaderProps = {
  title: React.ReactNode;
  description: React.ReactNode;
  children: React.ReactNode;
  borderBottom?: boolean;
  paddingBottom?: boolean;
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
          <Description title={title} description={description} gap={4} />
        </PageWrapper>
      </div>
      <PageWrapper className="my-20">{children}</PageWrapper>
    </div>
  );
};

export default PageWrapperWithHeader;
