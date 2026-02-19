import React from "react";

interface BlockProps {
  children?: React.ReactNode;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function Block({
  children,
  height = 120,
  className = "",
  style,
}: BlockProps) {
  return (
    <div
      className={`rounded-xl ${className}`}
      style={{
        height: `${height}px`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
