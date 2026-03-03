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
    <section className={`w-full py-16 md:py-24 2xl:py-28 ${className}`} style={style}>
      {children}
    </section>
  );
}
