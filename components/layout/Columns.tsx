import React from "react";

interface ColumnsProps {
  children: React.ReactNode;
  cols?: number;
  gap?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function Columns({
  children,
  cols = 2,
  gap = 0,
  className = "",
  style,
}: ColumnsProps) {
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
