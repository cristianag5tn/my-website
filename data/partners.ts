export type Partner = {
  img: string;
  number: string;
  descLeft: string;
  descRight: string;
  col3Metric: string;
  col3Label: string;
  logo: string;
  title: string;
  headline: string;
  expandedDesc: string;
  bottom: string;
};

export const partners: Partner[] = [
  {
    img: "/Uniswap.jpg",
    number: "$2T",
    descLeft: "Powering a protocol securing all-time trading volume",
    descRight: "Ecosystem program focused on Uniswap Hooks",
    col3Metric: "12wk",
    col3Label: "Cohort-based incubator",
    logo: "/Uniswap.svg",
    title: "Uniswap Hook Incubator",
    headline: "Ecosystem program focused on Uniswap Hooks",
    expandedDesc:
      "End-to-end strategy, curriculum, and execution supporting builders at protocol scale. Designed to produce production-ready Hooks shipped by real teams.",
    bottom:
      "End-to-end strategy, curriculum, and execution supporting builders at protocol scale.",
  },
  {
    img: "/Learn.jpg",
    number: "1st",
    descLeft: "Ecosystem program",
    descRight: "Open learning adoption",
    col3Metric: "#1",
    col3Label: "Prompting resource globally",
    logo: "/Learn.svg",
    title: "Learn Prompting",
    headline: "From open guide to scalable learning system",
    expandedDesc:
      "Transformed a community-driven resource into a structured, scalable curriculum adopted by practitioners and organizations worldwide.",
    bottom: "From open guide to scalable learning system.",
  },
  {
    img: "/LevelUp.jpg",
    number: "$2T",
    descLeft: "Trading volume secured",
    descRight: "Talent acceleration",
    col3Metric: "6mo",
    col3Label: "Accelerated track",
    logo: "/LevelUp.svg",
    title: "LevelUp Academy",
    headline: "A system for developing talent from the inside",
    expandedDesc:
      "Built a career acceleration system that identifies high-potential individuals and equips them with the skills to grow within the ecosystem.",
    bottom: "A system for developing talent from the inside.",
  },
  {
    img: "/GTM.jpg",
    number: "1st",
    descLeft: "Builders shipping production",
    descRight: "Execution framework",
    col3Metric: "8wk",
    col3Label: "Intensive program",
    logo: "/Learn.svg",
    title: "GTM Engineer Foundations",
    headline: "Where technical skill meets go-to-market execution",
    expandedDesc:
      "A program built for engineers ready to own GTM — combining technical depth with positioning, outreach, and deal execution in one cohesive curriculum.",
    bottom: "Where technical skill meets go-to-market execution.",
  },
];

export const partnerRows: [number, number][] = [
  [0, 1],
  [2, 3],
];
