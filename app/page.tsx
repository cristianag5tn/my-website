"use client"

import { useState } from "react"

import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Columns from "@/components/layout/Columns";
import Stack from "@/components/layout/Stack";
import Block from "@/components/layout/Block";
import Typography from "@/components/Typography";

/* ================= PARTNER CARD COMPONENT ================= */

type PartnerCardProps = {
  image: string
  metricLeft: string
  metricLeftLabel: string
  metricRight: string
  metricRightLabel: string
  logo: string
  title: string
  desc: string
}

function PartnerCard({
  image,
  metricLeft,
  metricLeftLabel,
  metricRight,
  metricRightLabel,
  logo,
  title,
  desc,
}: PartnerCardProps) {
  return (
    <div className="relative rounded-[32px] overflow-hidden h-[420px]">

      {/* IMAGE TOP */}
      <div className="relative h-[62%]">

        <img
          src={image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover brightness-[0.72]"
        />

        {/* subtle dark wash */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-transparent" />

        {/* METRICS */}
        <div className="relative z-10 p-10 pr-14 flex justify-between">

          <div className="max-w-[220px]">
            <div className="text-[42px] font-semibold text-white tracking-tight">
              {metricLeft}
            </div>
            <div className="text-[13px] text-white/70 mt-3 leading-snug">
              {metricLeftLabel}
            </div>
          </div>

          <div className="max-w-[160px] text-right">
            <div className="text-[28px] font-semibold text-white">
              {metricRight}
            </div>
            <div className="text-[13px] text-white/70 mt-3 leading-snug">
              {metricRightLabel}
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM GLASS PANEL */}
      <div className="relative h-[38%] bg-black/60 backdrop-blur-xl border-t border-white/5 p-10 flex flex-col justify-center">

        <div className="flex items-center gap-4 mb-4">

          {/* horizontal logo */}
          <div className="px-5 py-2 bg-white/10 rounded-md text-[11px] text-white/80 tracking-wide">
            {logo}
          </div>

          <div className="flex items-center gap-2 text-white font-semibold text-[20px]">
            {title}
            <span className="text-white/50 text-[22px]">›</span>
          </div>

        </div>

        <div className="text-white/60 text-[14px] leading-relaxed max-w-[85%]">
          {desc}
        </div>

      </div>

    </div>
  )
}

/* ================= SECTION DIVIDER ================= */

function SectionDivider() {
  return (
    <div className="w-full flex justify-center py-20">
      <div className="w-full max-w-[1200px] h-px bg-white/5" />
    </div>
  )
}

function SectionDividerWithCurve() {
  return (
    <div className="relative py-29">
      <div className="w-full max-w-[1200px] mx-auto h-px bg-white/5" />

      <svg
        className="absolute left-1/2 -translate-x-1/2 top-0 pointer-events-none opacity-60"
        width="1180"
        height="320"
        viewBox="0 0 1400 220"
        fill="none"
      >
        <path
          d="M0 180 C 350 20, 1050 20, 1400 180"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
        />
      </svg>
    </div>
  )
}

/* ================= HOME ================= */

export default function Home() {

  return (
    <main className="text-white">

      {/* ================= HERO ================= */}
<section className="relative min-h-[140vh] overflow-hidden text-white">

  {/* Background */}
  <div className="absolute inset-0">
    <img
      src="/hero.jpg"
      alt=""
      className="w-full h-full object-cover scale-[1.05] brightness-100 contrast-90"
    />
  </div>

  {/* TOP FADE – strong readability version */}
<div
  className="absolute top-0 left-0 right-0 h-[72vh] pointer-events-none"
  style={{
    background: `linear-gradient(to bottom,
      rgba(0,0,0,1) 0%,
      rgba(0,0,0,0.80) 15%,
      rgba(0,0,0,0.70) 30%,
      rgba(0,0,0,0.60) 45%,
      rgba(0,0,0,0.50) 60%,
      rgba(0,0,0,0.40) 72%,
      rgba(0,0,0,0.30) 82%,
      transparent 100%
    )`
  }}
/>

  {/* BOTTOM FADE */}
  <div
    className="absolute bottom-0 left-0 right-0 h-[38vh] pointer-events-none"
    style={{
      background: `linear-gradient(to top,
        rgba(0,0,0,0.9) 0%,
        rgba(0,0,0,0.6) 35%,
        rgba(0,0,0,0.25) 65%,
        transparent 100%
      )`
    }}
  />

  {/* Bottom melt into next section */}
  <div
    className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
    style={{
      background:
        "linear-gradient(to bottom, transparent 0%, var(--color-surface-900) 100%)"
    }}
  />

  {/* ================= NAVIGATION ================= */}
  <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
    <div
      className="
        w-[760px]
        h-12
        px-6
        flex items-center justify-between
        rounded-xl
        bg-black/70
        backdrop-blur-sm
        border border-white/5
        shadow-[0_8px_30px_rgba(0,0,0,0.6)]
      "
    >
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/atrium-logo.svg"
          alt="Atrium"
          className="h-[20px] w-auto object-contain"
        />
      </div>

      <div className="flex items-center gap-8 text-sm text-white/70">
        <span className="hover:text-white transition cursor-pointer">
          About us
        </span>

        {/* NAV BUTTON */}
        <div className="relative inline-block group">

          {/* Bottom slab */}
          <div
            className="absolute inset-0 translate-x-[4px] translate-y-[4px] rounded-xl"
            style={{ background: "#059669" }}
          />

          {/* Main surface */}
          <div
            className="
              relative
              px-5 py-2
              rounded-xl
              text-sm font-medium
              text-black
              transition-all duration-150
              group-hover:translate-x-[1px]
              group-hover:translate-y-[1px]
            "
            style={{
              background: "#BFF3DA",
              boxShadow: "0 6px 14px rgba(0,0,0,0.25)"
            }}
          >
            Work with us
            <div className="absolute inset-0 rounded-xl border border-white/40 opacity-30 pointer-events-none" />
          </div>

        </div>
      </div>
    </div>
  </div>

  {/* ================= HERO CONTENT ================= */}
  <div className="relative z-10 max-w-[1100px] mx-auto px-6 pt-40 text-center">

    {/* HEADLINE */}
    <h1
      className="
        text-6xl md:text-7xl
        leading-[1.05]
        tracking-tight
        font-semibold
        max-w-[1000px]
        mx-auto
      "
    >
      BUILDING EXPERTISE
      <br />
      THROUGH{" "}
      <span style={{ color: "var(--color-primary-600)" }}>
        EDUCATION
      </span>
    </h1>

    {/* SUBCOPY */}
    <div className="mt-14 max-w-[700px] mx-auto">
      <div className="grid grid-cols-2 gap-14 text-left">

        <p className="text-lg text-white/85 leading-snug font-medium">
          Turns practitioners
          <br />
          Into Experts
        </p>

        <p className="text-base text-white/75 leading-relaxed">
          An education studio building programs that turn practitioners into experts.
          We drive adoption, retention, and scale for our partners.
        </p>

      </div>
    </div>

  </div>

</section>


      {/* ================= CONTENT ================= */}
      <Section
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          position: "relative",
        }}
      >

        <Container>
          <Stack gap={40}>

            {/* ================= PRODUCT ACTIVATION ================= */}
<Columns cols={2} gap={140} className="items-center relative">

  {/* IMAGE SIDE */}
  <div className="relative">

    <div className="relative rounded-3xl overflow-hidden">
      <img
        src="Product_Activation.jpg"
        alt=""
        className="w-full h-[420px] object-cover"
      />

      {/* Bottom Fade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(
              to top,
              rgba(0,0,0,0.95) 0%,
              rgba(0,0,0,0.85) 18%,
              rgba(0,0,0,0.65) 35%,
              rgba(0,0,0,0.35) 55%,
              transparent 75%
            )
          `
        }}
      />
    </div>

    {/* Floating Card */}
    <div
      className="absolute left-0 w-[360px] max-w-[90%] p-6 rounded-2xl backdrop-blur-md"
      style={{
        top: "0",
        transform: "translate(-20%, -20%)",
        background: "rgba(10,10,10,0.95)",
        border: "1px solid rgba(255,255,255,0.06)",
        boxShadow: "0 40px 100px rgba(0,0,0,0.8)",
      }}
    >
      <div className="flex items-center gap-5">
        <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
          <img src="Product_Activation.jpg" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="text-base text-white/85 leading-relaxed">
          Software company with a complex product that needs customer
          education driving actual usage
        </div>
      </div>
    </div>

  </div>

  {/* TEXT SIDE */}
  <Stack gap={24}>
    <div className="flex items-start gap-3 text-sm text-white/60 leading-relaxed">
      <span className="w-2 h-2 mt-2 rounded-full" style={{ background: "var(--color-primary-600)" }} />
      You’ve built something powerful, but users don’t reach the “aha”
      moment fast enough to stick.
    </div>

    <Typography variant="h3">Product Activation</Typography>

    <Typography variant="body-2" className="text-[var(--color-foreground-70)] leading-relaxed">
      Create structured education pipelines that guide users from onboarding
      to mastery—driving real adoption, retention, and measurable growth.
    </Typography>
  </Stack>

</Columns>
<SectionDivider />


{/* ================= DEVELOPER ADOPTION ================= */}
<Columns cols={2} gap={140} className="items-center relative">

  {/* TEXT SIDE */}
  <Stack gap={24}>
    <div className="flex items-start gap-3 text-sm text-white/60 leading-relaxed">
      <span className="w-2 h-2 mt-2 rounded-full" style={{ background: "var(--color-primary-600)" }} />
      Developers are interested, but learning curves and unclear entry
      points stop real building from happening.
    </div>

    <Typography variant="h3">Developer Adoption</Typography>

    <Typography variant="body-2" className="text-[var(--color-foreground-70)] leading-relaxed">
      Design educational journeys that reduce friction, accelerate onboarding,
      and transform curiosity into active builders and ecosystem growth.
    </Typography>
  </Stack>

  {/* IMAGE SIDE */}
  <div className="relative">

    <div className="relative rounded-3xl overflow-hidden">
      <img
        src="Developer_Adoption.jpg"
        alt=""
        className="w-full h-[420px] object-cover"
      />

      {/* Bottom Fade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(
              to top,
              rgba(0,0,0,0.95) 0%,
              rgba(0,0,0,0.85) 18%,
              rgba(0,0,0,0.65) 35%,
              rgba(0,0,0,0.35) 55%,
              transparent 75%
            )
          `
        }}
      />
    </div>

    {/* Floating Card */}
    <div
      className="absolute right-0 w-[360px] max-w-[90%] p-6 rounded-2xl backdrop-blur-md"
      style={{
        bottom: "0",
        transform: "translate(20%, 20%)",
        background: "rgba(10,10,10,0.96)",
        border: "1px solid rgba(255,255,255,0.06)",
        boxShadow: "0 40px 120px rgba(0,0,0,0.85)",
      }}
    >
      <div className="flex items-center gap-5">
        <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
          <img src="Developer_Adoption.jpg" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="text-base text-white/85 leading-relaxed">
          Protocol launching a major feature and seeking rapid adoption.
        </div>
      </div>
    </div>

  </div>

</Columns>
<SectionDivider />


{/* ================= GO TO MARKET ================= */}
<Columns cols={2} gap={140} className="items-center relative">

  {/* IMAGE SIDE */}
  <div className="relative">

    <div className="relative rounded-3xl overflow-hidden">
      <img src="Go-To-Market.jpg" alt="" className="w-full h-[420px] object-cover" />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(
              to top,
              rgba(0,0,0,0.95) 0%,
              rgba(0,0,0,0.85) 18%,
              rgba(0,0,0,0.65) 35%,
              rgba(0,0,0,0.35) 55%,
              transparent 75%
            )
          `
        }}
      />
    </div>

    {/* Floating Card */}
    <div
      className="absolute right-0 w-[360px] max-w-[90%] p-6 rounded-2xl backdrop-blur-md"
      style={{
        top: "50%",
        transform: "translate(20%, -50%)",
        background: "rgba(10,10,10,0.95)",
        border: "1px solid rgba(255,255,255,0.06)",
        boxShadow: "0 40px 100px rgba(0,0,0,0.8)",
      }}
    >
      <div className="flex items-center gap-5">
        <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
          <img src="Go-To-Market.jpg" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="text-base text-white/85 leading-relaxed">
          Education business looking to scale products or hand them off entirely
        </div>
      </div>
    </div>

  </div>

  {/* TEXT SIDE */}
  <Stack gap={24}>
    <div className="flex items-start gap-3 text-sm text-white/60 leading-relaxed">
      <span className="w-2 h-2 mt-2 rounded-full" style={{ background: "var(--color-primary-600)" }} />
      You’re launching something valuable, but education isn’t converting
      attention into sustained growth.
    </div>

    <Typography variant="h3">Go-To-Market</Typography>

    <Typography variant="body-2" className="text-[var(--color-foreground-70)] leading-relaxed">
      Use education as a growth engine—aligning launch strategy, adoption,
      and long-term market expansion.
    </Typography>
  </Stack>

</Columns>
<SectionDivider />


{/* ================= TALENT NETWORK ================= */}
<Columns cols={2} gap={140} className="items-center relative">

  {/* TEXT SIDE */}
  <Stack gap={24}>
    <div className="flex items-start gap-3 text-sm text-white/60 leading-relaxed">
      <span className="w-2 h-2 mt-2 rounded-full" style={{ background: "var(--color-primary-600)" }} />
      You need founders, operators, or builders—but there’s no scalable
      way to find, train, and surface the right ones.
    </div>

    <Typography variant="h3">Talent Network</Typography>

    <Typography variant="body-2" className="text-[var(--color-foreground-70)] leading-relaxed">
      Build structured ecosystems that connect learning pathways with
      real-world opportunity and long-term practitioner growth.
    </Typography>
  </Stack>

  {/* IMAGE SIDE */}
  <div className="relative">

    <div className="relative rounded-3xl overflow-hidden">
      <img src="Talent_Network.jpg" alt="" className="w-full h-[420px] object-cover" />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(
              to top,
              rgba(0,0,0,0.95) 0%,
              rgba(0,0,0,0.85) 18%,
              rgba(0,0,0,0.65) 35%,
              rgba(0,0,0,0.35) 55%,
              transparent 75%
            )
          `
        }}
      />
    </div>

    {/* Floating Card */}
    <div
      className="absolute right-0 w-[360px] max-w-[90%] p-6 rounded-2xl backdrop-blur-md"
      style={{
        top: "72%",
        transform: "translate(20%, -50%)",
        background: "rgba(10,10,10,0.95)",
        border: "1px solid rgba(255,255,255,0.06)",
        boxShadow: "0 40px 100px rgba(0,0,0,0.8)",
      }}
    >
      <div className="flex items-center gap-5">
        <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
          <img src="Talent_Network.jpg" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="text-base text-white/85 leading-relaxed">
          VC firm looking to build an accelerator to support portfolio companies
        </div>
      </div>
    </div>

  </div>

</Columns>

<SectionDividerWithCurve />

          </Stack>
        </Container>
      </Section>


            {/* ================= EXPERIENCES ORNAMENTAL ================= */}
<section className="relative py-16 bg-[var(--color-surface-900)] overflow-hidden">

  {/* soft top blend */}
  <div className="absolute top-0 left-0 right-0 h-32 
    bg-gradient-to-b from-[var(--color-surface-900)] 
    to-transparent pointer-events-none" />

  {/* Ornamental PNG (Decorative Only) */}
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

    <img
  src="/experiences-ornament.png"
  alt=""
  className="
    w-[80%]
    max-w-[1100px]
    object-contain
    opacity-95
    -translate-y-4
  "
/>

  </div>

  {/* Content */}
  <div className="relative z-10 max-w-[1100px] mx-auto px-6 text-center">

    {/* Top Chips */}
    <div className="flex justify-center gap-4 flex-wrap mb-12">
      {["Bootcamps", "Workshops", "Courses", "Accelerators"].map((item) => (
        <span
          key={item}
          className="px-6 py-2 rounded-full border border-white/20 text-sm text-white/80 bg-black/60"
        >
          {item}
        </span>
      ))}
    </div>

    {/* Headline */}
    <h4 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] text-white mb-14">
      Experiences we build
      <br />
      with you
    </h4>

    {/* Bottom Chips */}
    <div className="flex justify-center gap-4 flex-wrap">
      {["Subscriptions", "Communities", "Fellowships"].map((item) => (
        <span
          key={item}
          className="px-6 py-2 rounded-full border border-white/20 text-sm text-white/80 bg-black/60"
        >
          {item}
        </span>
      ))}
    </div>

  </div>

</section>


{/* ================= STACKED CASE STUDIES ================= */}

{(() => {

  const caseStudies = [
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
  ]

  const [activeIndex, setActiveIndex] = useState(3)

  const total = caseStudies.length
  const offset = 78
  const totalOffset = offset * (total - 1)

  return (

    <section className="relative py-40 bg-[var(--color-surface-900)] overflow-hidden">

      {/* Heading */}
      <div className="text-center mb-24 max-w-[760px] mx-auto px-6">
        <h2 className="text-[32px] md:text-[38px] font-medium leading-tight text-white/90">
          Category defining programs,
          <br />
          built to world-class standards
        </h2>
      </div>

      {/* ================= STACK WRAPPER ================= */}
<div className="relative max-w-[1120px] mx-auto h-[460px]">

  {caseStudies.map((item, i) => {

    const order = (i - activeIndex + total) % total
    const indexFromFront = total - 1 - order
    const isFront = indexFromFront === 0

    return (
      <div
        key={item.id}
        onClick={() => setActiveIndex(i)}
        className="absolute top-0 right-0 rounded-3xl overflow-hidden grid grid-cols-12 cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          width: `calc(100% - ${totalOffset}px)`,
          height: "100%",
          transform: `translateX(-${indexFromFront * offset}px)`,
          zIndex: 10 + order,
          background: "#0F0F0F",
          border: "1px solid rgba(255,255,255,0.05)",
          boxShadow: isFront
            ? "0 20px 50px rgba(0,0,0,0.45)"
            : "none",
        }}
      >

        {/* LEFT COPY */}
        <div className="col-span-6 px-14 py-14 flex flex-col justify-center bg-[#0F0F0F]">

          <div className="text-xs text-white/30 mb-6 tracking-[0.25em] uppercase">
            {item.label}
          </div>

          <div className="text-[22px] font-semibold mb-5 text-white leading-snug">
            {item.title}
          </div>

          <div className="text-white/60 leading-relaxed text-sm max-w-[380px]">
            {item.desc}
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="col-span-6 relative p-8 flex items-center bg-[#0F0F0F]">

          <div className="relative w-full h-full rounded-2xl overflow-hidden">

            <img
              src={item.image}
              alt=""
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#0F0F0F]/90" />

          </div>

        </div>

      </div>
    )
  })}

</div>

    </section>
  )
})()}


{/* ================= PROGRAM TRANSFORMATION ================= */}
<section className="relative py-32 bg-[var(--color-surface-900)]">

  <div className="max-w-[1200px] mx-auto px-6">

    {/* IMAGE PANEL (DI DALAM GUIDELINE) */}
    <div className="relative min-h-[950px] overflow-hidden rounded-b-[24px]">

      {/* IMAGE */}
      <img
        src="program_transformation.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* TOP GRADIENT ONLY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 pt-28 text-center max-w-[900px] mx-auto">

        <div className="text-sm text-white/60 mb-3">
          Programs That Deliver
        </div>

        <div
          className="text-sm font-medium mb-12"
          style={{ color: "var(--color-primary-600)" }}
        >
          Life Changing Transformations
        </div>

        <h2 className="text-[36px] md:text-[46px] font-medium leading-[1.2] text-white/90">
          We don’t just optimize for outcomes.
          <br />
          <span className="text-white/65">
            We design programs that change how people see themselves
            and what they believe they can do next.
          </span>
        </h2>
      </div>

      {/* ================= TESTIMONIAL FLOAT ================= */}
      <div className="absolute bottom-16 left-0 right-0 z-10 overflow-hidden">

        <div className="flex gap-10 px-12 animate-marquee">

          {[
            {
              text: "Before the program, I always felt like I was catching up. Halfway through, that feeling disappeared.",
              name: "Jessica Blund",
              role: "Program participant",
            },
            {
              text: "I learned how to make decisions with confidence and trust my own judgment.",
              name: "Steward Angle",
              role: "Early-career operator",
            },
            {
              text: "The shift wasn’t just tactical. It was identity-level.",
              name: "Mason Lee",
              role: "Founder",
            },
          ]
            .concat([
              {
                text: "Before the program, I always felt like I was catching up. Halfway through, that feeling disappeared.",
                name: "Jessica Blund",
                role: "Program participant",
              },
              {
                text: "I learned how to make decisions with confidence and trust my own judgment.",
                name: "Steward Angle",
                role: "Early-career operator",
              },
              {
                text: "The shift wasn’t just tactical. It was identity-level.",
                name: "Mason Lee",
                role: "Founder",
              },
            ])
            .map((item, index) => (
              <div
                key={index}
                className="min-w-[380px] max-w-[380px] p-8 rounded-[24px]"
                style={{
                  background: "rgba(18,18,18,0.72)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.45)",
                }}
              >
                <div className="text-white/80 leading-relaxed mb-6 text-[14px]">
                  {item.text}
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20" />
                  <div>
                    <div
                      className="font-semibold text-sm"
                      style={{ color: "var(--color-primary-600)" }}
                    >
                      {item.name}
                    </div>
                    <div className="text-xs text-white/50">
                      {item.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}

        </div>
      </div>

    </div>
  </div>
</section>


{/* ================= FULL STACK / MODULAR ================= */}
<section className="relative py-16 bg-[var(--color-surface-900)] overflow-hidden">

  <div className="max-w-[1100px] mx-auto px-6">

    {/* ================= TOP TEXT ================= */}
    <div className="grid md:grid-cols-2 gap-20 mb-24 items-start">

      <div>
        <h2 className="text-[44px] md:text-[54px] font-medium leading-[1.05] text-white/90">
          Full-stack or Modular.
          <br />
          <span style={{ color: "var(--color-primary-600)" }}>
            Built Around You.
          </span>
        </h2>
      </div>

      <div className="text-white/60 leading-relaxed text-[18px] max-w-[440px]">
        We can own strategy & execution end-to-end OR partner
        with your team on where guidance is most needed.
      </div>

    </div>

    {/* ================= STACK PANELS ================= */}
    {(() => {

      const panels = [
        {
          id: 0,
          number: "01",
          title: "Strategy",
          eyebrow: "We own strategy and execution.",
          desc: "Adapting to your business problem, choosing the right metrics, and iterating quickly.",
          image: "Strategy.png",
          icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M12 3L15 9L21 12L15 15L12 21L9 15L3 12L9 9L12 3Z"
                stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          )
        },
        {
          id: 1,
          number: "02",
          title: "Education",
          eyebrow: "From blueprint to build.",
          desc: "Architecting scalable systems that transform insight into repeatable performance.",
          image: "Education.png",
          icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <rect x="4" y="4" width="6" height="6"
                stroke="currentColor" strokeWidth="1.5"/>
              <rect x="14" y="4" width="6" height="6"
                stroke="currentColor" strokeWidth="1.5"/>
              <rect x="9" y="14" width="6" height="6"
                stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          )
        },
        {
          id: 2,
          number: "03",
          title: "Growth",
          eyebrow: "Execution that compounds.",
          desc: "Shipping, measuring, refining with tight feedback loops.",
          image: "Growth.png",
          icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M12 5L19 12L12 19"
                stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          )
        },
        {
          id: 3,
          number: "04",
          title: "Operations",
          eyebrow: "What gets measured evolves.",
          desc: "Continuous performance tuning grounded in constraints.",
          image: "Operations.png",
          icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9"
                stroke="currentColor" strokeWidth="1.5"/>
              <path d="M12 7V12L15 15"
                stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          )
        },
      ]

      const [activeIndex, setActiveIndex] = useState(0)

      const total = panels.length
      const offset = 60
      const totalOffset = offset * (total - 1)

      return (
        <div className="relative h-[520px] overflow-hidden">

          {panels.map((panel, i) => {

            const order = (i - activeIndex + total) % total
            const indexFromFront = total - 1 - order
            const isFront = indexFromFront === 0

            return (
              <div
                key={panel.id}
                onClick={() => setActiveIndex(i)}
                className="absolute top-0 right-0 h-full cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  width: `calc(100% - ${totalOffset}px)`,
                  transform: `translateX(-${indexFromFront * offset}px)`,
                  zIndex: 20 + order,
                }}
              >

                {/* ===== OUTER FRAME (TIPIS, ELEGAN) ===== */}
                <div
                  className="w-full h-full rounded-[30px]"
                  style={{
                    background: "#0C0C0C",
                    padding: "12px",
                    border: "1px solid rgba(255,255,255,0.06)",
                    boxShadow: isFront
                      ? "0 18px 50px rgba(0,0,0,0.40)"
                      : "0 6px 20px rgba(0,0,0,0.22)",
                  }}
                >

                  {/* ===== INNER CARD ===== */}
                  <div className="w-full h-full rounded-[22px] overflow-hidden grid grid-cols-12 bg-[#0F0F0F]">

                    {/* IMAGE SIDE */}
                    <div className="col-span-7 relative">

                      <img
                        src={panel.image}
                        alt=""
                        className="w-full h-full object-cover"
                      />

                      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

                      <div className="absolute top-6 left-6 text-[26px] font-semibold text-white/85">
                        {panel.number}
                      </div>

                    </div>

                    {/* CONTENT SIDE */}
                    <div className="col-span-5 p-14 flex flex-col justify-center bg-[#0F0F0F]">

                      {isFront && (
                        <>
                          <div className="text-white/60 text-[15px] mb-6 leading-relaxed">
                            {panel.eyebrow}
                          </div>

                          {/* ICON + TITLE */}
                          <div className="flex items-center gap-4 mb-6">
                            <div
                              className="text-[var(--color-primary-600)]"
                            >
                              {panel.icon}
                            </div>

                            <div
                              className="text-[28px] font-semibold"
                              style={{ color: "var(--color-primary-600)" }}
                            >
                              {panel.title}
                            </div>
                          </div>

                          <div className="text-white/70 leading-relaxed text-[16px]">
                            {panel.desc}
                          </div>
                        </>
                      )}

                    </div>

                  </div>
                </div>

              </div>
            )
          })}

        </div>
      )

    })()}

  </div>
</section>
<SectionDivider />


{/* ================= PARTNER IMPACT ================= */}
<section className="relative py-8 bg-[var(--color-surface-900)]">

  <div className="max-w-[1120px] mx-auto px-4">

    {/* HEADING */}
    <div className="text-center mb-14">
      <h2 className="text-[38px] md:text-[46px] font-medium leading-[1.1] text-white/90">
        <span style={{ color: "var(--color-primary-600)" }}>
          What We've Built
        </span>{" "}
        with Our Partners
      </h2>
    </div>

    <div className="grid md:grid-cols-2 gap-6">

      {[
        {
          img: "Uniswap.jpg",
          number: "$2T",
          descLeft: "Powering a protocol securing all-time trading volume",
          descRight: "Ecosystem program focused on Uniswap Hooks",
          logo: "Uniswap.svg",
          title: "Uniswap Hook Incubator",
          bottom: "End-to-end strategy, curriculum, and execution supporting builders at protocol scale."
        },
        {
          img: "Learn.jpg",
          number: "1st",
          descLeft: "Ecosystem program",
          descRight: "Open learning adoption",
          logo: "Learn.svg",
          title: "Learn Prompting",
          bottom: "From open guide to scalable learning system."
        },
        {
          img: "LevelUp.jpg",
          number: "$2T",
          descLeft: "Trading volume secured",
          descRight: "Talent acceleration",
          logo: "LevelUp.svg",
          title: "LevelUp Academy",
          bottom: "A system for developing talent from the inside."
        },
        {
          img: "GTM.jpg",
          number: "1st",
          descLeft: "Builders shipping production",
          descRight: "Execution framework",
          logo: "Learn.svg",
          title: "GTM Engineer Foundations",
          bottom: "Where technical skill meets go-to-market execution."
        }
      ].map((card, i) => (
        <div key={i} className="relative h-[360px] rounded-[26px] overflow-hidden">

          <img
            src={card.img}
            alt=""
            className="absolute inset-0 w-full h-full object-cover brightness-[0.45]"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent" />

          {/* ================= TOP AREA ================= */}
          <div className="absolute top-0 left-0 right-0 px-10 pt-8 h-[135px] z-10 flex">

            {/* LEFT COLUMN */}
            <div className="w-1/2 flex flex-col justify-between">

              <div className="flex items-center h-[70px]">
                <div className="text-[32px] font-semibold text-white">
                  {card.number}
                </div>
              </div>

              <div className="h-[36px] text-[12px] font-light text-white/60 leading-snug">
                {card.descLeft}
              </div>

            </div>

            {/* RIGHT COLUMN */}
            <div className="w-1/2 flex flex-col justify-between">

              <div className="flex items-center h-[70px]">
                <div className="text-[14px] font-semibold leading-[1.25] text-white">
                  Builders<br/>shipping<br/>production
                </div>
              </div>

              <div className="h-[36px] text-[12px] font-light text-white/60 leading-snug">
                {card.descRight}
              </div>

            </div>

          </div>

          {/* ================= BOTTOM ================= */}
          <div className="absolute bottom-0 left-0 right-0 h-[32%] bg-gradient-to-b from-transparent via-black/85 to-black/95 backdrop-blur-sm">

            <div className="h-full px-10 pt-4 pb-4 flex flex-col justify-start">

              <div className="flex items-center gap-3 mb-2">
                <img
                  src={card.logo}
                  alt=""
                  className="h-5 w-auto object-contain opacity-90"
                />
                <div className="flex items-center gap-2 text-white text-[14px] font-medium">
                  {card.title}
                  <span className="text-white/60 text-[14px]">›</span>
                </div>
              </div>

              <div className="text-white/65 text-[13px] font-light leading-relaxed max-w-[80%]">
                {card.bottom}
              </div>

            </div>

          </div>

        </div>
      ))}

    </div>
  </div>
</section>


      {/* ================= FINAL CTA + FOOTER ================= */}
<section className="relative bg-[var(--color-surface-900)] overflow-hidden">

  {/* ================= BACKGROUND ================= */}
  <div className="absolute inset-0">
    <img
      src="CTA_Background.jpg"
      alt=""
      className="w-full h-full object-cover"
    />
  </div>

  {/* ULTRA SMOOTH TOP BLEND */}
<div
  className="absolute top-0 left-0 right-0 h-[650px] pointer-events-none"
  style={{
    background: `
      linear-gradient(
        to bottom,
        var(--color-surface-900) 0%,
        var(--color-surface-900) 15%,
        rgba(15,15,15,0.95) 30%,
        rgba(15,15,15,0.85) 45%,
        rgba(15,15,15,0.65) 60%,
        rgba(15,15,15,0.40) 75%,
        rgba(15,15,15,0.20) 85%,
        transparent 100%
      )
    `
  }}
/>

  {/* SUBTLE EDGE VIGNETTE */}
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      background:
        "radial-gradient(circle at 50% 40%, rgba(0,0,0,0.35), rgba(0,0,0,0.85))"
    }}
  />

  {/* ================= CTA CONTENT ================= */}
  <div className="relative z-10 min-h-[1150px] flex flex-col items-center justify-center text-center px-6">

    <h2 className="text-[48px] md:text-[56px] font-semibold text-white tracking-tight">
      Build something meaningful together.
    </h2>

    {/* CTA BUTTON */}
    <div className="mt-14">

      <div className="relative inline-block group">

        {/* Bottom slab */}
        <div className="absolute inset-0 translate-x-[4px] translate-y-[4px] rounded-xl bg-[#0E7A52]" />

        {/* Main surface */}
        <div
          className="
            relative
            px-10 py-4
            rounded-xl
            text-sm font-semibold
            transition-all duration-150
            group-hover:translate-x-[1px]
            group-hover:translate-y-[1px]
          "
          style={{
            background: "#BFF3DA",
            color: "#0F0F0F",
            boxShadow: "0 10px 30px rgba(0,0,0,0.35)"
          }}
        >
          Work with us
        </div>

      </div>

    </div>

  </div>

  {/* ================= LARGE ATRIUM LOGO ================= */}
  <div className="absolute bottom-40 left-1/2 -translate-x-1/2 z-10 pointer-events-none opacity-[10]">

    <img
      src="Atrium_Big.png"
      alt=""
      className="w-[1180px] max-w-[95vw] object-contain"
    />

  </div>

  {/* ================= FOOTER ================= */}
  <div className="relative z-20 bg-black/85 border-t border-white/10">

    <div className="max-w-[1200px] mx-auto px-6 py-6 flex justify-between items-center text-sm text-white/60">

      <div>
        © Atrium 2026. All right reserved
      </div>

      <div className="flex gap-10">
        <a href="#" className="hover:text-white transition">
          Twitter
        </a>
        <a href="#" className="hover:text-white transition">
          View Programs
        </a>
      </div>

    </div>

  </div>

</section>

    </main>
  );
}
