import React from "react";
import clsx from "clsx";
import { Description, FontSizeType, FontWeightType } from "./Description";

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
      />
    </div>
  );
};

export default IconDescription;
