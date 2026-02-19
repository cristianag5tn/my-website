import React from "react";

interface StackProps {
  children: React.ReactNode;
  gap?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function Stack({
  children,
  gap = 0,
  className = "",
  style,
}: StackProps) {
  return (
    <div
      className={`flex flex-col ${className}`}
      style={{ gap: `${gap}px`, ...style }}
    >
      {children}
    </div>
  );
}
