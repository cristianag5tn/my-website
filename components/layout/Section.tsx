import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function Section({
  children,
  className = "",
  style,
}: SectionProps) {
  return (
    <section className={`w-full py-24 ${className}`} style={style}>
      {children}
    </section>
  );
}
