import React from "react";
import clsx from "clsx";
import {
  Description,
  FontSizeType,
  FontWeightType,
  ThemeType,
} from "./Description"; // Adjust the import path as necessary

type IconDescriptionProps = {
  icon: React.ReactNode;
  title: React.ReactNode;
  titleSize?: FontSizeType;
  titleWeight?: FontWeightType;
  description?: React.ReactNode;
  descriptionSize?: FontSizeType;
  descriptionWeight?: FontWeightType;
  size?: FontSizeType;
  align?: "left" | "right";
  theme?: ThemeType;
  gap?: number;
  iconGap?: number;
  className?: string;
};
const IconDescription: React.FC<IconDescriptionProps> = ({
  icon,
  title,
  titleSize = "sm",
  titleWeight = "normal",
  description,
  descriptionSize,
  descriptionWeight,
  size,
  iconGap = 3,
  className = "",
  theme = "default",
}) => {
  return (
    <div className={clsx("flex items-center", `gap-${iconGap}`, className)}>
      <div>{icon}</div>
      <Description
        title={title}
        titleSize={titleSize}
        titleWeight={titleWeight}
        description={description}
        descriptionSize={descriptionSize}
        descriptionWeight={descriptionWeight}
        size={size}
        theme={theme}
      />
    </div>
  );
};

export default IconDescription;
