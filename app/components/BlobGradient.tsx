import React from "react";
import clsx from "clsx";

const BlobGradient = ({ position = "top" }) => {
  return (
    <div
      className={clsx(
        "w-full max-w-3xl h-[20vh] absolute left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-red-500 via-blue-500 to-purple-500 blur-3xl opacity-70",
        {
          "top-0": position === "top",
          "bottom-0": position === "bottom",
        }
      )}
    />
  );
};

export default BlobGradient;
