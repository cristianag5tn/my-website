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
  style?: React.CSSProperties;
}

/** Font size comes from the CSS custom property (clamp-based fluid type).
 *  Weight and leading are Tailwind classes so callers can override via className. */
const VARIANT_META: Record<Variant, { css: string; tw: string; tag: string }> = {
  h1:           { css: "var(--font-h1)",         tw: "font-medium leading-[1.2]",  tag: "h1" },
  h2:           { css: "var(--font-h2)",         tw: "font-medium leading-[1.4]",  tag: "h2" },
  "h2-bold":    { css: "var(--font-h2)",         tw: "font-bold   leading-[1.4]",  tag: "h2" },
  h3:           { css: "var(--font-h3)",         tw: "font-medium leading-[1.4]",  tag: "h3" },
  "h3-semibold":{ css: "var(--font-h3)",         tw: "font-semibold leading-[1.4]",tag: "h3" },
  h4:           { css: "var(--font-h4)",         tw: "font-medium leading-[1.4]",  tag: "h4" },
  h5:           { css: "var(--font-h5)",         tw: "font-medium leading-[1.4]",  tag: "h5" },
  "h5-regular": { css: "var(--font-h5)",         tw: "font-normal leading-[1.4]",  tag: "h5" },
  h6:           { css: "var(--font-h6)",         tw: "font-normal leading-[1.6]",  tag: "h6" },
  "h6-semibold":{ css: "var(--font-h6)",         tw: "font-semibold leading-[1.6]",tag: "h6" },
  "subtitle-1": { css: "var(--font-subtitle-1)", tw: "font-light  leading-[1.4]",  tag: "p"  },
  "subtitle-2": { css: "var(--font-subtitle-2)", tw: "font-medium leading-[1.4]",  tag: "p"  },
  "body-1":     { css: "var(--font-body-1)",     tw: "font-normal leading-[1.4]",  tag: "p"  },
  "body-2":     { css: "var(--font-body-2)",     tw: "font-normal leading-[1.4]",  tag: "p"  },
  "body-3":     { css: "var(--font-body-3)",     tw: "font-normal leading-[1.6]",  tag: "p"  },
  button:       { css: "var(--font-button)",     tw: "font-semibold leading-[1.4]",tag: "p"  },
};

export default function Typography({
  variant,
  children,
  className = "",
  style,
}: TypographyProps) {
  const { css, tw, tag } = VARIANT_META[variant];

  return React.createElement(
    tag,
    {
      className: `${tw} ${className}`,
      style: { fontSize: css, ...style },
    },
    children,
  );
}
