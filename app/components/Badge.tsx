import clsx from "clsx";

type BadgeColor =
  | "gray"
  | "blue"
  | "green"
  | "purple"
  | "red"
  | "yellow"
  | "orange";

const Badge = ({
  text,
  color = "gray",
  className,
}: {
  text: string;
  color?: BadgeColor;
  className?: string;
}) => (
  <span
    className={clsx(
      `bg-${color}-200 text-gray-800 text-sm font-medium py-1 px-2 rounded-full`,
      {
        "bg-gray-200": color === "gray",
        "bg-blue-200:": color === "blue",
        "bg-green-200:": color === "green",
        "bg-purple-200:": color === "purple",
        "bg-red-200:": color === "red",
        "bg-yellow-200:": color === "yellow",
        "bg-orange-200:": color === "orange",
      },
      className
    )}
  >
    {text}
  </span>
);

export default Badge;
