import clsx from "clsx";

type ThemeType =
  | "default"
  | "defaultFlip"
  | "disabled"
  | "grayBlack"
  | "whiteGray";
export type FontWeightType = keyof typeof fontWeightClass;
export type FontSizeType = keyof typeof fontSizeClass;

type DescriptionProps = {
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "right";
  theme?: ThemeType;
  size?: FontSizeType;
  titleSize?: FontSizeType;
  descriptionSize?: FontSizeType;
  titleWeight?: FontWeightType;
  descriptionWeight?: FontWeightType;
  gap?: number;
  className?: string;
};

const alignClass = { left: "", right: "text-right" } as const;
const themeClass = {
  default: {
    body: "text-gray-800",
    secondary: "text-gray-500",
  },
  defaultFlip: {
    body: "text-gray-500",
    secondary: "text-gray-800",
  },
  disabled: {
    body: "text-gray-800 opacity-50",
    secondary: "text-gray-500 opacity-50",
  },
  grayBlack: {
    body: "tetx-gray-500",
    secondary: "text-black",
  },
  whiteGray: {
    body: "text-white",
    secondary: "text-neutral-400",
  },
} as const;

const fontSizeClass = {
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  xxl: "text-2xl",
} as const;

const fontWeightClass = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
} as const;

const Description = ({
  title,
  description,
  align = "left",
  theme = "default",
  size = "sm",
  titleSize,
  descriptionSize,
  titleWeight = "normal",
  descriptionWeight = "normal",
  gap = 0,
  className,
}: DescriptionProps) => (
  <dl>
    <dt
      className={clsx(
        "leading-5 ",
        fontSizeClass[titleSize || size],
        fontWeightClass[titleWeight],
        alignClass[align],
        themeClass[theme].body,
        `mb-${gap}`,
        className
      )}
    >
      {title}
    </dt>
    {description && (
      <dd
        className={clsx(
          "",
          fontSizeClass[descriptionSize || size],
          fontWeightClass[descriptionWeight],
          alignClass[align],
          themeClass[theme].secondary
        )}
      >
        {description}
      </dd>
    )}
  </dl>
);

export { Description };
export type { DescriptionProps, ThemeType };
