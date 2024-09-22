import clsx from "clsx";
import type React from "react";

type PageWrapperProps = {
  children: React.ReactNode;
  className?: string;
  "data-testid"?: string;
};

function PageWrapper({
  children,
  className,
  "data-testid": testId,
}: PageWrapperProps) {
  return (
    <div
      className={clsx("px-3 py-4 max-w-5xl mx-auto", className)}
      data-testid={testId}
    >
      {children}
    </div>
  );
}

PageWrapper.Header = function Header({
  children,
}: {
  children: React.ReactNode;
}) {
  return <h1 className="tw-mb-3">{children}</h1>;
};

export { PageWrapper };
