import clsx from "clsx";
import React from "react";

type CardContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const CardContainer: React.FC<CardContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={clsx(
        "border rounded-xl shadow-2xl border-gray-50 p-2",
        className
      )}
    >
      {children}
    </div>
  );
};

export default CardContainer;
