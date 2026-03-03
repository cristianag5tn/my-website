export type CaseStudy = {
  id: number;
  label: string;
  title: string;
  desc: string;
  image: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: 0,
    label: "Maven",
    title: "First Cohort Based Courses on Maven",
    desc: "Helped define the cohort-based learning model on Maven, shaping how experts turned knowledge into structured, high-impact programs.",
    image: "/hero.jpg",
  },
  {
    id: 1,
    label: "On Deck",
    title: "Founder Fellowship Programs",
    desc: "Designed and scaled community-driven fellowships for ambitious founders building category-defining companies.",
    image: "/hero.jpg",
  },
  {
    id: 2,
    label: "Thinkful",
    title: "Scaled Global Bootcamps",
    desc: "Expanded high-impact bootcamps across markets, aligning curriculum, outcomes, and employer pipelines.",
    image: "/hero.jpg",
  },
  {
    id: 3,
    label: "Private Client",
    title: "Executive Learning Accelerators",
    desc: "Created premium accelerator programs for senior operators transitioning into new leadership domains.",
    image: "/hero.jpg",
  },
];
