import React from "react";

interface ColumnsProps {
  children: React.ReactNode;
  mobileStack?: boolean;
  className?: string;
}

/**
 * Two-column grid.
 * mobileStack: single column on mobile → 2-col on md+.
 * Gap: gap-10 (40px rows on mobile) / md:gap-35 (140px cols on desktop).
 */
export default function Columns({
  children,
  mobileStack = false,
  className = "",
}: ColumnsProps) {
  const base = mobileStack
    ? "grid-cols-1 md:grid-cols-2 gap-10 md:gap-35"
    : "grid-cols-2 gap-8 md:gap-16";

  return (
    <div className={`grid ${base} ${className}`}>
      {children}
    </div>
  );
}
