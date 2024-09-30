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
        "rounded-xl p-2",
        "shadow-2xl",
        "dark:border-[1px] dark:border-neutral-800 dark:shadow-gray-600 dark:shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
};

export default CardContainer;
