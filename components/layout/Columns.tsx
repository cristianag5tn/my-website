import React from "react";

interface ColumnsProps {
  children: React.ReactNode;
  cols?: number;
  gap?: number;
  mobileGap?: number;
  mobileStack?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function Columns({
  children,
  cols = 2,
  gap = 0,
  mobileGap,
  mobileStack = false,
  className = "",
  style,
}: ColumnsProps) {
  if (mobileStack) {
    return (
      <div
        className={`grid grid-cols-1 md:grid-cols-2 ${className}`}
        style={{
          columnGap: `${gap}px`,
          rowGap: `${mobileGap ?? Math.min(gap, 40)}px`,
          ...style,
        }}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className={`grid ${className}`}
      style={{
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        gap: `${gap}px`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
