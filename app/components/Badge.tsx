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
      className
    )}
  >
    {text}
  </span>
);

export default Badge;
