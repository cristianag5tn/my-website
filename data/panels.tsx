import React from "react";

export type Panel = {
  id: number;
  number: string;
  title: string;
  eyebrow: string;
  desc: string;
  image: string;
  icon: React.ReactNode;
};

export const panels: Panel[] = [
  {
    id: 0,
    number: "01",
    title: "Strategy",
    eyebrow: "We own strategy and execution.",
    desc: "Adapting to your business problem, choosing the right metrics, and iterating quickly.",
    image: "/Strategy.png",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3L15 9L21 12L15 15L12 21L9 15L3 12L9 9L12 3Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    id: 1,
    number: "02",
    title: "Education",
    eyebrow: "From blueprint to build.",
    desc: "Architecting scalable systems that transform insight into repeatable performance.",
    image: "/Education.png",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="4" width="6" height="6" stroke="currentColor" strokeWidth="1.5" />
        <rect x="14" y="4" width="6" height="6" stroke="currentColor" strokeWidth="1.5" />
        <rect x="9" y="14" width="6" height="6" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 2,
    number: "03",
    title: "Growth",
    eyebrow: "Execution that compounds.",
    desc: "Shipping, measuring, refining with tight feedback loops.",
    image: "/Growth.png",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M5 12H19M12 5L19 12L12 19" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 3,
    number: "04",
    title: "Operations",
    eyebrow: "What gets measured evolves.",
    desc: "Continuous performance tuning grounded in constraints.",
    image: "/Operations.png",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];
