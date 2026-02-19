import React from "react";
import clsx from "clsx";

interface GridProps {
  children: React.ReactNode;
  cols?: string;
  gap?: string;
  className?: string;
}

export default function Grid({
  children,
  cols = "md:grid-cols-2",
  gap = "gap-12",
  className,
}: GridProps) {
  return (
    <div
      className={clsx(
        "grid",
        cols,
        gap,
        className
      )}
    >
      {children}
    </div>
  );
}
