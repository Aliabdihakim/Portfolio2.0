import clsx from "clsx";
import type React from "react";

type PageWrapperProps = {
  children: React.ReactNode;
  className?: string;
  "data-testid"?: string;
};

const PageWrapper = ({
  children,
  className,
  "data-testid": testId,
}: PageWrapperProps) => (
  <div
    className={clsx("px-3 py-4 max-w-5xl mx-auto", className)}
    data-testid={testId}
  >
    {children}
  </div>
);

PageWrapper.Header = ({ children }: { children: React.ReactNode }) => (
  <h1 className="tw-mb-3">{children}</h1>
);

export { PageWrapper };
