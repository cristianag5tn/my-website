"use client"

import { useState, useRef, useEffect } from "react"

import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Columns from "@/components/layout/Columns";
import Stack from "@/components/layout/Stack";
import Typography from "@/components/Typography";

/* ================= IMAGE BOTTOM FADE ================= */

function ImageFade() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: `linear-gradient(
          to top,
          var(--color-background-900) 0%,
          rgba(13,13,12,0.85) 18%,
          rgba(13,13,12,0.65) 35%,
          rgba(13,13,12,0.35) 55%,
          transparent 75%
        )`
      }}
    />
  )
}

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

        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/35 to-transparent" />

        {/* METRICS */}
        <div className="relative z-10 p-10 pr-14 flex justify-between">

          <div className="max-w-[220px]">
            <div className="text-[40px] font-semibold text-white tracking-tight">
              {metricLeft}
            </div>
            <div className="text-[15px] text-white/70 mt-3 leading-snug">
              {metricLeftLabel}
            </div>
          </div>

          <div className="max-w-[160px] text-right">
            <div className="text-[24px] font-semibold text-white">
              {metricRight}
            </div>
            <div className="text-[15px] text-white/70 mt-3 leading-snug">
              {metricRightLabel}
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM GLASS PANEL */}
      <div className="relative h-[38%] bg-black/60 backdrop-blur-xl border-t border-white/5 p-10 flex flex-col justify-center">

        <div className="flex items-center gap-4 mb-4">

          <div className="px-5 py-2 bg-white/10 rounded-md text-[15px] text-white/80 tracking-wide">
            {logo}
          </div>

          <div className="flex items-center gap-2 text-white font-semibold text-[20px]">
            {title}
            <span className="text-white/50 text-[20px]">›</span>
          </div>

        </div>

        <div className="text-white/60 text-[15px] leading-relaxed max-w-[85%]">
          {desc}
        </div>

      </div>

    </div>
  )
}

/* ================= SECTION DIVIDERS ================= */

function SectionDivider() {
  return (
    <div className="w-full py-20 bg-background-900">
      <div className="max-w-300 mx-auto px-10">
        <div className="h-px bg-white/5" />
      </div>
    </div>
  )
}

function SectionDividerWithCurve() {
  return (
    <div className="relative py-29 z-10">
      <div className="max-w-300 mx-auto px-10">
        <div className="h-px bg-white/5" />
      </div>

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

/* ================= SCROLL REVEAL ================= */

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return [ref, inView] as const
}

function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
  style: sx,
}: {
  children: React.ReactNode
  delay?: number
  y?: number
  className?: string
  style?: React.CSSProperties
}) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "none" : `translateY(${y}px)`,
      transition: `opacity 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      ...sx,
    }}>
      {children}
    </div>
  )
}

/* ================= BREAKPOINTS ================= */

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false)
  useEffect(() => {
    const mql = window.matchMedia(query)
    const handler = () => setMatches(mql.matches)
    handler()
    mql.addEventListener("change", handler)
    return () => mql.removeEventListener("change", handler)
  }, [query])
  return matches
}

/* ================= HOME ================= */

export default function Home() {

  const isMobile  = useMediaQuery("(max-width: 767px)")
  const isTablet  = useMediaQuery("(min-width: 768px) and (max-width: 1023px)")
  const isLarge   = useMediaQuery("(min-width: 1440px)")

  return (
    <main className="text-white">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[140vh] overflow-hidden text-white">

        {/* Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover scale-[1.05] brightness-100 contrast-90"
          >
            <source src="hero.mp4" type="video/mp4" />
          </video>
        </div>

        {/* TOP FADE */}
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
            background: "linear-gradient(to bottom, transparent 0%, var(--color-background-900) 100%)"
          }}
        />

        {/* ================= NAVIGATION ================= */}
        <div className="absolute top-6 md:top-8 left-1/2 -translate-x-1/2 z-20 w-[90vw] max-w-190">
          <div
            className="
              w-full h-12 px-4 md:px-6
              flex items-center justify-between
              rounded-xl
              bg-black/70 backdrop-blur-sm
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

            <div className="flex items-center gap-6 md:gap-8 text-[15px] text-white/70">
              <span className="hidden md:inline hover:text-white transition cursor-pointer">
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
                    relative px-5 py-2 rounded-xl
                    text-[15px] font-medium text-black
                    transition-all duration-150
                    group-hover:translate-x-[1px] group-hover:translate-y-[1px]
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
        <div className="relative z-10 max-w-300 mx-auto px-5 md:px-10 pt-28 md:pt-36 lg:pt-40 text-left md:text-center">

          {/* HEADLINE */}
          <h1
            className="
              text-[38px] sm:text-[52px] lg:text-[72px]
              leading-[1.05] tracking-tight font-semibold
              max-w-250 mx-0 md:mx-auto
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
          <div className="mt-8 md:mt-14 max-w-175 mx-0 md:mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-14 text-left">

              <p className="text-[17px] md:text-[20px] text-white/85 leading-snug font-medium">
                Turns practitioners
                <br />
                Into Experts
              </p>

              <p className="text-[15px] md:text-[17px] text-white/75 leading-relaxed">
                An education studio building programs that turn practitioners into experts.
                We drive adoption, retention, and scale for our partners.
              </p>

            </div>
          </div>

          {/* MOBILE CTA */}
          <div className="mt-8 md:hidden">
            <div className="relative inline-block group">
              <div className="absolute inset-0 translate-x-1 translate-y-1 rounded-xl" style={{ background: "#059669" }} />
              <div
                className="relative px-8 py-3 rounded-xl text-[15px] font-medium text-black transition-all duration-150 group-hover:translate-x-px group-hover:translate-y-px"
                style={{ background: "#BFF3DA", boxShadow: "0 6px 14px rgba(0,0,0,0.25)" }}
              >
                Work with us
              </div>
            </div>
          </div>

        </div>

      </section>


      {/* ================= CONTENT ================= */}
      <Section className="border-t border-white/5 relative bg-background-900 pb-4">

        <Container>
          <Reveal>
          <h3 className="text-[22px] md:text-[32px] font-semibold leading-[1.2] mb-10 md:mb-24 text-center">
            <span className="text-white">We Solve Business Problems</span>
            {" "}
            <span style={{ color: "var(--color-primary-600)" }}>Through Education</span>
          </h3>
          </Reveal>

          <Stack gap={32}>

            {/* ================= PRODUCT ACTIVATION ================= */}
            <Reveal>
            <Columns cols={2} gap={140} mobileGap={40} mobileStack className="items-center relative">

              {/* IMAGE SIDE */}
              <div className="relative">

                <div className="relative rounded-3xl overflow-hidden">
                  <img
                    src="Product_Activation.jpg"
                    alt=""
                    className="w-full h-65 md:h-105 object-cover"
                  />
                  <ImageFade />
                </div>

                {/* Floating Card */}
                <div
                  className="hidden md:block absolute left-10 w-90 max-w-[90%] p-4 rounded-2xl backdrop-blur-md bg-surface-900 border border-white/6 shadow-[0_40px_100px_rgba(0,0,0,0.8)]"
                  style={{
                    top: "0",
                    transform: "translate(-20%, -20%)",
                  }}
                >
                  <div className="flex items-center gap-5">
                    <div className="w-20 h-24 rounded-xl overflow-hidden flex-shrink-0">
                      <img src="Product_Activation.jpg" alt="" className="w-full h-full object-cover" />
                    </div>

                    <div className="--font-body-2 text-white/85 leading-relaxed">
                      Software company with a complex product that needs customer
                      education driving actual usage
                    </div>
                  </div>
                </div>

              </div>

              {/* TEXT SIDE */}
              <Stack gap={isMobile ? 32 : 140}>
                <div className="flex items-start gap-3 text-[15px] text-white/60 leading-relaxed">
                  <span className="w-2 h-2 mt-2 rounded-full flex-shrink-0" style={{ background: "var(--color-primary-600)" }} />
                  You've built something powerful, but users don't reach the "aha"
                  moment fast enough to stick.
                </div>

                <Stack gap={16}>
                <Typography variant="h3" className="font-semibold">Product Activation</Typography>

                <Typography variant="body-2" className="text-white/70 leading-relaxed">
                  Create structured education pipelines that guide users from onboarding
                  to mastery—driving real adoption, retention, and measurable growth.
                </Typography>
                </Stack>
              </Stack>

            </Columns>
            </Reveal>
            <SectionDivider />


            {/* ================= DEVELOPER ADOPTION ================= */}
            <Reveal>
            <Columns cols={2} gap={140} mobileGap={40} mobileStack className="items-center relative">

              {/* TEXT SIDE */}
              <Stack gap={isMobile ? 32 : 140} className="order-2 md:order-1">
                <div className="flex items-start gap-3 text-[15px] text-white/60 leading-relaxed">
                  <span className="w-2 h-2 mt-2 rounded-full flex-shrink-0" style={{ background: "var(--color-primary-600)" }} />
                  Developers are interested, but learning curves and unclear entry
                  points stop real building from happening.
                </div>

                <Stack gap={16}>
                <Typography variant="h3" className="font-semibold">Developer Adoption</Typography>

                <Typography variant="body-2" className="text-white/70 leading-relaxed">
                  Design educational journeys that reduce friction, accelerate onboarding,
                  and transform curiosity into active builders and ecosystem growth.
                </Typography>
                </Stack>
              </Stack>

              {/* IMAGE SIDE */}
              <div className="relative order-1 md:order-2">

                <div className="relative rounded-3xl overflow-hidden">
                  <img
                    src="Developer_Adoption.jpg"
                    alt=""
                    className="w-full h-65 md:h-105 object-cover"
                  />
                  <ImageFade />
                </div>

                {/* Floating Card */}
                <div
                  className="hidden md:block absolute right-10 w-90 max-w-[90%] p-6 rounded-2xl backdrop-blur-md bg-surface-900 border border-white/6 shadow-[0_40px_120px_rgba(0,0,0,0.85)]"
                  style={{
                    bottom: "0",
                    transform: "translate(20%, 20%)",
                  }}
                >
                  <div className="flex items-center gap-5">
                    <div className="w-20 h-24 rounded-xl overflow-hidden flex-shrink-0">
                      <img src="Developer_Adoption.jpg" alt="" className="w-full h-full object-cover" />
                    </div>

                    <div className="text-[17px] text-white/85 leading-relaxed">
                      Protocol launching a major feature and seeking rapid adoption.
                    </div>
                  </div>
                </div>

              </div>

            </Columns>
            </Reveal>
            <SectionDivider />


            {/* ================= GO TO MARKET ================= */}
            <Reveal>
            <Columns cols={2} gap={140} mobileGap={40} mobileStack className="items-center relative">

              {/* IMAGE SIDE */}
              <div className="relative">

                <div className="relative rounded-3xl overflow-hidden">
                  <img src="Go-To-Market.jpg" alt="" className="w-full h-65 md:h-105 object-cover" />
                  <ImageFade />
                </div>

                {/* Floating Card */}
                <div
                  className="hidden md:block absolute right-0 w-90 max-w-[90%] p-6 rounded-2xl backdrop-blur-md bg-surface-900 border border-white/6 shadow-[0_40px_100px_rgba(0,0,0,0.8)]"
                  style={{
                    top: "50%",
                    transform: "translate(20%, -50%)",
                  }}
                >
                  <div className="flex items-center gap-5">
                    <div className="w-20 h-24 rounded-xl overflow-hidden flex-shrink-0">
                      <img src="Go-To-Market.jpg" alt="" className="w-full h-full object-cover" />
                    </div>

                    <div className="text-[17px] text-white/85 leading-relaxed">
                      Education business looking to scale products or hand them off entirely
                    </div>
                  </div>
                </div>

              </div>

              {/* TEXT SIDE */}
              <Stack gap={isMobile ? 32 : 140}>
                <div className="flex items-start gap-3 text-[15px] text-white/60 leading-relaxed">
                  <span className="w-2 h-2 mt-2 rounded-full flex-shrink-0" style={{ background: "var(--color-primary-600)" }} />
                  You're launching something valuable, but education isn't converting
                  attention into sustained growth.
                </div>

                <Stack gap={16}>
                <Typography variant="h3" className="font-semibold">Go-To-Market</Typography>

                <Typography variant="body-2" className="text-white/70 leading-relaxed">
                  Use education as a growth engine—aligning launch strategy, adoption,
                  and long-term market expansion.
                </Typography>
                </Stack>
              </Stack>

            </Columns>
            </Reveal>
            <SectionDivider />


            {/* ================= TALENT NETWORK ================= */}
            <Reveal>
            <Columns cols={2} gap={140} mobileGap={40} mobileStack className="items-center relative">

              {/* TEXT SIDE */}
              <Stack gap={isMobile ? 32 : 140} className="order-2 md:order-1">
                <div className="flex items-start gap-3 text-[15px] text-white/60 leading-relaxed">
                  <span className="w-2 h-2 mt-2 rounded-full flex-shrink-0" style={{ background: "var(--color-primary-600)" }} />
                  You need founders, operators, or builders—but there's no scalable
                  way to find, train, and surface the right ones.
                </div>

                <Stack gap={16}>
                <Typography variant="h3" className="font-semibold">Talent Network</Typography>

                <Typography variant="body-2" className="text-white/70 leading-relaxed">
                  Build structured ecosystems that connect learning pathways with
                  real-world opportunity and long-term practitioner growth.
                </Typography>
                </Stack>
              </Stack>

              {/* IMAGE SIDE */}
              <div className="relative order-1 md:order-2">

                <div className="relative rounded-3xl overflow-hidden">
                  <img src="Talent_Network.jpg" alt="" className="w-full h-65 md:h-105 object-cover" />
                  <ImageFade />
                </div>

                {/* Floating Card */}
                <div
                  className="hidden md:block absolute right-10 w-90 max-w-[90%] p-6 rounded-2xl backdrop-blur-md bg-surface-900 border border-white/6 shadow-[0_40px_100px_rgba(0,0,0,0.8)]"
                  style={{
                    top: "72%",
                    transform: "translate(20%, -50%)",
                  }}
                >
                  <div className="flex items-center gap-5">
                    <div className="w-20 h-24 rounded-xl overflow-hidden flex-shrink-0">
                      <img src="Talent_Network.jpg" alt="" className="w-full h-full object-cover" />
                    </div>

                    <div className="text-[17px] text-white/85 leading-relaxed">
                      VC firm looking to build an accelerator to support portfolio companies
                    </div>
                  </div>
                </div>

              </div>

            </Columns>
            </Reveal>

            <SectionDividerWithCurve />

          </Stack>
        </Container>
      </Section>

      {/* ================= EXPERIENCES ORNAMENTAL ================= */}
      <section className="relative py-16 md:py-24 bg-background-900 overflow-hidden">

        {/* soft top blend */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-background-900 to-transparent pointer-events-none" />

        {/* ULTRA SMOOTH BOTTOM FADE */}
<div
  className="absolute bottom-0 left-0 right-0 h-[260px] pointer-events-none z-10"
  style={{
    background: `
      linear-gradient(
        to top,
        var(--color-background-900) 0%,
        var(--color-background-900) 0%,
        rgba(13,13,12,0.95) 8%,
        rgba(13,13,12,0.85) 16%,
        rgba(13,13,12,0.65) 24%,
        rgba(13,13,12,0.40) 32%,
        transparent 100%
      )
    `
  }}
/>

        {/* Ornamental PNG (Decorative Only) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img
            src="/experiences-ornament.png"
            alt=""
            className="w-[80%] max-w-[1100px] object-contain opacity-95 -translate-y-4"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-300 mx-auto px-5 md:px-10 text-center">

          {/* Top Chips */}
          <Reveal>
          <div className="flex justify-center gap-3 md:gap-4 flex-wrap mb-8 md:mb-12">
            {["Bootcamps", "Workshops", "Courses", "Accelerators"].map((item) => (
              <span
                key={item}
                className="px-4 md:px-6 py-2 rounded-full border border-white/20 text-[13px] md:text-[15px] text-white/80 bg-black/60"
              >
                {item}
              </span>
            ))}
          </div>
          </Reveal>

          {/* Headline */}
          <Reveal delay={100}>
          <h2 className="text-[28px] md:text-[40px] font-bold leading-[1.1] tracking-tight text-white mb-10 md:mb-14">
            Experiences we build
            <br />
            with you
          </h2>
          </Reveal>

          {/* Bottom Chips */}
          <Reveal delay={180}>
          <div className="flex justify-center gap-3 md:gap-4 flex-wrap">
            {["Subscriptions", "Communities", "Fellowships"].map((item) => (
              <span
                key={item}
                className="px-4 md:px-6 py-2 rounded-full border border-white/20 text-[13px] md:text-[15px] text-white/80 bg-black/60"
              >
                {item}
              </span>
            ))}
          </div>
          </Reveal>

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

        const total = caseStudies.length
        const offset = isMobile ? 0 : 78
        const totalOffset = offset * (total - 1)

        const [activeIndex, setActiveIndex] = useState(0)
        const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

        const goTo = (index: number) => {
          setActiveIndex(index)
          if (intervalRef.current) clearInterval(intervalRef.current)
          intervalRef.current = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % total)
          }, 10000)
        }

        useEffect(() => {
          intervalRef.current = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % total)
          }, 10000)
          return () => {
            if (intervalRef.current) clearInterval(intervalRef.current)
          }
        }, [])

        return (

          <section className="relative pt-20 md:pt-40 pb-10 bg-background-900 overflow-hidden">

            <div className="max-w-300 mx-auto px-5 md:px-10">

            {/* Heading */}
            <Reveal>
            <div className="text-center mb-16 max-w-190 mx-auto">
              <h5 className="text-[20px] font-medium leading-normal text-white/90">
                Category defining programs,
                <br />
                built to world-class standards
              </h5>
            </div>
            </Reveal>

            {/* ================= STACK WRAPPER ================= */}
            <Reveal delay={80} y={20}>
            <div className="relative" style={{ height: isMobile ? "320px" : "460px" }}>

              {caseStudies.map((item, i) => {

                const order = (i - activeIndex + total) % total
                const indexFromFront = total - 1 - order
                const isFront = indexFromFront === 0

                return (
                  <div
                    key={item.id}
                    onClick={() => goTo(i)}
                    className="absolute top-0 right-0 rounded-3xl overflow-hidden flex flex-col md:grid md:grid-cols-12 cursor-pointer bg-surface-900 border border-white/5"
                    style={{
                      width: isMobile ? "100%" : `calc(100% - ${totalOffset}px)`,
                      height: "100%",
                      transform: `translateX(-${indexFromFront * offset}px)`,
                      opacity: 1,
                      zIndex: 10 + order,
                      boxShadow: isFront
                        ? "0 24px 64px rgba(0,0,0,0.55), 0 8px 24px rgba(0,0,0,0.3)"
                        : "0 4px 16px rgba(0,0,0,0.12)",
                      transition: [
                        "transform 0.65s cubic-bezier(0.16,1,0.3,1)",
                        "box-shadow 0.5s ease",
                      ].join(", "),
                      willChange: "transform",
                    }}
                  >

                    {/* LEFT COPY — identity anchored top, message anchored bottom */}
                    <div className="order-2 md:order-1 col-span-1 md:col-span-6 px-6 py-6 md:px-14 md:py-9 flex-1 flex flex-col justify-between bg-surface-900">

                      {/* TOP: Partner identity */}
                      <div className="text-[15px] text-white/30 tracking-[0.25em] uppercase">
                        {item.label}
                      </div>

                      {/* BOTTOM: Core message */}
                      <div>
                        <div className="text-[17px] md:text-[20px] font-semibold mb-4 text-white leading-snug">
                          {item.title}
                        </div>
                        <div className="text-[15px] text-white/60 leading-relaxed">
                          {item.desc}
                        </div>
                      </div>

                    </div>

                    {/* RIGHT IMAGE — edge-to-edge, true 50% */}
                    <div className="order-1 md:order-2 col-span-1 md:col-span-6 relative shrink-0 h-40 md:h-full">

                      <img
                        src={item.image}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover"
                      />

                      <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-surface-900/80" />

                    </div>

                  </div>
                )
              })}

            </div>
            </Reveal>

            {/* ================= LINE NAVIGATION ================= */}
            <div className="flex justify-center items-center gap-3 mt-8">
              {caseStudies.map((_, i) => {
                const isActive = i === activeIndex
                return (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    style={{
                      position: "relative",
                      height: "2px",
                      width: isActive ? "72px" : "28px",
                      background: "rgba(255,255,255,0.15)",
                      border: "none",
                      padding: 0,
                      cursor: "pointer",
                      overflow: "hidden",
                      transition: "width 0.4s cubic-bezier(0.16,1,0.3,1)",
                    }}
                  >
                    {isActive && (
                      <div
                        key={activeIndex}
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: "rgba(255,255,255,0.85)",
                          transformOrigin: "left center",
                          animation: "indicator-progress 10s linear forwards",
                        }}
                      />
                    )}
                  </button>
                )
              })}
            </div>

            </div>{/* /max-w container */}

          </section>
        )
      })()}


      {/* ================= PROGRAM TRANSFORMATION ================= */}
      <section className="relative pt-10 md:pt-16 pb-16 md:pb-32 bg-background-900">

        <div className="max-w-300 mx-auto px-5 md:px-10">

          {/* IMAGE PANEL */}
          <div className="relative min-h-150 md:min-h-250 overflow-hidden rounded-b-3xl">

            {/* IMAGE */}
            <img
              src="program_transformation.jpg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* ULTRA SMOOTH TOP FADE */}
<div
  className="absolute top-0 left-0 right-0 h-[520px] pointer-events-none"
  style={{
    background: `
      linear-gradient(
        to bottom,
        var(--color-background-900) 0%,
        var(--color-background-900) 18%,
        rgba(13,13,12,0.96) 32%,
        rgba(13,13,12,0.85) 45%,
        rgba(13,13,12,0.70) 60%,
        rgba(13,13,12,0.50) 75%,
        rgba(13,13,12,0.25) 88%,
        transparent 100%
      )
    `
  }}
/>

            {/* ================= CONTENT ================= */}
            <div className="relative z-10 pt-14 md:pt-28 text-center max-w-225 mx-auto px-5 md:px-0">

              <Reveal>
              <div className="text-[15px] text-white/60 mb-3">
                Programs That Deliver
              </div>
              </Reveal>

              <Reveal delay={80}>
              <div
                className="text-[20px] font-medium mb-12"
                style={{ color: "var(--color-primary-600)" }}
              >
                Life Changing Transformations
              </div>
              </Reveal>

              <Reveal delay={160}>
              <h2 className="text-[26px] md:text-[40px] font-reguler leading-[1.4] text-white/90">
                We don't just optimize for outcomes.
                <br />
                <span className="text-white/65 font-reguler">
                  We design programs that change how people see themselves
                  and what they believe they can do next.
                </span>
              </h2>
              </Reveal>
            </div>

            {/* ================= TESTIMONIAL FLOAT ================= */}
            <div className="absolute bottom-36 left-0 right-0 z-10 overflow-hidden">

              <div className="flex gap-8 px-12 animate-marquee">

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
                    text: "The shift wasn't just tactical. It was identity-level.",
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
                      text: "The shift wasn't just tactical. It was identity-level.",
                      name: "Mason Lee",
                      role: "Founder",
                    },
                  ])
                  .map((item, index) => (
                    <div
                      key={index}
                      className="min-w-70 md:min-w-95 max-w-70 md:max-w-95 p-6 md:p-8 rounded-3xl bg-surface-900/80 border border-white/8 shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
                    >
                      <div className="text-[15px] text-white/80 leading-relaxed mb-6">
                        {item.text}
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/20" />
                        <div>
                          <div
                            className="text-[15px] font-semibold"
                            style={{ color: "var(--color-primary-600)" }}
                          >
                            {item.name}
                          </div>
                          <div className="text-[15px] text-white/50">
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
      <section className="relative py-16 md:py-24 bg-background-900 overflow-hidden">

        <div className="max-w-300 mx-auto px-5 md:px-10">

          {/* ================= TOP TEXT ================= */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-20 mb-10 md:mb-16 items-start">

            <Reveal>
            <h2 className="text-[24px] md:text-[32px] font-semibold leading-[1.4] text-white/90">
              Full-stack or Modular.
              <br />
              <span style={{ color: "var(--color-primary-600)" }}>
                Built Around You.
              </span>
            </h2>
            </Reveal>

            <Reveal delay={100}>
            <div className="text-[17px] text-white/60 leading-relaxed max-w-110">
              We can own strategy & execution end-to-end OR partner
              with your team on where guidance is most needed.
            </div>
            </Reveal>

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

            const total = panels.length
            const offset = isMobile ? 18 : 60
            const totalOffset = offset * (total - 1)

            const [activeIndex, setActiveIndex] = useState(0)
            const fsIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

            const goTo = (index: number) => {
              setActiveIndex(index)
              if (fsIntervalRef.current) clearInterval(fsIntervalRef.current)
              fsIntervalRef.current = setInterval(() => {
                setActiveIndex(prev => (prev + 1) % total)
              }, 10000)
            }

            useEffect(() => {
              fsIntervalRef.current = setInterval(() => {
                setActiveIndex(prev => (prev + 1) % total)
              }, 10000)
              return () => {
                if (fsIntervalRef.current) clearInterval(fsIntervalRef.current)
              }
            }, [])

            return (
              <>
                <Reveal delay={80} y={20}>
                <div className="relative overflow-hidden" style={{ height: isMobile ? "380px" : "520px" }}>

                  {panels.map((panel, i) => {

                    const order = (i - activeIndex + total) % total
                    const indexFromFront = total - 1 - order
                    const isFront = indexFromFront === 0

                    return (
                      <div
                        key={panel.id}
                        onClick={() => goTo(i)}
                        className="absolute top-0 right-0 h-full cursor-pointer"
                        style={{
                          width: `calc(100% - ${totalOffset}px)`,
                          transform: `translateX(-${indexFromFront * offset}px)`,
                          zIndex: 20 + order,
                          transition: "transform 0.65s cubic-bezier(0.16,1,0.3,1)",
                          willChange: "transform",
                        }}
                      >

                        {/* OUTER FRAME */}
                        <div
                          className="w-full h-full rounded-[30px] bg-surface-900 border border-white/6"
                          style={{
                            padding: "12px",
                            boxShadow: isFront
                              ? "0 18px 50px rgba(0,0,0,0.40)"
                              : "0 6px 20px rgba(0,0,0,0.22)",
                            transition: "box-shadow 0.5s ease",
                          }}
                        >

                          {/* INNER CARD */}
                          <div className="w-full h-full rounded-[22px] overflow-hidden flex flex-col md:grid md:grid-cols-12 bg-surface-900">

                            {/* IMAGE SIDE */}
                            <div className="col-span-1 md:col-span-7 relative shrink-0 h-32 md:h-full">

                              <img
                                src={panel.image}
                                alt=""
                                className="w-full h-full object-cover"
                              />

                              <div className="absolute inset-0 bg-linear-to-r from-black/60 to-transparent" />

                              <div className="absolute top-6 left-6 text-[24px] font-semibold text-white/85">
                                {panel.number}
                              </div>

                            </div>

                            {/* CONTENT SIDE */}
                            <div className="col-span-1 md:col-span-5 flex-1 px-8 py-8 md:px-14 flex flex-col bg-surface-900">

                              <div
                                className="flex flex-col justify-between h-full"
                                style={{
                                  opacity: isFront ? 1 : 0,
                                  transition: isFront
                                    ? "opacity 0.35s cubic-bezier(0.16,1,0.3,1) 0.2s"
                                    : "opacity 0.12s ease",
                                  pointerEvents: isFront ? "auto" : "none",
                                }}
                              >
                                <div>
                                  <div className="text-[15px] text-white/60 leading-relaxed">
                                    {panel.eyebrow}
                                  </div>

                                  <div className="h-px bg-white/10 mt-8 -mx-8" />
                                </div>

                                <div>
                                  {/* ICON + TITLE */}
                                  <div className="flex items-center gap-4 mb-6">
                                    <div className="text-primary-600">
                                      {panel.icon}
                                    </div>

                                    <div
                                      className="text-[24px] font-semibold"
                                      style={{ color: "var(--color-primary-600)" }}
                                    >
                                      {panel.title}
                                    </div>
                                  </div>

                                  <div className="text-[17px] text-white/70 leading-relaxed">
                                    {panel.desc}
                                  </div>
                                </div>

                              </div>

                            </div>

                          </div>
                        </div>

                      </div>
                    )
                  })}

                </div>
                </Reveal>

                {/* ================= LINE NAVIGATION ================= */}
                <div className="flex justify-center items-center gap-3 mt-8">
                  {panels.map((_, i) => {
                    const isActive = i === activeIndex
                    return (
                      <button
                        key={i}
                        onClick={() => goTo(i)}
                        aria-label={`Go to panel ${i + 1}`}
                        style={{
                          position: "relative",
                          height: "2px",
                          width: isActive ? "72px" : "28px",
                          background: "rgba(255,255,255,0.15)",
                          border: "none",
                          padding: 0,
                          cursor: "pointer",
                          overflow: "hidden",
                          transition: "width 0.4s cubic-bezier(0.16,1,0.3,1)",
                        }}
                      >
                        {isActive && (
                          <div
                            key={activeIndex}
                            style={{
                              position: "absolute",
                              inset: 0,
                              background: "rgba(255,255,255,0.85)",
                              transformOrigin: "left center",
                              animation: "indicator-progress 10s linear forwards",
                            }}
                          />
                        )}
                      </button>
                    )
                  })}
                </div>
              </>
            )

          })()}

        </div>
      </section>
      <SectionDivider />


      {/* ================= PARTNER IMPACT ================= */}
      {(() => {
        const [hoveredCard, setHoveredCard] = useState<number | null>(null);
        const [clickedCard, setClickedCard] = useState<number | null>(null);
        const activeCard = isMobile ? clickedCard : hoveredCard;

        const cards = [
          {
            img: "Uniswap.jpg",
            number: "$2T",
            descLeft: "Powering a protocol securing all-time trading volume",
            descRight: "Ecosystem program focused on Uniswap Hooks",
            col3Metric: "12wk",
            col3Label: "Cohort-based incubator",
            logo: "Uniswap.svg",
            title: "Uniswap Hook Incubator",
            headline: "Ecosystem program focused on Uniswap Hooks",
            expandedDesc: "End-to-end strategy, curriculum, and execution supporting builders at protocol scale. Designed to produce production-ready Hooks shipped by real teams.",
            bottom: "End-to-end strategy, curriculum, and execution supporting builders at protocol scale."
          },
          {
            img: "Learn.jpg",
            number: "1st",
            descLeft: "Ecosystem program",
            descRight: "Open learning adoption",
            col3Metric: "#1",
            col3Label: "Prompting resource globally",
            logo: "Learn.svg",
            title: "Learn Prompting",
            headline: "From open guide to scalable learning system",
            expandedDesc: "Transformed a community-driven resource into a structured, scalable curriculum adopted by practitioners and organizations worldwide.",
            bottom: "From open guide to scalable learning system."
          },
          {
            img: "LevelUp.jpg",
            number: "$2T",
            descLeft: "Trading volume secured",
            descRight: "Talent acceleration",
            col3Metric: "6mo",
            col3Label: "Accelerated track",
            logo: "LevelUp.svg",
            title: "LevelUp Academy",
            headline: "A system for developing talent from the inside",
            expandedDesc: "Built a career acceleration system that identifies high-potential individuals and equips them with the skills to grow within the ecosystem.",
            bottom: "A system for developing talent from the inside."
          },
          {
            img: "GTM.jpg",
            number: "1st",
            descLeft: "Builders shipping production",
            descRight: "Execution framework",
            col3Metric: "8wk",
            col3Label: "Intensive program",
            logo: "Learn.svg",
            title: "GTM Engineer Foundations",
            headline: "Where technical skill meets go-to-market execution",
            expandedDesc: "A program built for engineers ready to own GTM — combining technical depth with positioning, outreach, and deal execution in one cohesive curriculum.",
            bottom: "Where technical skill meets go-to-market execution."
          }
        ];

        const rows = [[0, 1], [2, 3]];

        function getState(i: number): "expanded" | "shrunk" | "normal" {
          if (activeCard === null) return "normal";
          if (i === activeCard) return "expanded";
          if (isMobile) return "normal";
          const sameRow = Math.floor(i / 2) === Math.floor(activeCard / 2);
          if (sameRow) return "shrunk";
          return "normal";
        }

        return (
          <section className="relative py-16 bg-background-900">
            <div className="max-w-300 mx-auto px-5 md:px-10">

              {/* HEADING */}
              <Reveal>
              <div className="text-center mb-10 md:mb-14">
                <h3 className="text-[24px] md:text-[32px] font-semibold leading-[1.1] text-white/90">
                  <span style={{ color: "var(--color-primary-600)" }}>
                    What We've Built
                  </span>{" "}
                  with Our Partners
                </h3>
              </div>
              </Reveal>

              {/* CARD ROWS */}
              <div className="flex flex-col gap-4 md:gap-8">
                {rows.map((row, rowIdx) => (
                  <Reveal key={rowIdx} delay={rowIdx * 100}>
                  <div className={isMobile ? "flex flex-col gap-4" : "flex gap-8 items-stretch"}>
                    {row.map((i) => {
                      const card = cards[i];
                      const state = getState(i);
                      const isExpanded = state === "expanded";
                      const isShrunk = state === "shrunk";

                      return (
                        <div
                          key={i}
                          onMouseEnter={() => !isMobile && setHoveredCard(i)}
                          onMouseLeave={() => !isMobile && setHoveredCard(null)}
                          onClick={() => isMobile && setClickedCard(clickedCard === i ? null : i)}
                          className="relative rounded-3xl overflow-hidden cursor-pointer"
                          style={{
                            height: isMobile ? "280px" : "360px",
                            ...(isMobile ? {} : {
                              flex: isExpanded ? 1.65 : isShrunk ? 0.55 : 1,
                              minWidth: 0,
                              willChange: "flex",
                            }),
                            opacity: !isMobile && activeCard !== null && !isExpanded ? 0.55 : 1,
                            transition: "flex 0.6s cubic-bezier(0.16,1,0.3,1), opacity 0.45s cubic-bezier(0.16,1,0.3,1)",
                          }}
                        >
                          {/* BG IMAGE */}
                          <img
                            src={card.img}
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover brightness-[0.45]"
                          />
                          <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/30 to-transparent" />

                          {/* ================= TOP AREA ================= */}
                          {/* All 3 cols always in DOM — flex+opacity animated with asymmetric delays */}
                          <div className="absolute top-0 left-0 right-0 px-5 pt-5 md:px-10 md:pt-8 h-27.5 md:h-33.75 z-10 flex gap-5 md:gap-9 overflow-hidden">

                            {/* COL 1 — always visible */}
                            <div className="flex-1 flex flex-col justify-between" style={{ minWidth: 0 }}>
                              <div className="flex items-center h-[70px]">
                                <div className="text-[32px] font-semibold text-white">
                                  {card.number}
                                </div>
                              </div>
                              <div className="h-[36px] text-[15px] font-light text-white/60 leading-snug">
                                {card.descLeft}
                              </div>
                            </div>

                            {/* COL 2 — collapses when shrunk; fades before collapsing, fades after expanding */}
                            <div
                              className="flex flex-col justify-between"
                              style={{
                                flex: isShrunk ? 0 : 1,
                                opacity: isShrunk ? 0 : 1,
                                overflow: "hidden",
                                minWidth: 0,
                                transition: isShrunk
                                  ? "flex 0.6s cubic-bezier(0.16,1,0.3,1), opacity 0.12s ease"
                                  : "flex 0.6s cubic-bezier(0.16,1,0.3,1), opacity 0.35s cubic-bezier(0.16,1,0.3,1) 0.22s",
                              }}
                            >
                              <div className="flex items-center h-[70px]">
                                <div className="text-[15px] font-semibold text-white" style={{ whiteSpace: "nowrap" }}>
                                  Builders<br/>shipping<br/>production
                                </div>
                              </div>
                              <div className="h-[36px] text-[15px] font-light text-white/60 leading-snug" style={{ whiteSpace: "nowrap" }}>
                                {card.descRight}
                              </div>
                            </div>

                            {/* COL 3 — expands in; fades before collapsing, fades after expanding */}
                            <div
                              className="flex flex-col justify-between"
                              style={{
                                flex: isExpanded ? 1 : 0,
                                opacity: isExpanded ? 1 : 0,
                                overflow: "hidden",
                                minWidth: 0,
                                transition: isExpanded
                                  ? "flex 0.6s cubic-bezier(0.16,1,0.3,1), opacity 0.35s cubic-bezier(0.16,1,0.3,1) 0.22s"
                                  : "flex 0.6s cubic-bezier(0.16,1,0.3,1), opacity 0.12s ease",
                              }}
                            >
                              <div className="flex items-center h-[70px]">
                                <div className="text-[32px] font-semibold text-white" style={{ whiteSpace: "nowrap" }}>
                                  {card.col3Metric}
                                </div>
                              </div>
                              <div className="h-[36px] text-[15px] font-light text-white/60 leading-snug" style={{ whiteSpace: "nowrap" }}>
                                {card.col3Label}
                              </div>
                            </div>

                          </div>

                          {/* ================= BOTTOM ================= */}
                          {/* Both layouts always rendered; crossfade via opacity to avoid layout shift */}
                          <div className="absolute bottom-0 left-0 right-0 h-[38%] bg-linear-to-b from-transparent via-background-900/85 to-background-900 backdrop-blur-sm">
                            <div className="relative h-full">

                              {/* DEFAULT / SHRUNK layout */}
                              <div
                                className="absolute inset-0 px-5 pt-4 pb-5 md:px-10 md:pt-5 md:pb-7 flex flex-col justify-start"
                                style={{
                                  opacity: isExpanded ? 0 : 1,
                                  pointerEvents: isExpanded ? "none" : "auto",
                                  transition: isExpanded
                                    ? "opacity 0.12s ease"
                                    : "opacity 0.35s cubic-bezier(0.16,1,0.3,1) 0.22s",
                                }}
                              >
                                <div className="flex items-center gap-3 mb-2">
                                  <img
                                    src={card.logo}
                                    alt=""
                                    className="h-8 w-auto object-contain opacity-90"
                                  />
                                  <div className="flex items-center gap-2 text-white text-[15px] font-medium">
                                    {card.title}
                                    <span className="text-white/60 text-[15px]">›</span>
                                  </div>
                                </div>
                                <div className="text-[15px] text-white/65 font-light leading-relaxed max-w-[80%]">
                                  {card.bottom}
                                </div>
                              </div>

                              {/* EXPANDED layout */}
                              <div
                                className="absolute inset-0 px-5 pt-4 pb-5 md:px-10 md:pt-5 md:pb-7 flex gap-4 md:gap-6"
                                style={{
                                  opacity: isExpanded ? 1 : 0,
                                  pointerEvents: isExpanded ? "auto" : "none",
                                  transition: isExpanded
                                    ? "opacity 0.35s cubic-bezier(0.16,1,0.3,1) 0.22s"
                                    : "opacity 0.12s ease",
                                }}
                              >
                                <div className="flex flex-col justify-between min-w-0" style={{ flex: 1, paddingRight: "80px" }}>
                                  <div className="text-[15px] font-normal text-white leading-snug mb-2">
                                    {card.headline}
                                  </div>
                                  <div
                                    className="text-[13px] text-white/60 font-normal leading-relaxed"
                                    style={{
                                      display: "-webkit-box",
                                      WebkitLineClamp: 4,
                                      WebkitBoxOrient: "vertical" as const,
                                      overflow: "hidden",
                                    }}
                                  >
                                    {card.expandedDesc}
                                  </div>
                                </div>
                                <div className="flex flex-col justify-between items-end shrink-0">
                                  <div className="flex items-center gap-2">
                                    <img
                                      src={card.logo}
                                      alt=""
                                      className="h-8 w-auto object-contain opacity-90"
                                    />
                                    <span className="text-white text-[17px] font-semibold whitespace-nowrap">
                                      {card.title}
                                    </span>
                                  </div>
                                  <a
                                    href="#"
                                    className="group flex items-center gap-1 text-[15px] font-semibold"
                                    style={{ color: "var(--color-primary-600)" }}
                                  >
                                    <span className="underline decoration-transparent group-hover:decoration-current transition-[text-decoration-color] duration-200">
                                      Learn more
                                    </span>
                                    <span
                                      className="inline-block transition-transform duration-200 group-hover:translate-x-[3px]"
                                      style={{ opacity: 0.9 }}
                                    >
                                      →
                                    </span>
                                  </a>
                                </div>
                              </div>

                            </div>
                          </div>

                        </div>
                      );
                    })}
                  </div>
                  </Reveal>
                ))}
              </div>

            </div>
          </section>
        );
      })()}


      {/* ================= FINAL CTA + FOOTER ================= */}
      <section className="relative bg-background-900 overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0">
          <img
            src="CTA_Background.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* GLOBAL DARK OVERLAY */}
<div
  className="absolute inset-0 pointer-events-none"
  style={{
    background: `
      linear-gradient(
        to bottom,
        rgba(0,0,0,0.75) 80%,
        rgba(0,0,0,0.78) 84%,
        rgba(0,0,0,0.82) 88%,
        rgba(0,0,0,0.88) 96%,
        rgba(0,0,0,0.92) 100%
      )
    `
  }}
/>
        
        {/* SMOOTH TOP TRANSITION */}
<div
  className="absolute top-0 left-0 right-0 h-[420px] pointer-events-none"
  style={{
    background: `
      linear-gradient(
        to bottom,
        var(--color-background-900) 0%,
        var(--color-background-900) 20%,
        rgba(13,13,12,0.96) 35%,
        rgba(13,13,12,0.85) 50%,
        rgba(13,13,12,0.65) 65%,
        rgba(13,13,12,0.35) 80%,
        transparent 100%
      )
    `
  }}
/>


        {/* ================= CTA CONTENT ================= */}
        <div className="relative z-10 min-h-175 md:min-h-287.5 flex flex-col items-center justify-center text-center px-5 md:px-10">

          <Reveal>
          <h2 className="text-[28px] md:text-[40px] font-bold leading-[1.4] text-white tracking-tight">
            Build something meaningful together.
          </h2>
          </Reveal>

          {/* CTA BUTTON */}
          <Reveal delay={150}>
          <div className="mt-8 md:mt-14">

            <div className="relative inline-block group">

              {/* Bottom slab */}
              <div className="absolute inset-0 translate-x-[4px] translate-y-[4px] rounded-xl bg-[#0E7A52]" />

              {/* Main surface */}
              <div
                className="
                  relative px-10 py-4 rounded-xl
                  text-[15px] font-semibold
                  transition-all duration-150
                  group-hover:translate-x-[1px] group-hover:translate-y-[1px]
                "
                style={{
                  background: "#BFF3DA",
                  color: "var(--color-background-900)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.35)"
                }}
              >
                Work with us
              </div>

            </div>

          </div>
          </Reveal>

        </div>

        {/* ================= LARGE ATRIUM LOGO ================= */}
        <div className="absolute bottom-40 left-1/2 -translate-x-1/2 z-10 pointer-events-none opacity-[10]">

          <img
            src="Atrium_Big.png"
            alt=""
            className="w-295 max-w-[95vw] object-contain"
          />

        </div>

        {/* ================= FOOTER ================= */}
        <div className="relative z-20 bg-background-900/85 border-t border-white/10">

          <div className="max-w-300 mx-auto px-5 md:px-10 py-6 flex flex-col md:flex-row gap-4 justify-between items-center text-[15px] text-white/60">

            <div>
              © Atrium 2026. All right reserved
            </div>

            <div className="flex gap-6 md:gap-10">
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
