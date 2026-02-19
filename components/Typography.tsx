import React from "react";

type Variant =
  | "h1"
  | "h2"
  | "h2-bold"
  | "h3"
  | "h3-semibold"
  | "h4"
  | "h5"
  | "h5-regular"
  | "h6"
  | "h6-semibold"
  | "subtitle-1"
  | "subtitle-2"
  | "body-1"
  | "body-2"
  | "body-3"
  | "button";

interface TypographyProps {
  variant: Variant;
  children: React.ReactNode;
  className?: string;
}

export default function Typography({
  variant,
  children,
  className = "",
}: TypographyProps) {
  const styles: Record<Variant, string> = {
    h1: "text-[72px] font-medium leading-[1.2]",
    h2: "text-[40px] font-medium leading-[1.4]",
    "h2-bold": "text-[40px] font-bold leading-[1.4]",
    h3: "text-[32px] font-medium leading-[1.4]",
    "h3-semibold": "text-[32px] font-semibold leading-[1.4]",
    h4: "text-[24px] font-medium leading-[1.4]",
    h5: "text-[20px] font-medium leading-[1.4]",
    "h5-regular": "text-[20px] font-normal leading-[1.4]",
    h6: "text-[17px] font-normal leading-[1.6]",
    "h6-semibold": "text-[17px] font-semibold leading-[1.6]",
    "subtitle-1": "text-[20px] font-light leading-[1.4]",
    "subtitle-2": "text-[17px] font-medium leading-[1.4]",
    "body-1": "text-[20px] font-normal leading-[1.4]",
    "body-2": "text-[17px] font-normal leading-[1.4]",
    "body-3": "text-[15px] font-normal leading-[1.6]",
    button: "text-[20px] font-semibold leading-[1.4]",
  };

  const Tag =
    variant === "h1"
      ? "h1"
      : variant === "h2"
      ? "h2"
      : variant === "h3"
      ? "h3"
      : variant === "h4"
      ? "h4"
      : variant === "h5"
      ? "h5"
      : variant === "h6"
      ? "h6"
      : "p";

  return React.createElement(
    Tag,
    { className: `${styles[variant]} ${className}` },
    children
  );
}
