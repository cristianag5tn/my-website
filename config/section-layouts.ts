/**
 * section-layouts.ts
 *
 * Layout tokens for each page section, keyed by breakpoint.
 * Content, images, and copy live in the JSX and /data files.
 * Only spacing, sizing, and positioning are defined here.
 *
 * Usage:
 *   import { hero, featureRows, experiences } from "@/config/section-layouts"
 *   <section className={`relative ${hero.section} text-white`}>
 */

/* ─────────────────────────────────────────────
   HERO
───────────────────────────────────────────── */
export const hero = {
  /** Full-section min-height per breakpoint */
  section:   "min-h-[110vh] md:min-h-screen lg:min-h-[120vh] overflow-hidden",

  /** Top gradient fade height per breakpoint */
  fadeTop:   "h-[64vh] md:h-[80vh]",

  /** Navigation bar wrappers */
  nav: {
    mobile:  "absolute top-4 left-0 right-0 z-20 px-5",
    desktop: "absolute top-6 md:top-8 left-1/2 -translate-x-1/2 z-20 w-[90vw] max-w-190",
  },

  /** Hero content block positioning + padding */
  content: {
    mobile:  "pt-28 px-5",
    desktop: "max-w-225 mx-auto px-5 sm:px-6 md:px-8 lg:px-10 pt-32 sm:pt-40 lg:pt-48 text-center",
  },

  /** Main H1 sizing and spacing */
  heading: {
    mobile:  "text-[32px] leading-[1.5] tracking-tight font-semibold text-white",
    desktop: "text-[38px] sm:text-[52px] lg:text-[72px] leading-[1.05] tracking-tight font-semibold max-w-225 mx-auto",
  },

  /** Sub-copy layout */
  subtext: {
    mobile:  "mt-12 flex flex-col gap-3",
    desktop: "mt-8 md:mt-14 max-w-175 mx-auto",
  },
}

/* ─────────────────────────────────────────────
   FEATURE ROWS  (Problem → Solution blocks)
───────────────────────────────────────────── */
export const featureRows = {
  /** Passed to <Section className="..."> */
  section: "border-t border-white/5 relative bg-background-900 pb-4",

  /** Section heading above all rows */
  heading: "text-[24px] md:text-[32px] font-semibold leading-[1.5] mb-12 md:mb-24 text-center",

  /** Outer list container — tighter gap on mobile, looser on desktop */
  list:    "flex flex-col gap-12 md:gap-8",
}

/* ─────────────────────────────────────────────
   EXPERIENCES ORNAMENTAL
───────────────────────────────────────────── */
export const experiences = {
  /** Inline <section> — custom top/bottom padding per breakpoint */
  section:  "w-full relative pt-4 pb-16 md:py-24 bg-background-900 overflow-hidden",

  /** Bottom fade height */
  fadeBot:  "h-[160px] md:h-[260px]",

  /** Background ornament image sizing per breakpoint */
  bgImage:  "w-[120%] max-w-none object-cover opacity-40 scale-110 md:w-[80%] md:max-w-[1100px] md:object-contain md:opacity-95 md:scale-100 md:-translate-y-4",

  /** Chip row wrapper — constrained on mobile, unconstrained on desktop */
  chips:    "flex flex-wrap justify-center gap-3 md:gap-4 max-w-90 md:max-w-none mx-auto",

  /** Individual chip pill */
  chip:     "px-5 md:px-6 py-2.5 rounded-full border border-white/20 text-[15px] text-white/80 bg-black/60",

  /** Centre headline sizing and vertical rhythm */
  heading:  "text-[30px] md:text-[40px] font-bold leading-[1.15] tracking-tight text-white mt-12 mb-10 md:mb-14",
}
